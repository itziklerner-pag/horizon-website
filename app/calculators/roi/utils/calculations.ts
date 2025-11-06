export interface CalculatorInputs {
  powerCapacity: number; // MW
  location: string; // State code
  currentEnergySource: 'diesel' | 'natural-gas' | 'grid' | 'battery';
  timeline: number; // Years
}

export interface ROIResults {
  fuelCell: {
    initialCost: number;
    annualOperating: number;
    totalCost: number;
  };
  diesel: {
    initialCost: number;
    annualOperating: number;
    totalCost: number;
  };
  battery: {
    initialCost: number;
    annualOperating: number;
    totalCost: number;
  };
  savings: {
    vsDiesel: number;
    vsBattery: number;
  };
  paybackPeriod: number; // Years
  emissions: {
    co2Avoided: number; // Tons over timeline
    equivalentTrees: number;
  };
  yearlyBreakdown: Array<{
    year: number;
    fuelCell: number;
    diesel: number;
    battery: number;
  }>;
}

// State-specific electricity rates (cents per kWh)
const ELECTRICITY_RATES: Record<string, number> = {
  CA: 25.5,
  NY: 21.3,
  TX: 12.8,
  FL: 13.2,
  IL: 14.1,
  PA: 13.9,
  OH: 12.3,
  GA: 12.7,
  NC: 11.8,
  MI: 15.4,
  NJ: 16.2,
  VA: 12.1,
  WA: 10.4,
  AZ: 13.2,
  MA: 22.8,
  TN: 11.5,
  IN: 12.9,
  MO: 11.3,
  MD: 13.7,
  WI: 14.2,
  CO: 13.2,
  MN: 13.7,
  SC: 13.1,
  AL: 12.4,
  LA: 10.5,
  KY: 11.1,
  OR: 11.5,
  OK: 10.8,
  CT: 21.9,
  UT: 10.9,
  IA: 12.1,
  NV: 12.5,
  AR: 10.3,
  MS: 11.5,
  KS: 13.2,
  NM: 13.1,
  NE: 11.0,
  WV: 11.8,
  ID: 10.2,
  HI: 33.4,
  NH: 19.8,
  ME: 16.3,
  RI: 21.5,
  MT: 11.2,
  DE: 12.8,
  SD: 11.5,
  ND: 11.1,
  AK: 22.5,
  VT: 18.2,
  WY: 11.0,
};

// Cost constants (per MW)
const COSTS = {
  fuelCell: {
    capitalPerMW: 2_500_000, // $2.5M per MW
    annualOMPerMW: 50_000, // $50k per MW per year
    hydrogenCostPerKg: 5, // $5 per kg (improving over time)
    hydrogenUsageKgPerMWh: 20, // 20kg per MWh
    efficiency: 0.6, // 60% efficiency
  },
  diesel: {
    capitalPerMW: 800_000, // $800k per MW
    annualOMPerMW: 80_000, // $80k per MW per year
    fuelCostPerGallon: 4.5, // $4.50 per gallon
    fuelUsageGallonPerMWh: 60, // 60 gallons per MWh
    emissionsTonsPerMWh: 0.7, // 0.7 tons CO2 per MWh
  },
  battery: {
    capitalPerMW: 1_800_000, // $1.8M per MW (including storage)
    replacementCost: 0.6, // 60% of capital cost every 10 years
    annualOMPerMW: 30_000, // $30k per MW per year
    chargingEfficiencyLoss: 0.15, // 15% energy loss
    emissionsTonsPerMWh: 0.4, // Grid emissions (varies by location)
  },
  naturalGas: {
    capitalPerMW: 1_000_000,
    annualOMPerMW: 70_000,
    fuelCostPerMMBtu: 5,
    emissionsTonsPerMWh: 0.4,
  },
};

// Assume average utilization (hours per year)
const AVERAGE_UTILIZATION_HOURS = 6000; // ~68% capacity factor

