#!/bin/bash

# Script to update all strategy documents with required changes
# Updates files in both updated_strategy/ and public/docs/ directories

DIRS=("/Users/itziklerner/dev/horizon-website/updated_strategy" "/Users/itziklerner/dev/horizon-website/public/docs")

for DIR in "${DIRS[@]}"; do
  echo "Processing directory: $DIR"

  # Find all markdown files
  find "$DIR" -name "*.md" -type f | while read -r file; do
    echo "Updating: $file"

    # Skip already updated files
    if [[ "$file" == *"Bloom_Energy_Competitive_Analysis_Updated.md" ]] || [[ "$file" == *"Executive_Strategy_Updated.md" ]]; then
      echo "  Skipping already updated file"
      continue
    fi

    # 1. Replace Bloom/Bloom Energy with SOFC
    sed -i '' 's/Bloom Energy/SOFC/g' "$file"
    sed -i '' 's/Bloom/SOFC/g' "$file"

    # 2. Update deployment timeline language
    sed -i '' 's/Deploy in as low as 4 months/Deployment start as low as 4 months/g' "$file"
    sed -i '' 's/deploy in as low as 4 months/deployment start as low as 4 months/g' "$file"
    sed -i '' 's/Deploy in 4 months/Deployment start as low as 4 months/g' "$file"
    sed -i '' 's/deploy in 4 months/deployment start as low as 4 months/g' "$file"
    sed -i '' 's/PO to Power-On/Deployment start/g' "$file"

    # 3. Remove ROI calculator references
    sed -i '' 's/ROI calculator/cost calculator/g' "$file"
    sed -i '' 's/ROI Calculator/Cost Calculator/g' "$file"
    sed -i '' '/\/calculators\/roi/d' "$file"

    # 4. Update containerized specs (100kW or 200kW to 1.5MW continuous, 3MW peak)
    sed -i '' 's/100kW/1.5MW continuous power, 3MW peak power/g' "$file"
    sed -i '' 's/200kW to multi-MW/1.5MW to multi-GW/g' "$file"
    sed -i '' 's/200kW-MW+/1.5MW-multi-GW/g' "$file"

    # 5. Update SOFC deployment timeline
    sed -i '' 's/6-12 months (SOFC)/12-24 months (SOFC)/g' "$file"
    sed -i '' 's/6-12 months.*SOFC/12-24 months (SOFC)/g' "$file"

    # 6. Update SOFC unit size
    sed -i '' 's/250kW Energy Server/325kW Energy Server/g' "$file"
    sed -i '' 's/250kW units/325kW units/g' "$file"
    sed -i '' 's/Fixed 250kW/Fixed 325kW/g' "$file"

    # 7. Update go-to-market from Enterprise to Utility/Government
    sed -i '' 's/Enterprise data centers with sustainability commitments/Utility providers and local governments/g' "$file"

    # 8. Remove EPA compliance references
    sed -i '' '/EPA compliant/d' "$file"
    sed -i '' '/EPA compliance/d' "$file"

    # 9. Update Horizon experience and deployment
    sed -i '' 's/with over two decades of experience\./with over two decades of experience, and hundreds of MW deployed across various regions such as South Korea, China and Australia./g' "$file"

    # 10. Update Horizon operating temp to only show 60-80°C (remove SOFC comparison from Horizon row)
    # This is context-specific, will handle manually if needed

    echo "  Completed: $file"
  done
done

echo "All files updated successfully!"
