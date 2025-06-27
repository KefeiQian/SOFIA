

# Build the React app
npm run build

# Navigate to build directory
cd build

# Init and push
git init
git remote add origin https://github.com/kefeiqian_microsoft/SOFIA.git
git fetch origin
git checkout -b start-point origin/start-point
git add .
git commit -m "Deploy"
git rebase origin/start-point
git push -fu origin start-point:main

