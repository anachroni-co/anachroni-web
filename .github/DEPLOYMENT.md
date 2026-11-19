# GitHub Pages Deployment Guide

## Automatic Deployment

This repository is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Setup Steps

1. **Enable GitHub Pages in Repository Settings:**
   - Go to: `Settings` → `Pages`
   - Under "Build and deployment":
     - Source: `GitHub Actions`
   
2. **Configure Repository Permissions:**
   - Go to: `Settings` → `Actions` → `General`
   - Under "Workflow permissions":
     - Select: `Read and write permissions`
     - Check: `Allow GitHub Actions to create and approve pull requests`
   - Click `Save`

3. **Push to Main Branch:**
   - The workflow will automatically run and deploy
   - View deployment status in the `Actions` tab

## Accessing Your Site

After deployment, your site will be available at:
- **Default URL:** `https://anachroni-co.github.io/anachroni/`

### Custom Domain (Optional)

To use a custom domain (e.g., `anachroni.co`):

1. **Update Vite Config:**
   Edit `vite.config.ts` and change the base path:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/' : './'
   ```

2. **Configure DNS:**
   Add these DNS records to your domain:
   ```
   Type  Name  Value
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   anachroni-co.github.io
   ```

3. **Add Custom Domain in GitHub:**
   - Go to: `Settings` → `Pages`
   - Under "Custom domain": Enter `anachroni.co`
   - Click `Save`
   - Wait for DNS check to complete

4. **Enable HTTPS:**
   - After DNS propagates, check: `Enforce HTTPS`

## Manual Deployment

To manually trigger a deployment:
1. Go to the `Actions` tab
2. Select "Deploy to GitHub Pages"
3. Click `Run workflow`
4. Select the branch and click `Run workflow`

## Build Locally

Test the production build locally:
```bash
npm run build
npm run preview
```

## Troubleshooting

### Deployment Fails
- Check the Actions tab for error logs
- Ensure Node.js version matches (18.x)
- Verify all dependencies install correctly

### 404 Errors
- Ensure the base path in `vite.config.ts` matches your deployment
- For GitHub Pages: `/anachroni/`
- For custom domain: `/`

### Assets Not Loading
- Check browser console for CORS errors
- Verify the base path configuration
- Clear browser cache

## Environment Variables

The build process automatically sets:
- `NODE_ENV=production` for production builds
- Base path is set in `vite.config.ts`

For custom environment variables, add them to:
- GitHub: `Settings` → `Secrets and variables` → `Actions`
- Then reference in the workflow file
