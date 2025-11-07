# Admin Panel Setup Guide

## 🔐 Authentication Setup

The admin panel is protected and only accessible to you. Here's how to set it up:

### 1. Set Admin Password

Create a `.env.local` file in the root directory:

```env
ADMIN_PASSWORD=your_secure_password_here
```

**Important:** 
- Use a strong password
- Never commit `.env.local` to git (it's already in `.gitignore`)
- Change the default password in production

### 2. Access the Admin Panel

1. Navigate to `/admin` in your browser
2. You'll be redirected to `/admin/login` if not authenticated
3. Enter your admin password
4. You'll be logged in for 7 days (cookie expires)

### 3. Security Features

- ✅ Password-protected access
- ✅ HTTP-only cookies (secure)
- ✅ Not linked anywhere on public site
- ✅ Middleware protection on all `/admin/*` routes
- ✅ Session expires after 7 days
- ✅ Secure in production (HTTPS only)

## 📍 Admin Panel Locations

- **Admin Dashboard:** `/admin`
- **Login Page:** `/admin/login`
- **API Endpoint:** `/api/admin/auth`

## 🚀 Next Steps: CMS Integration

Once you choose a CMS:

1. **Sanity CMS** (Recommended)
   - Best Next.js integration
   - Great free tier
   - Easy setup

2. **TinaCMS/Keystatic**
   - Git-based (content in repo)
   - No external service
   - Perfect for portfolios

3. **Payload CMS**
   - Self-hosted
   - Full control
   - TypeScript-first

See `CMS_RECOMMENDATIONS.md` for detailed comparison.

## 🔧 Customization

### Change Session Duration

Edit `app/api/admin/auth/route.ts`:

```typescript
maxAge: 60 * 60 * 24 * 7, // Change 7 to your preferred days
```

### Enhance Security (Optional)

For production, consider:
- Using bcrypt for password hashing
- Adding rate limiting
- Implementing 2FA
- Using JWT tokens instead of cookies

## 📝 Current Features

- ✅ Protected admin routes
- ✅ Login/logout functionality
- ✅ Admin dashboard UI
- ✅ CMS integration ready
- ✅ Content management cards (disabled until CMS is integrated)

## 🎯 After CMS Integration

Once CMS is integrated, you'll be able to:
- Edit About section
- Manage Experience entries
- Add/Edit Projects
- Update Education
- Manage Skills
- Edit Statistics
- Add Blog posts (optional)

---

**Remember:** The admin panel is private and not accessible to the public. Only you can access it by manually navigating to `/admin`.