export function calculateROI(inputs: CalculatorInputs): ROIResults {
  const { powerCapacity, location, currentEnergySource, timeline } = inputs;

  // Get electricity rate for location
  const electricityRate = (ELECTRICITY_RATES[location] || 13.0) / 100; // Convert to dollars

  // Annual energy production (MWh)
  const annualEnergyMWh = powerCapacity * AVERAGE_UTILIZATION_HOURS;

  // Fuel Cell Costs
  const fuelCellInitial = powerCapacity * COSTS.fuelCell.capitalPerMW;
  const fuelCellAnnualOM = powerCapacity * COSTS.fuelCell.annualOMPerMW;

  // Hydrogen costs (decreasing 5% per year to simulate improving economics)
  let fuelCellTotalOperating = 0;
  for (let year = 0; year < timeline; year++) {
    const hydrogenCost = COSTS.fuelCell.hydrogenCostPerKg * Math.pow(0.95, year);
    const annualHydrogenCost =
      annualEnergyMWh * COSTS.fuelCell.hydrogenUsageKgPerMWh * hydrogenCost;
    fuelCellTotalOperating += fuelCellAnnualOM + annualHydrogenCost;
  }
  const fuelCellAnnualAvg = fuelCellTotalOperating / timeline;
  const fuelCellTotal = fuelCellInitial + fuelCellTotalOperating;

  // Diesel Costs
  const dieselInitial = powerCapacity * COSTS.diesel.capitalPerMW;
  const dieselAnnualOM = powerCapacity * COSTS.diesel.annualOMPerMW;
  const dieselAnnualFuel =
    annualEnergyMWh * COSTS.diesel.fuelUsageGallonPerMWh * COSTS.diesel.fuelCostPerGallon;
  const dieselAnnualTotal = dieselAnnualOM + dieselAnnualFuel;
  const dieselTotal = dieselInitial + (dieselAnnualTotal * timeline);

  // Battery Costs (with replacement every 10 years)
  const batteryInitial = powerCapacity * COSTS.battery.capitalPerMW;
  const batteryAnnualOM = powerCapacity * COSTS.battery.annualOMPerMW;

  // Charging costs (need to buy electricity from grid)
  const batteryChargingCost =
    annualEnergyMWh * (1 + COSTS.battery.chargingEfficiencyLoss) * electricityRate * 1000; // MWh to kWh

  const batteryAnnualTotal = batteryAnnualOM + batteryChargingCost;

  // Add replacement costs
  const batteryReplacements = Math.floor(timeline / 10);
  const batteryReplacementCost =
    batteryReplacements * batteryInitial * COSTS.battery.replacementCost;

  const batteryTotal =
    batteryInitial + (batteryAnnualTotal * timeline) + batteryReplacementCost;

  // Savings calculations
  const savingsVsDiesel = dieselTotal - fuelCellTotal;
  const savingsVsBattery = batteryTotal - fuelCellTotal;

  // Payback period (years until fuel cell breaks even vs diesel)
  let paybackPeriod = 0;
  let fuelCellCumulative = fuelCellInitial;
  let dieselCumulative = dieselInitial;

  for (let year = 1; year <= timeline; year++) {
    const hydrogenCost = COSTS.fuelCell.hydrogenCostPerKg * Math.pow(0.95, year - 1);
    const annualHydrogenCost =
      annualEnergyMWh * COSTS.fuelCell.hydrogenUsageKgPerMWh * hydrogenCost;

    fuelCellCumulative += fuelCellAnnualOM + annualHydrogenCost;
    dieselCumulative += dieselAnnualTotal;

    if (paybackPeriod === 0 && fuelCellCumulative < dieselCumulative) {
      // Interpolate for more accurate payback
      const prevFCCost = fuelCellCumulative - (fuelCellAnnualOM + annualHydrogenCost);
      const prevDieselCost = dieselCumulative - dieselAnnualTotal;
      const fraction =
        (prevDieselCost - prevFCCost) /
        ((fuelCellCumulative - prevFCCost) - (dieselCumulative - prevDieselCost));
      paybackPeriod = year - 1 + fraction;
    }
  }

  // If no payback within timeline, set to timeline
  if (paybackPeriod === 0) {
    paybackPeriod = timeline;
  }

  // Emissions calculations
  const dieselEmissionsTotal = annualEnergyMWh * COSTS.diesel.emissionsTonsPerMWh * timeline;
  const fuelCellEmissions = 0; // Zero emissions for fuel cells
  const co2Avoided = dieselEmissionsTotal - fuelCellEmissions;

  // 1 tree absorbs ~0.05 tons CO2 per year
  const equivalentTrees = Math.round(co2Avoided / (0.05 * timeline));

  // Yearly breakdown for chart
  const yearlyBreakdown = [];
  let fcCum = fuelCellInitial;
  let dCum = dieselInitial;
  let bCum = batteryInitial;

  for (let year = 1; year <= timeline; year++) {
    const hydrogenCost = COSTS.fuelCell.hydrogenCostPerKg * Math.pow(0.95, year - 1);
    const annualHydrogenCost =
      annualEnergyMWh * COSTS.fuelCell.hydrogenUsageKgPerMWh * hydrogenCost;

    fcCum += fuelCellAnnualOM + annualHydrogenCost;
    dCum += dieselAnnualTotal;
    bCum += batteryAnnualTotal;

    // Add battery replacement if needed
    if (year % 10 === 0) {
      bCum += batteryInitial * COSTS.battery.replacementCost;
    }

    yearlyBreakdown.push({
      year,
      fuelCell: Math.round(fcCum),
      diesel: Math.round(dCum),
      battery: Math.round(bCum),
    });
  }

  return {
    fuelCell: {
      initialCost: Math.round(fuelCellInitial),
      annualOperating: Math.round(fuelCellAnnualAvg),
      totalCost: Math.round(fuelCellTotal),
    },
    diesel: {
      initialCost: Math.round(dieselInitial),
      annualOperating: Math.round(dieselAnnualTotal),
      totalCost: Math.round(dieselTotal),
    },
    battery: {
      initialCost: Math.round(batteryInitial),
      annualOperating: Math.round(batteryAnnualTotal),
      totalCost: Math.round(batteryTotal),
    },
    savings: {
      vsDiesel: Math.round(savingsVsDiesel),
      vsBattery: Math.round(savingsVsBattery),
    },
    paybackPeriod: Number(paybackPeriod.toFixed(1)),
    emissions: {
      co2Avoided: Math.round(co2Avoided),
      equivalentTrees,
    },
    yearlyBreakdown,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}
