#!/bin/bash

cd /Users/brendoncabral/Documents/Projects/brendoncabral-site || exit 1

# Open the project in VS Code
code .

# Start Astro dev server in the background
npm run dev > /tmp/brendon-site-dev.log 2>&1 &

# Wait until the site is actually responding
until curl -s http://localhost:4321 > /dev/null; do
  sleep 1
done

# Open Safari once the server is live
open -a Safari http://localhost:4321

# Keep terminal open
exec bash