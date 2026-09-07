# Backend Developer Portfolio - Siriphaporn Buanak

Personal portfolio website for **Siriphaporn Buanak** (Backend Developer) built with **Nuxt.js v4** and **Tailwind CSS v3**.

## 🛠️ Tech Stack

- **Framework**: [Nuxt.js v4](https://nuxt.com/) (Vue 3, TypeScript)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with `@nuxtjs/tailwindcss`
- **Icons**: [Lucide Vue Next](https://lucide.dev/)
- **Data Source**: `app/data/profile.json` (Single Source of Truth)

## 📁 Project Structure

```text
├── app/
│   ├── assets/css/main.css      # Tailwind & Glassmorphism styles
│   ├── components/              # Modular UI components
│   │   ├── Navbar.vue
│   │   ├── ProfileHeader.vue
│   │   ├── SkillSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── ProjectSection.vue
│   │   └── ContactSection.vue
│   ├── data/
│   │   └── profile.json         # Portfolio data source
│   ├── pages/
│   │   └── index.vue            # Main landing page
│   ├── types/
│   │   └── profile.ts           # TypeScript interfaces
│   └── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

## 🚀 Setup & Development

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build
```
