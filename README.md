# CodeVault Africa - React App Deployment Guide

## 🚀 Complete Setup & Deployment Instructions

### Step 1: Create React App

```bash
# Create new React app
npx create-react-app codevault-africa
cd codevault-africa

# Remove default files
rm src/App.css src/App.test.js src/logo.svg src/reportWebVitals.js src/setupTests.js
```

### Step 2: Install Dependencies

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install GitHub Pages deployment tool
npm install --save-dev gh-pages
```

### Step 3: Copy All Files

Copy and paste each file from the artifacts above into your project:

#### Root Files:
- `package.json` (replace existing)
- `tailwind.config.js` (replace existing)
- `postcss.config.js` (replace existing)
- `.gitignore` (replace existing)

#### Public Folder:
- `public/index.html` (replace existing)
- `public/CNAME` (create new file)

#### Source Folder:
- `src/index.js` (replace existing)
- `src/index.css` (replace existing)
- `src/App.js` (replace existing)

#### Components Folder (create new):
```bash
mkdir src/components
```
Then add these files:
- `src/components/Header.js`
- `src/components/Hero.js`
- `src/components/Services.js`
- `src/components/Projects.js`
- `src/components/Frameworks.js`
- `src/components/Awards.js`
- `src/components/Footer.js`

### Step 4: Update package.json

**IMPORTANT**: Replace `yourusername` in package.json with your actual GitHub username:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/codevault-africa"
```

### Step 5: Test Locally

```bash
npm start
```

Your app should run on `http://localhost:3000`

### Step 6: Create GitHub Repository

1. Go to GitHub and create a new repository named `codevault-africa`
2. Make it public
3. Don't initialize with README (you'll push existing code)

### Step 7: Deploy to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: CodeVault Africa website"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/codevault-africa.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

### Step 8: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Click **Save**

### Step 9: Connect Custom Domain

#### In GitHub Repository:
1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `codevaultafrica.com`
3. Check **Enforce HTTPS**

#### In GoDaddy DNS Settings:
1. Go to your GoDaddy domain management
2. Find DNS settings for `codevaultafrica.com`
3. Add these records:

**A Records (for apex domain):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 Hour

Type: A  
Name: @
Value: 185.199.109.153
TTL: 1 Hour

Type: A
Name: @
Value: 185.199.110.153
TTL: 1 Hour

Type: A
Name: @
Value: 185.199.111.153
TTL: 1 Hour
```

**CNAME Record (for www subdomain):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 1 Hour
```

### Step 10: Wait and Verify

- DNS changes can take 24-48 hours to propagate
- GitHub Pages deployment usually takes 5-10 minutes
- Check `https://YOUR_USERNAME.github.io/codevault-africa` first
- Then check `https://codevaultafrica.com`

## 🔧 Future Updates

To update your website:

```bash
# Make your changes to the code
# Commit changes
git add .
git commit -m "Update website content"
git push origin main

# Deploy updated version
npm run deploy
```

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error**: Check that gh-pages branch exists and GitHub Pages is configured correctly
2. **CSS Not Loading**: Ensure Tailwind is properly configured and built
3. **Domain Not Working**: DNS changes take time, check GoDaddy settings
4. **Build Errors**: Check console for specific error messages

### Getting Help:

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are copied correctly
3. Ensure GitHub username is updated in package.json
4. Check GitHub Pages deployment status in repository settings

## ✅ Success Checklist

- [ ] React app created and running locally
- [ ] All files copied correctly
- [ ] Tailwind CSS working
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages deployed
- [ ] Site accessible via GitHub Pages URL
- [ ] Custom domain configured in GitHub
- [ ] DNS records added in GoDaddy
- [ ] Site accessible via codevaultafrica.com

Your website should now be live at `https://codevaultafrica.com`! 🎉