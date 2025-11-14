#!/bin/bash

# Script to remove detailed SMR technical specifications

DIRS=("/Users/itziklerner/dev/horizon-website/updated_strategy" "/Users/itziklerner/dev/horizon-website/public/docs")

for DIR in "${DIRS[@]}"; do
  echo "Cleaning SMR specs in: $DIR"

  find "$DIR" -name "*.md" -type f | while read -r file; do
    # Remove specific detailed SMR technical spec lines
    sed -i '' '/Hydrogen production: 100,000+ Nm³\/h/d' "$file"
    sed -i '' '/100,000+ Nm³\/h capability/d' "$file"
    sed -i '' '/Operating temperature: 800-900°C reforming/d' "$file"
    sed -i '' '/800-900°C reforming temperature/d' "$file"
    sed -i '' '/Steam-to-carbon ratio/d' "$file"
    sed -i '' '/Overall system efficiency: 75-80%/d' "$file"
    sed -i '' '/steam-to-carbon ratio/d' "$file"

    echo "  Processed: $file"
  done
done

echo "SMR spec cleanup complete!"
