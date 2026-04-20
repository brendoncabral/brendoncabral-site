#!/bin/bash

cd /Users/brendoncabral/Documents/Projects/brendoncabral-site

echo "Enter title of edit:"
read message

git add .
git commit -m "$message"
git push

echo "✅ Site published!"
exec bash