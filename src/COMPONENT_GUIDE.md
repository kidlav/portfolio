# Portfolio Component Guide

This guide provides an overview of all portfolio components, their locations, purposes, and how to customize them.

---

## 📁 Main Application File

### **App.tsx**
**Location:** `/App.tsx`

**Purpose:**
- Main application entry point that handles routing and navigation
- Manages page state (home, privacy, terms)
- Includes the navigation bar with logo and menu
- Controls scroll behavior and mobile menu

**What You Can Customize:**
- Logo text (currently "VK.")
- Navigation links in `navLinks` array
- Navigation bar styling and behavior
- Add/remove pages from routing logic

**Key Sections:**
```typescript
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
```

---

## 🎨 Portfolio Components

### 1. **Hero.tsx**
**Location:** `/components/Hero.tsx`

**Purpose:**
- Landing section with animated background
- Features your name, title, and call-to-action buttons
- Includes parallax mouse-tracking effects
- Floating particles and animated grid background

**What You Can Customize:**
- Your name: Change "Vladislav Kovalenko"
- Title badge: "UI/UX & MOTION DESIGNER"
- Subtitle description text
- Button text and links ("View Projects", "Get In Touch")
- Animation speeds and particle effects
- Background colors and gradient effects

**Key Elements:**
- Animated orbs with parallax motion
- Gradient text effects on your name
- Two CTA buttons with hover effects
- Floating decorative elements

---

### 2. **About.tsx**
**Location:** `/components/About.tsx`

**Purpose:**
- About section with profile image and bio
- Highlights your location and expertise
- Shows key design specialties with icons
- "Available for projects" status indicator

**What You Can Customize:**
- Profile photo (update Unsplash URL or replace with your image)
- Bio text and paragraphs
- Location ("Canada")
- Highlight items (Interactive Design, Visual Identity, etc.)
- Project mentions (Raisovka Aqua, Team Not Found)
- Section title and badge text

**Key Elements:**
- Profile image with glowing borders
- Four highlight cards with icons
- Decorative geometric shapes
- Parallax scroll effects

---

### 3. **ProjectsGallery.tsx**
**Location:** `/components/ProjectsGallery.tsx`

**Purpose:**
- Displays portfolio projects in asymmetric grid
- 3D hover tilt effects on project cards
- Shows project title, category, and image
- Glow effects on hover with accent colors

**What You Can Customize:**
- Projects array: Add/remove/edit projects
- Project images (replace Unsplash URLs)
- Project titles and categories
- Grid layout sizes (large, medium, small)
- Hover effects and animations
- Button text and links

**Projects Structure:**
```typescript
{
  title: 'Project Name',
  category: 'Category',
  image: 'image-url',
  accent: '#00FFF7', // Glow color
  size: 'large', // large, medium, or small
}
```

**Grid Sizes:**
- `large`: Takes 2 columns × 2 rows
- `medium`: Takes 1 column × 2 rows
- `small`: Takes 1 column × 1 row

---

### 4. **Skills.tsx**
**Location:** `/components/Skills.tsx`

**Purpose:**
- Displays your main tools and technologies
- Six primary skills in a grid with icons
- Additional skills listed below
- Animated decorative elements

**What You Can Customize:**
- Main skills array (6 items with icons)
- Skill names and colors
- Additional tools list at the bottom
- Icons from lucide-react library
- Grid layout and hover effects

**Skills Structure:**
```typescript
{
  name: 'Figma',
  icon: Figma, // Lucide icon component
  color: '#00FFF7' // Accent color
}
```

**Additional Tools:**
Currently includes: Illustrator, Premiere Pro, Blender, Cinema 4D, Webflow, Framer

---

### 5. **Footer.tsx**
**Location:** `/components/Footer.tsx`

**Purpose:**
- Contact section with CTA
- Email, location, and social links
- Links to Privacy and Terms pages
- Copyright information

**What You Can Customize:**
- Email address (vladislav.kovalenko@email.com)
- Location text
- Social media links (LinkedIn, Dribbble, GitHub)
- Footer copy text
- CTA message ("Let's build something extraordinary")
- Copyright year and name

**Social Links Structure:**
```typescript
{
  icon: Linkedin,
  href: '#', // Add your actual link
  label: 'LinkedIn',
  color: '#00FFF7'
}
```

---

### 6. **Privacy.tsx**
**Location:** `/components/Privacy.tsx`

**Purpose:**
- Privacy policy page
- Explains data collection and protection
- Legal information about user rights
- Professional layout with sections

**What You Can Customize:**
- Contact email for privacy inquiries
- Policy content in `sections` array
- Last updated date
- Company/personal name references
- Additional legal sections

