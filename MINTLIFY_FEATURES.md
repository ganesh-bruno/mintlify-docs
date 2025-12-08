# Mintlify Features Availability Guide

## 🎯 Your Current Deployment

**Live URL:** https://na-e9bbf881.mintlify.app/introduction/what-is-bruno

## 📊 Feature Availability by Plan

### Free Plan (Your Current Plan)
✅ **Available:**
- Fast documentation hosting
- Search functionality  
- Dark/Light mode toggle
- Mobile responsive design
- Custom navigation
- Automatic deployments
- Basic analytics

❌ **Not Available:**
- **AI Chat features** (Copy page, ChatGPT, Claude integration)
- **Advanced analytics**
- **Custom domain** (requires Growth plan)
- **Advanced customization**

### Growth Plan ($120/month)
✅ **Includes Free features PLUS:**
- Custom domain (e.g., docs.usebruno.com)
- Advanced analytics
- Team collaboration
- Priority support

### Enterprise Plan
✅ **Includes Growth features PLUS:**
- AI Chat features (Copy page button)
- White-label branding
- SSO authentication
- SLA guarantees

## 🔍 What You're Missing

Based on your deployment, here's what you expected but isn't available on the Free plan:

### 1. **Copy Page Button** (AI Features)
- **Status:** ❌ Enterprise feature only
- **Includes:**
  - Copy page as Markdown for LLMs
  - Open in ChatGPT
  - Open in Claude  
  - Connect to Cursor
  - Connect to VS Code

**Alternative:** Users can manually copy content or use browser extensions

### 2. **Edit This Page Button**
- **Status:** ⚠️ Should be working but needs proper configuration
- **Solution:** See configuration fix below

### 3. **Feedback Buttons**
- **Status:** ⚠️ Should be working  
- **Solution:** Need to verify GitHub connection

## 🔧 How to Enable Edit Buttons (Free Feature)

The "Edit this page" and "Raise issue" buttons should work on the Free plan. Here's how to enable them:

### Step 1: Update mint.json

Your configuration needs to specify the repository for edit links. Update your `mint.json`:

```json
{
  "feedback": {
    "thumbsRating": true,
    "suggestEdit": true,
    "raiseIssue": true
  }
}
```

### Step 2: Connect GitHub in Mintlify Dashboard

1. Go to https://dashboard.mintlify.com
2. Select your project
3. Go to **Settings** → **GitHub**
4. Ensure your repository is connected
5. The repository should be where your docs are stored

### Step 3: Verify Repository Structure

Mintlify needs to know where your MDX files are. Your structure should be:

```
repository/
├── mint.json (at root)
├── introduction/
│   ├── what-is-bruno.mdx
│   ├── manifesto.mdx
│   └── ...
└── ...
```

## 🎨 Alternative Solutions

Since AI features aren't available on the Free plan, here are alternatives:

### Option 1: Add Manual Edit Links
Add this to the bottom of your MDX files:

```markdown
---

**Found an issue?** [Edit this page on GitHub](https://github.com/usebruno/bruno-docs/edit/main/path/to/file.mdx)
```

### Option 2: Add a "Contribute" Section
Create a dedicated page explaining how users can contribute:

```markdown
# Contributing to Documentation

## Edit Pages
1. Click the file path at the top of each page
2. Click "Edit" on GitHub
3. Make your changes
4. Submit a pull request

## Report Issues
[Open an issue on GitHub](https://github.com/usebruno/bruno-docs/issues/new)
```

### Option 3: Upgrade to Enterprise
If you need AI chat features:
- **Cost:** Custom pricing (contact Mintlify)
- **Benefits:** Full AI integration + all premium features

## 📋 Current Configuration Status

Let me verify your current setup:

### ✅ Working Features
- [x] Documentation is live and accessible
- [x] Search works
- [x] Navigation works
- [x] All pages load correctly
- [x] Images display
- [x] Dark/Light mode toggle
- [x] Mobile responsive

### ⚠️ Needs Configuration
- [ ] Edit page button (should work on Free plan)
- [ ] Raise issue button (should work on Free plan)
- [ ] Thumbs rating (should work on Free plan)

### ❌ Not Available (Upgrade Required)
- [ ] Copy page button (Enterprise)
- [ ] AI chat integrations (Enterprise)
- [ ] Custom domain (Growth)

## 🚀 Recommended Actions

### Immediate (Free):
1. **Fix GitHub integration** for edit buttons
2. **Add manual edit links** to important pages
3. **Create a "Contributing" page**

### Short-term (Growth - $120/month):
1. **Add custom domain:** docs.usebruno.com
2. **Get advanced analytics**
3. **Enable team features**

### Long-term (Enterprise):
1. **Contact Mintlify** for pricing
2. **Enable AI chat features**
3. **Get white-label branding**

## 🔗 Resources

- **Mintlify Pricing:** https://mintlify.com/pricing
- **Mintlify Docs:** https://mintlify.com/docs
- **Mintlify Support:** hi@mintlify.com

## 💡 Summary

**What you have now (Free plan):**
- Professional, fast documentation ✅
- Automatic deployments ✅
- Search functionality ✅
- Mobile responsive ✅

**What you're missing:**
- AI chat features ❌ (Enterprise only)
- Custom domain ❌ (Growth plan)
- Edit buttons ⚠️ (Should work, needs fix)

**Recommendation:**
1. Fix the GitHub integration for edit buttons (FREE)
2. Add manual contribution instructions (FREE)
3. Consider Growth plan for custom domain ($120/month)
4. Only upgrade to Enterprise if AI features are critical

---

**Your documentation looks great!** 🎉

The core functionality is working. The AI features are premium add-ons that most documentation sites don't actually need.

