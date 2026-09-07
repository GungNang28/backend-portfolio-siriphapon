<script setup lang="ts">
import { 
  FolderGit2, 
  Layers, 
  Cpu, 
  Database, 
  Link2, 
  Sparkles, 
  CheckCircle,
  Network
} from 'lucide-vue-next'
import type { ProfileProject } from '~/types/profile'

defineProps<{
  projects: ProfileProject[]
}>()
</script>

<template>
  <section id="projects" class="py-16 md:py-20 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      
      <!-- Section Header -->
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 text-xs font-mono font-medium">
          <FolderGit2 class="w-3.5 h-3.5" />
          <span>Featured Work</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured Backend Projects
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-2xl">
          Mission-critical backend architectures, business workflows, and enterprise API integrations.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="glass-card p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-cyan-950/20 transition-all group relative overflow-hidden"
        >
          <!-- Background Glow Effect on Hover -->
          <div class="absolute -right-20 -bottom-20 w-56 h-56 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all pointer-events-none"></div>

          <div class="space-y-4">
            <!-- Project Header -->
            <div class="flex items-start justify-between gap-3">
              <div class="space-y-1">
                <span class="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  {{ project.type }}
                </span>
                <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {{ project.name }}
                </h3>
              </div>
              <span class="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
                {{ project.role }}
              </span>
            </div>

            <!-- Project Description -->
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <!-- Tech Stack & Integrations -->
          <div class="space-y-4 pt-4 border-t border-slate-800/70">
            
            <!-- Technologies -->
            <div v-if="project.technologies && project.technologies.length" class="space-y-1.5">
              <div class="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Cpu class="w-3.5 h-3.5 text-cyan-400" />
                <span>Technologies</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-2.5 py-1 rounded-md bg-dark-950/90 border border-slate-700/70 text-cyan-300 text-xs font-mono font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Integrations (e.g. SAP ERP, LINE OA, AWS S3) -->
            <div v-if="project.integrations && project.integrations.length" class="space-y-1.5">
              <div class="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Network class="w-3.5 h-3.5 text-teal-400" />
                <span>Integrations</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="integration in project.integrations" 
                  :key="integration"
                  class="px-2.5 py-1 rounded-md bg-teal-950/50 border border-teal-800/60 text-teal-300 text-xs font-mono font-medium"
                >
                  {{ integration }}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>
