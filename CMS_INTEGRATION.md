# How CMS Content Reflects on Your Portfolio UI

## Overview

Your portfolio is now fully integrated with Sanity CMS! Any content you add or update in Sanity Studio will automatically appear on your portfolio website.

## Data Flow

```
Sanity CMS → Next.js Server Component → Portfolio UI
```

### How It Works

1. **Content Creation**: You add/edit content in Sanity Studio at `/admin/studio`
2. **Data Storage**: Content is stored in Sanity's cloud database
3. **Data Fetching**: Your portfolio page fetches data from Sanity on each page load
4. **Display**: Content is rendered on your portfolio website

## Content Types & Where They Appear

### 1. Personal Information (`personalInfo`)
**Where to edit**: Sanity Studio → Personal Info  
**Where it appears**:
- Hero section (name, title, subtitle)
- Contact buttons (GitHub, LinkedIn, Email)
- Location and status badge

### 2. About Section (`about`)
**Where to edit**: Sanity Studio → About  
**Where it appears**:
- About section with description
- "What Drives Me" section
- "Looking For" section

### 3. Experience (`experience`)
**Where to edit**: Sanity Studio → Experience  
**Where it appears**:
- Experience section with cards
- Company name, role, period
- Description bullets
- Ordered by `order` field (lower numbers first)

### 4. Education (`education`)
**Where to edit**: Sanity Studio → Education  
**Where it appears**:
- Education section
- Institution, degree, period
- Coursework and highlights
- Ordered by `order` field

### 5. Projects (`project`)
**Where to edit**: Sanity Studio → Project  
**Where it appears**:
- Projects section with cards
- Project title, description, tech stack
- Links (GitHub, Live Demo)
- Images (if uploaded)
- Ordered by `order` field

### 6. Skills (`skill`)
**Where to edit**: Sanity Studio → Skill  
**Where it appears**:
- Skills section organized by category:
  - Languages
  - Frontend
  - Backend
  - ML/AI
  - Infrastructure
  - Databases
- Create one document per category

### 7. Statistics (`stat`)
**Where to edit**: Sanity Studio → Stat  
**Where it appears**:
- Achievements section
- Value, label, description
- Ordered by `order` field

## Real-Time Updates

### Development Mode
- Changes in Sanity Studio are **not immediately visible** on the website
- You need to **refresh the page** to see updates
- Next.js fetches fresh data on each page load

### Production Mode
- Content updates are visible after the page refreshes
- For instant updates, you can enable Sanity's real-time preview (optional)

## Fallback Behavior

If Sanity CMS is not configured or has no content:
- The portfolio uses **static fallback data** from `lib/data.ts`
- Your website will still work perfectly
- Once you add content to Sanity, it will automatically take precedence

## Testing Your Integration

1. **Add content in Sanity Studio**:
   - Go to `/admin/studio`
   - Create a new document (e.g., Personal Info)
   - Fill in the fields and publish

2. **Check the portfolio**:
   - Go to your homepage (`/`)
   - Refresh the page
   - Your new content should appear!

3. **Verify the data**:
   - Check the browser console for any errors
   - Verify that the correct content is displayed
   - Test different sections

## Common Issues

### Content Not Appearing?
- ✅ Make sure you **published** the document in Sanity (not just saved as draft)
- ✅ **Refresh the page** after publishing
- ✅ Check that the document type matches the schema
- ✅ Verify your `.env.local` has the correct Project ID

### Wrong Data Format?
- ✅ Check the schema in `sanity/schemas/` to see expected format
- ✅ Ensure field names match exactly
- ✅ Arrays should be arrays, strings should be strings

### Still See Old/Static Data?
- ✅ Clear your browser cache
- ✅ Restart your dev server
- ✅ Check that Sanity has published content (not drafts)

## Next Steps

1. **Add your content**: Start by creating a Personal Info document
2. **Fill in all sections**: Add experience, education, projects, etc.
3. **Upload images**: Add project images and profile pictures
4. **Publish everything**: Make sure all documents are published
5. **Test thoroughly**: Check all sections on your portfolio

## Need Help?

- Check Sanity documentation: https://www.sanity.io/docs
- Review your schemas in `sanity/schemas/`
- Check the data fetching functions in `lib/sanity/data.ts`

---

**Remember**: Always publish your documents in Sanity Studio, and refresh your portfolio page to see the changes!

