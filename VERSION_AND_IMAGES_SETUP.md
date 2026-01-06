# Version & Images Setup - Complete

## ✅ Final Structure

### 📁 Folder Organization

```
mintlify/
├── v2/                          # Previous version (current production content)
│   ├── images/                  # v2 images (independent)
│   │   ├── screenshots/        # v2 screenshots
│   │   ├── bruno.svg
│   │   ├── postman.svg
│   │   ├── files/
│   │   └── static/
│   ├── introduction/
│   ├── get-started/
│   ├── send-requests/
│   └── ... (all v2 content)
│
├── images/                      # v3 images (independent)
│   ├── screenshots/            # 372 webp files from bruno-docs
│   ├── bruno.svg
│   ├── postman.svg
│   ├── files/
│   └── static/
│
├── introduction/                # v3 content (latest from bruno-docs)
├── get-started/
├── send-requests/
└── ... (all v3 content)
```

## 🔗 URL & Path Structure

### v3 (Latest - Default)
- **URLs**: Clean, no version prefix
  - Example: `http://localhost:3001/get-started/configure/proxy-config`
- **Image Paths**: `/images/screenshots/filename.webp`
- **Content Source**: bruno-docs repository
- **Screenshot Count**: 372 webp files

### v2 (Previous Production Version)
- **URLs**: With `/v2/` prefix
  - Example: `http://localhost:3001/v2/get-started/configure/proxy-config`
- **Image Paths**: `/v2/images/screenshots/filename.webp`
- **Content Source**: Original mintlify content
- **Screenshot Count**: 16 webp files (original set)

## 🖼️ Image Path Updates

### What Was Fixed

1. **v2 Content**: 
   - Updated 90 MDX files
   - Changed `/images/` → `/v2/images/`
   - Independent image folder with original screenshots

2. **v3 Content**:
   - Updated 101 MDX files  
   - Changed `/screenshots/` → `/images/screenshots/`
   - Changed `/public/screenshots/` → `/images/screenshots/`
   - Full screenshot collection from bruno-docs (372 files)

## 📄 Content Differences

### Homepage (what-is-bruno.mdx)
- **v2**: Original current production homepage
- **v3**: Updated homepage from bruno-docs
- ✅ Confirmed: Files are DIFFERENT

### New Pages in v3
1. `get-started/bruno-basics/create-a-workspace.mdx`
2. `api-docs/auto-generate-docs.mdx`
3. `api-docs/workspace-docs.mdx`
4. `git-integration/azure-devops.mdx`

## 🎯 User Experience

### Default Behavior
1. Users land on **v3** (latest) with clean URLs
2. Version selector shows **v3 selected by default**
3. Homepage shows **new content from bruno-docs**
4. All **372 screenshots** available

### When Switching to v2
1. URL changes to include `/v2/` prefix
2. Shows **original production content**
3. Homepage shows **old content**
4. Uses **original screenshot set** (16 files)

## 🔄 Version Comparison

| Feature | v2 (Old) | v3 (New) |
|---------|----------|----------|
| URL | `/v2/path` | `/path` |
| Images | `/v2/images/` | `/images/` |
| Content | Current production | bruno-docs |
| Screenshots | 16 files | 372 files |
| Homepage | Old version | New version |
| Default | No | Yes ✓ |

## ✅ Verification Checklist

- [x] v2 folder has independent images
- [x] v3 (root) has independent images
- [x] v2 content references `/v2/images/` paths
- [x] v3 content references `/images/` paths
- [x] Homepages are different between versions
- [x] All screenshots synced from bruno-docs to v3
- [x] docs.json updated with correct paths
- [x] v3 is set as default version
- [x] No linter errors

## 🚀 Testing

To test locally:
```bash
cd /Users/ganeshpatil/Desktop/bruno/mintlify
npm run dev
# or
mintlify dev
```

Then verify:
1. Default page loads v3 content with clean URLs
2. Images display correctly on v3 pages
3. Switch to v2 via version selector
4. v2 images display correctly
5. v2 shows old homepage content

## 📊 Stats

- **v2 MDX files updated**: 90
- **v3 MDX files updated**: 101
- **v2 screenshots**: 16 webp files
- **v3 screenshots**: 372 webp files
- **Total content folders**: 17
- **New pages added**: 4

---

**Date**: January 6, 2025
**Status**: ✅ Complete - All images separated, paths fixed, versions working independently

