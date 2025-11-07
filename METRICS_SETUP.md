# Metrics & Analytics Setup Guide

This portfolio includes several metrics and analytics features to track your website's performance and engagement.

## Features Included

### 1. **Analytics Tracking**
- **Google Analytics**: Full-featured web analytics
- **Plausible Analytics**: Privacy-friendly alternative (GDPR compliant, no cookies)

### 2. **GitHub Stats**
- Real-time GitHub repository statistics
- Total stars, forks, and public repositories
- Automatically fetched from GitHub API

### 3. **Visitor Metrics**
- Local storage-based visitor tracking
- Total views and unique visitors
- Growth percentage
- Last visit timestamp

### 4. **Performance Metrics**
- Page load time
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Color-coded performance indicators

## Setup Instructions

### Google Analytics

1. Create a Google Analytics account at [analytics.google.com](https://analytics.google.com/)
2. Set up a new property for your website
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
5. Restart your development server

### Plausible Analytics (Alternative)

1. Sign up at [plausible.io](https://plausible.io/)
2. Add your domain
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```
4. Restart your development server

### GitHub Stats

The GitHub stats component automatically fetches data from your GitHub profile. No setup required, but make sure:
- Your GitHub username is correct in `components/github-stats.tsx` (currently: `Prudhvinik1`)
- Your repositories are public

**Note**: For GitHub contribution data, you would need:
- A GitHub Personal Access Token
- Or use a service like [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

### Visitor Metrics

Visitor metrics work out of the box using localStorage. No configuration needed!

The metrics track:
- Total page views
- Unique visitors (using sessionStorage)
- Growth percentage (placeholder, can be enhanced with historical data)
- Last visit timestamp

### Performance Metrics

Performance metrics are automatically measured using the Web Performance API. No setup required!

## Customization

### Update GitHub Username

Edit `components/github-stats.tsx`:
```typescript
const username = "YourGitHubUsername";
```

### Enhance Visitor Metrics

To track historical data and calculate real growth:
1. Implement a backend API to store metrics
2. Use a database (Firebase, Supabase, etc.)
3. Replace localStorage with API calls

### Add More Metrics

You can add additional metrics by:
1. Creating new metric components in `components/`
2. Adding them to the metrics section in `app/page.tsx`
3. Integrating with APIs (LeetCode, Medium, etc.)

## Example Integrations

### LeetCode Stats
```typescript
// Fetch LeetCode stats from API
const leetcodeStats = await fetch('https://leetcode-stats-api.herokuapp.com/YourUsername');
```

### Medium Stats
```typescript
// Use Medium RSS feed or API
const mediumStats = await fetch('https://medium.com/feed/@yourusername');
```

### Blog Post Views
```typescript
// Track blog post views from your CMS
// Integrate with your headless CMS API
```

## Privacy Considerations

- **Visitor Metrics**: Uses localStorage only, no external tracking
- **GitHub Stats**: Public API, no personal data
- **Performance Metrics**: Client-side only, no data sent externally
- **Google Analytics**: Tracks user behavior (configure privacy settings)
- **Plausible**: Privacy-friendly, GDPR compliant, no cookies

## Environment Variables

Create a `.env.local` file (not committed to git):

```env
# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Plausible Analytics (Optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

## Troubleshooting

### Metrics Not Showing
- Check browser console for errors
- Ensure environment variables are set correctly
- Verify GitHub username is correct
- Check network requests in DevTools

### GitHub API Rate Limits
- GitHub API allows 60 requests/hour for unauthenticated requests
- Consider caching responses or using a GitHub token for higher limits

### Performance Metrics Showing 0
- Wait for page to fully load
- Check browser compatibility (modern browsers only)
- Ensure JavaScript is enabled

## Future Enhancements

Potential additions:
- [ ] Real-time visitor counter
- [ ] Heatmap tracking
- [ ] Conversion tracking
- [ ] A/B testing integration
- [ ] Social media engagement metrics
- [ ] Blog post analytics
- [ ] Download tracking for resume
- [ ] Click tracking on external links

