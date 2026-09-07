<script setup lang="ts">
import { 
  Server, 
  Database, 
  Cpu, 
  Layers, 
  Code2, 
  GitBranch, 
  Network,
  Boxes
} from 'lucide-vue-next'
import type { ProfileSkills } from '~/types/profile'

defineProps<{
  skills: ProfileSkills
}>()
</script>

<template>
  <section id="skills" class="py-16 md:py-20 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      
      <!-- Section Header -->
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
          <Code2 class="w-3.5 h-3.5" />
          <span>Technical Expertise</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills & Tech Stack
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-2xl">
          Core backend technologies, frameworks, databases, and architectural concepts used to build robust business systems.
        </p>
      </div>

      <!-- Skills Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Backend Frameworks & Languages Card -->
        <div 
          v-if="skills.backend && skills.backend.length" 
          class="glass-card p-6 sm:p-7 space-y-5 hover:border-cyan-500/40 transition-all group"
        >
          <div class="flex items-center justify-between">
            <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
              <Server class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-slate-500">01 / Backend</span>
          </div>

          <div class="space-y-1">
            <h3 class="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
              Backend & Frameworks
            </h3>
            <p class="text-xs text-slate-400">
              Application runtimes, microservices, and server-side frameworks
            </p>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            <span 
              v-for="item in skills.backend" 
              :key="item"
              class="px-3 py-1.5 rounded-lg bg-dark-950/80 border border-slate-700/60 text-slate-200 text-xs font-mono font-medium hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <!-- Database & Storage Card -->
        <div 
          v-if="skills.database && skills.database.length" 
          class="glass-card p-6 sm:p-7 space-y-5 hover:border-teal-500/40 transition-all group"
        >
          <div class="flex items-center justify-between">
            <div class="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
              <Database class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-slate-500">02 / Storage</span>
          </div>

          <div class="space-y-1">
            <h3 class="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
              Databases & Storage
            </h3>
            <p class="text-xs text-slate-400">
              Relational schema design, query optimization, and data consistency
            </p>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            <span 
              v-for="item in skills.database" 
              :key="item"
              class="px-3 py-1.5 rounded-lg bg-dark-950/80 border border-slate-700/60 text-slate-200 text-xs font-mono font-medium hover:border-teal-500/50 hover:text-teal-300 hover:bg-teal-950/30 transition-all"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <!-- Architectural Concepts Card -->
        <div 
          v-if="skills.concepts && skills.concepts.length" 
          class="glass-card p-6 sm:p-7 space-y-5 hover:border-indigo-500/40 transition-all group"
        >
          <div class="flex items-center justify-between">
            <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
              <Boxes class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-slate-500">03 / Concepts</span>
          </div>

          <div class="space-y-1">
            <h3 class="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
              Architecture & Concepts
            </h3>
            <p class="text-xs text-slate-400">
              API design, business logic implementation, and system integration
            </p>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            <span 
              v-for="item in skills.concepts" 
              :key="item"
              class="px-3 py-1.5 rounded-lg bg-dark-950/80 border border-slate-700/60 text-slate-200 text-xs font-mono font-medium hover:border-indigo-500/50 hover:text-indigo-300 hover:bg-indigo-950/30 transition-all"
            >
              {{ item }}
            </span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
