# Fix Image Loading Issue

## Problem
Images in `src/assets` cannot be loaded using relative paths in Vite. They need to be either:
1. Moved to the `public` folder and referenced with absolute paths
2. Or imported in the code

## Solution: Move Images to Public Folder

### Step 1: Move the image folders
Move these folders from `src/assets/` to `public/assets/`:
- `Lapland Itenary images/`
- `NewYork Itenary Images/`
- `Paris Itenary Images/`

Also move:
- `Brochure of itenary/` from `src/` to `public/`

### Step 2: Update the paths in itenaryData.ts
Change all paths from `../assets/` to `/assets/`
Change PDF paths from `../Brochure of itenary/` to `/Brochure of itenary/`

### Commands to run (in Git Bash or PowerShell):
```bash
# Create public/assets directory if it doesn't exist
mkdir -p public/assets

# Move image folders
mv "src/assets/Lapland Itenary images" "public/assets/"
mv "src/assets/NewYork Itenary Images" "public/assets/"
mv "src/assets/Paris Itenary Images" "public/assets/"

# Move brochure folder
mv "src/Brochure of itenary" "public/"
```

After moving, the paths in itenaryData.ts should use `/assets/` instead of `../assets/`