**Sections Include:**
- Information Collection
- Data Protection
- Information Usage
- Your Rights
- Contact Information

---

### 7. **Terms.tsx**
**Location:** `/components/Terms.tsx`

**Purpose:**
- Terms of service page
- Usage license and intellectual property info
- Limitations and disclaimers
- Governing law information

**What You Can Customize:**
- Your name/business name
- Contact email
- Last updated date
- Terms content in `sections` array
- Jurisdiction (currently Canada)
- Additional legal clauses

**Sections Include:**
- Acceptance of Terms
- Use License
- Intellectual Property
- Disclaimer
- Contact & Inquiries

---

## 🎨 Styling & Globals

### **globals.css**
**Location:** `/styles/globals.css`

**Purpose:**
- Global CSS variables and themes
- Smooth scroll behavior
- Custom scrollbar styling
- Typography defaults

**What You Can Customize:**
- Color variables (currently dark theme)
- Scrollbar gradient colors
- Selection highlight color
- Font sizes and weights
- Border radius values

**Key Colors:**
```css
/* Neon Turquoise */
#00FFF7

/* Violet Purple */
#8B00FF

/* Dark Background */
#0a0a0a
```

---

## 🖼️ Images & Assets

### **ImageWithFallback.tsx**
**Location:** `/components/figma/ImageWithFallback.tsx`

**Purpose:**
- Protected component for handling images
- Provides fallback for broken images
- Used throughout the portfolio

**Note:** This is a system component - do not modify

---

## 🔧 Quick Customization Checklist

### Personal Information
- [ ] Update name in Hero.tsx
- [ ] Update title/role in Hero.tsx
- [ ] Update bio text in About.tsx
- [ ] Update location in About.tsx and Footer.tsx
- [ ] Update email address in Footer.tsx and legal pages
- [ ] Update social media links in Footer.tsx

### Content
- [ ] Add your profile photo in About.tsx
- [ ] Add your projects in ProjectsGallery.tsx
- [ ] Update skills list in Skills.tsx
- [ ] Update highlight specialties in About.tsx
- [ ] Review and update Privacy.tsx content
- [ ] Review and update Terms.tsx content

### Styling
- [ ] Adjust color scheme if needed (search for #00FFF7 and #8B00FF)
- [ ] Modify animation speeds to your preference
- [ ] Adjust spacing and layouts
- [ ] Customize hover effects

### Links & Navigation
- [ ] Update CTA button links in Hero.tsx
- [ ] Add real project links in ProjectsGallery.tsx
- [ ] Add real social media URLs in Footer.tsx
- [ ] Test all navigation between sections

---

## 🎯 Common Modifications

### Change Accent Colors
Search and replace these hex values throughout the project:
- `#00FFF7` - Neon turquoise/cyan
- `#8B00FF` - Violet purple

### Update Project Card
In `ProjectsGallery.tsx`, find the `projects` array and modify:
```typescript
{
  title: 'Your Project Name',
  category: 'Project Type',
  image: 'your-image-url',
  accent: '#00FFF7',
  size: 'large',
}
```

### Add New Navigation Link
In `App.tsx`, add to `navLinks` array:
```typescript
{ name: 'Blog', href: '#blog' }
```

### Change Hero Buttons
In `Hero.tsx`, find the button section and modify:
```typescript
<a href="#your-link" className="...">
  Your Button Text
</a>
```

---

## 📚 Additional Resources

### Icons
All icons come from **lucide-react**. Browse available icons:
https://lucide.dev/icons/

Usage:
```typescript
import { IconName } from 'lucide-react';
<IconName className="w-5 h-5" />
```

### Images
Current images are from Unsplash. Replace with your own:
- Use ImageWithFallback component for new images
- Maintain aspect ratios for best results
- Optimize images for web (recommended < 500KB)

### Animations
Powered by **Motion (formerly Framer Motion)**:
- Adjust `duration` values to speed up/slow down
- Modify `delay` for staggered effects
- Change `transition` types (spring, tween, ease)

---

## ⚠️ Important Notes

1. **Protected Files:** Don't modify `/components/figma/ImageWithFallback.tsx`
2. **UI Components:** The `/components/ui/` folder contains pre-built components - modify with caution
3. **Hash Routing:** Pages use # for navigation (e.g., #privacy, #terms)
4. **Responsive Design:** All components are mobile-responsive by default
5. **Smooth Scroll:** Enabled in globals.css for section navigation

---

## 🆘 Need Help?

If you want to:
- Add a new section → Create a new component in `/components/`
- Change colors globally → Update hex values in all component files
- Modify animations → Look for `motion.div` components and adjust props
- Add more pages → Update routing logic in `App.tsx`

---

**Last Updated:** November 13, 2025
