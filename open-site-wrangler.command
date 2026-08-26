#!/bin/bash

cd /Users/brendoncabral/Documents/Projects/brendoncabral-site || exit 1

# Open the project in VS Code
code .

# Start Astro WRANGLER dev server in the background
npx wrangler pages dev --ip 0.0.0.0 -- npx astro dev --host

# Wait until the site is actually responding
until curl -s http://localhost:4321 > /dev/null; do
  sleep 1
done

# Open Safari once the server is live
open -a Safari http://localhost:4321

# Keep terminal open
exec bash