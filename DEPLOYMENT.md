# Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your project code pushed to GitHub (recommended) or ready to deploy

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import project on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**:
   In the Vercel project settings, add these environment variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your project
   - Your site will be live at `https://your-project.vercel.app`

## Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd /Users/prudhvinikku/Documents/Projects/prudhvi-portifolio/Prudhvinik1.github.io
   vercel
   ```

4. **Set Environment Variables**:
   ```bash
   vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
   vercel env add NEXT_PUBLIC_SANITY_DATASET
   ```

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Environment Variables

Make sure to set these in your Vercel project settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Your Sanity dataset (usually "production") | Yes |

## Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check that Sanity CMS data is loading
- [ ] Test admin login functionality
- [ ] Verify all links and buttons work
- [ ] Check mobile responsiveness
- [ ] Test dark/light mode toggle
- [ ] Verify analytics are working (if configured)

## Troubleshooting

### Build Errors
- Check that all environment variables are set correctly
- Ensure all dependencies are in `package.json`
- Review build logs in Vercel dashboard

### Sanity CMS Not Loading
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
- Check that your Sanity dataset is accessible
- Ensure CORS settings in Sanity allow your Vercel domain

### Admin Panel Issues
- Verify admin route protection is working
- Check that authentication cookies are set correctly
- Review middleware configuration

## Continuous Deployment

Vercel automatically deploys on every push to your main branch. To disable or configure this:
1. Go to Project Settings → Git
2. Configure deployment settings as needed

## Performance Optimization

Vercel automatically optimizes Next.js apps, but you can:
- Enable Image Optimization (already enabled)
- Configure caching headers
- Use Vercel Analytics for performance monitoring

