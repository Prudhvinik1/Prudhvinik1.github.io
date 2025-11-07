# Sanity CMS Setup Guide

## 🚀 Quick Setup

### 1. Create Sanity Account

1. Go to [sanity.io](https://www.sanity.io)
2. Sign up for a free account
3. Create a new project
4. Choose a project name (e.g., "Portfolio")
5. Choose a dataset name (default: "production")

### 2. Get Your Project ID

1. After creating the project, go to the Sanity Management Console
2. Navigate to your project settings
3. Copy your **Project ID** (looks like: `abc123xyz`)

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Admin Authentication
ADMIN_PASSWORD=your_secure_password_here

# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

**Important:** 
- Replace `your_project_id_here` with your actual Sanity Project ID
- The dataset is usually "production" (default)
- Never commit `.env.local` to git

### 4. Access Sanity Studio

1. Make sure you're logged into the admin panel (`/admin`)
2. Click "Open Sanity Studio" button
3. You'll be redirected to `/admin/studio`
4. Sanity Studio will load (first time may take a moment)

### 5. Add Your Content

Once in Sanity Studio, you can add:

- **Personal Information** - Your name, title, contact info
- **About** - About section content
- **Experience** - Work experience entries
- **Education** - Education entries
- **Projects** - Project showcase
- **Skills** - Your skills organized by category
- **Statistics** - Achievement statistics

## 📋 Content Structure

### Personal Information
- Single document
- Contains: name, title, subtitle, email, location, social links

### About
- Single document
- Contains: description, whatDrivesMe, lookingFor

### Experience
- Multiple documents (one per job)
- Fields: company, role, period, description (array of bullet points), order

### Education
- Multiple documents (one per degree)
- Fields: institution, degree, period, coursework, highlights, order

### Projects
- Multiple documents (one per project)
- Fields: name, description, link, technologies, image, order

### Skills
- Multiple documents (one per category)
- Categories: languages, frontend, backend, mlAi, infrastructure, databases
- Each document contains an array of skills

### Statistics
- Multiple documents (one per stat)
- Fields: value, label, description, icon, order

## 🔐 Security

- Admin panel is protected at `/admin`
- Sanity Studio is protected at `/admin/studio`
- Both require authentication via admin password
- Not accessible to public users

## 🎯 Usage Tips

1. **Order Fields**: Use the "order" field to control display order (lower numbers appear first)

2. **Skills Organization**: Create one skill document per category (languages, frontend, etc.)

3. **Rich Text**: About section supports rich text formatting

4. **Images**: Projects can include images (uploaded to Sanity CDN)

5. **Real-time**: Changes in Sanity Studio appear immediately (after publishing)

## 🔄 Updating Content

1. Go to `/admin` and login
2. Click "Open Sanity Studio"
3. Select the content type you want to edit
4. Make your changes
5. Click "Publish" to make changes live

## 📊 API Endpoints

The following API routes are available:

- `/api/sanity/personalInfo` - Get personal information
- `/api/sanity/about` - Get about content
- `/api/sanity/experience` - Get all experience entries
- `/api/sanity/education` - Get all education entries
- `/api/sanity/projects` - Get all projects
- `/api/sanity/skills` - Get all skills (grouped by category)
- `/api/sanity/stats` - Get all statistics

## 🐛 Troubleshooting

### Studio Not Loading
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
- Verify you're logged into the admin panel
- Check browser console for errors

### Content Not Appearing
- Make sure content is published in Sanity (draft content won't show)
- Check that API routes are working
- Verify environment variables are set

### Authentication Issues
- Clear cookies and try logging in again
- Check that `ADMIN_PASSWORD` is set correctly

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Management Console](https://www.sanity.io/manage)
- [Next.js + Sanity Guide](https://www.sanity.io/docs/js-client)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## 🎉 Next Steps

After setting up Sanity:

1. Add your personal information
2. Fill in the about section
3. Add your work experience
4. Add your education
5. Showcase your projects
6. List your skills
7. Add achievement statistics

Your portfolio will automatically use content from Sanity once it's added!

