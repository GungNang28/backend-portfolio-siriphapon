<script setup lang="ts">
import profileData from '~/data/profile.json'
import type { ProfileData } from '~/types/profile'

const profile = profileData as ProfileData

useHead({
  title: `${profile.personal.name} | ${profile.personal.title}`,
  meta: [
    {
      name: 'description',
      content: profile.about.short
    },
    {
      name: 'theme-color',
      content: '#060911'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-dark-950 text-slate-200 relative selection:bg-cyan-500/30 selection:text-cyan-200">
    <!-- Navbar -->
    <Navbar :personal="profile.personal" />

    <!-- Main Content -->
    <main class="relative z-10">
      <ProfileHeader :personal="profile.personal" :about="profile.about" />
      <SkillSection :skills="profile.skills" />
      <ExperienceSection :experience="profile.experience" />
      <ProjectSection :projects="profile.projects" />
      <ContactSection :contact="profile.contact" />
    </main>
  </div>
</template>
