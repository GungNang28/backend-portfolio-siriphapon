<script setup lang="ts">
import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-vue-next'
import type { ProfileExperience } from '~/types/profile'

defineProps<{
  experience: ProfileExperience[]
}>()
</script>

<template>
  <section id="experience" class="py-16 md:py-20 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      
      <!-- Section Header -->
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/40 text-teal-400 text-xs font-mono font-medium">
          <Briefcase class="w-3.5 h-3.5" />
          <span>Work History</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional Experience
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-2xl">
          Track record of building and managing enterprise backend solutions and database operations.
        </p>
      </div>

      <!-- Experience Cards / Timeline -->
      <div class="space-y-6">
        <div 
          v-for="(item, index) in experience" 
          :key="index"
          class="glass-card p-6 sm:p-8 hover:border-slate-700 transition-all relative overflow-hidden"
        >
          <!-- Accent top line -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500"></div>

          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div class="space-y-1">
              <div class="flex items-center gap-2.5">
                <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50"></span>
                <h3 class="text-xl sm:text-2xl font-bold text-white">
                  {{ item.position }}
                </h3>
              </div>
              <div class="flex items-center gap-2 text-cyan-400 font-medium text-sm sm:text-base">
                <Building2 class="w-4 h-4" />
                <span>{{ item.company }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-dark-950/70 border border-slate-800 w-fit">
              <Calendar class="w-3.5 h-3.5 text-teal-400" />
              <span>Full-time Backend Role</span>
            </div>
          </div>

          <!-- Description & Responsibilities -->
          <div class="pt-5 space-y-4">
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              {{ item.description }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div class="flex items-center gap-2 text-xs font-mono text-slate-300 p-2.5 rounded-lg bg-dark-950/60 border border-slate-800/70">
                <CheckCircle2 class="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Backend Architecture & APIs</span>
              </div>
              <div class="flex items-center gap-2 text-xs font-mono text-slate-300 p-2.5 rounded-lg bg-dark-950/60 border border-slate-800/70">
                <CheckCircle2 class="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Database Operations</span>
              </div>
              <div class="flex items-center gap-2 text-xs font-mono text-slate-300 p-2.5 rounded-lg bg-dark-950/60 border border-slate-800/70">
                <CheckCircle2 class="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>External Service Integrations</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
