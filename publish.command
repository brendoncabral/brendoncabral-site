#!/bin/bash

# Move to the project folder automatically
cd "$(dirname "$0")"

echo "Checking for code errors..."
if ! npm run build; then
    echo "❌ Build failed! Fix the errors above before publishing."
    exec bash
    exit 1
fi

read -p "Enter title of edit: " message

if [ -z "$message" ]; then
    message="Update site"
fi

git add .

if git commit -m "$message" && git push; then
    echo "✅ Site published successfully!"
else
    echo "❌ Upload failed. Your local code might be out of sync with GitHub."
fi

exec bash
