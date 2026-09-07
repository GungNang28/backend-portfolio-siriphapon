<script setup lang="ts">
import { ref } from 'vue'
import { 
  Server, 
  Terminal, 
  Database, 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-vue-next'
import type { ProfilePersonal, ProfileAbout } from '~/types/profile'

const props = defineProps<{
  personal: ProfilePersonal
  about: ProfileAbout
}>()

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.personal.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}
</script>

<template>
  <section id="about" class="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
    <!-- Ambient glowing backgrounds -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Left Column: Bio & Introduction -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Status Pill -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-xs font-mono text-slate-300">
              {{ about.experience_years }}+ Years Experienced Backend Engineer
            </span>
          </div>

          <!-- Main Heading -->
          <div class="space-y-2">
            <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {{ personal.name }}
            </h1>
            <div class="flex flex-wrap items-center gap-2 text-slate-400 text-sm sm:text-base font-medium">
              <span class="text-slate-300" v-if="personal.name_th">{{ personal.name_th }}</span>
              <span v-if="personal.nickname" class="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 text-xs font-mono border border-slate-700/50">
                ชื่อเล่น: {{ personal.nickname }}
              </span>
            </div>
            <p class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent pt-1">
              {{ personal.title }}
            </p>
          </div>

          <!-- Bio Paragraphs -->
          <div class="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            <p class="font-medium text-slate-200">
              {{ about.short }}
            </p>
            <p class="text-slate-400">
              {{ about.description }}
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-wrap items-center gap-3.5">
            <a 
              href="#projects"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-dark-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowUpRight class="w-4 h-4" />
            </a>

            <button 
              @click="copyEmail"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-900/90 border border-slate-700/70 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 text-sm font-medium transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              <Check v-if="copied" class="w-4 h-4 text-emerald-400" />
              <Copy v-else class="w-4 h-4 text-slate-400" />
              <span>{{ copied ? 'Email Copied!' : personal.email }}</span>
            </button>
          </div>

          <!-- Quick Stats Grid -->
          <div class="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-800/80">
            <div class="p-3 sm:p-4 rounded-xl bg-dark-900/40 border border-slate-800/60">
              <div class="text-xl sm:text-2xl font-bold font-mono text-cyan-400">5+</div>
              <div class="text-xs text-slate-400 mt-0.5">Years Exp.</div>
            </div>
            <div class="p-3 sm:p-4 rounded-xl bg-dark-900/40 border border-slate-800/60">
              <div class="text-xl sm:text-2xl font-bold font-mono text-teal-400">REST & DB</div>
              <div class="text-xs text-slate-400 mt-0.5">Core Focus</div>
            </div>
            <div class="p-3 sm:p-4 rounded-xl bg-dark-900/40 border border-slate-800/60">
              <div class="text-xl sm:text-2xl font-bold font-mono text-indigo-400">Production</div>
              <div class="text-xs text-slate-400 mt-0.5">Proven Systems</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Backend Terminal / Architecture Mockup -->
        <div class="lg:col-span-5">
          <div class="glass-card glow-border p-5 sm:p-6 space-y-4">
            
            <!-- Terminal Header -->
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div class="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <Terminal class="w-3.5 h-3.5 text-cyan-400" />
                <span>backend-system.sh</span>
              </div>
            </div>

            <!-- Terminal Content / Server Health -->
            <div class="space-y-3 font-mono text-xs sm:text-xs">
              
              <!-- System Status -->
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-dark-950/80 border border-slate-800/70">
                <div class="flex items-center gap-2 text-slate-300">
                  <Server class="w-4 h-4 text-cyan-400" />
                  <span>API Gateway / Server</span>
                </div>
                <span class="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-[11px] font-semibold">
                  200 OK
                </span>
              </div>

              <!-- Database Connection -->
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-dark-950/80 border border-slate-800/70">
                <div class="flex items-center gap-2 text-slate-300">
                  <Database class="w-4 h-4 text-teal-400" />
                  <span>MySQL Database</span>
                </div>
                <span class="text-slate-400 text-[11px]">Pool: Connected</span>
              </div>

              <!-- Integrations -->
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-dark-950/80 border border-slate-800/70">
                <div class="flex items-center gap-2 text-slate-300">
                  <Layers class="w-4 h-4 text-indigo-400" />
                  <span>System Integrations</span>
                </div>
                <span class="text-indigo-300 text-[11px]">SAP ERP, LINE OA, S3</span>
              </div>

              <!-- Code Execution Preview -->
              <div class="p-3 rounded-lg bg-dark-950/90 border border-slate-800/90 text-slate-300 space-y-1 text-[11px] leading-5">
                <div class="text-slate-500">// Core Stack Runtime</div>
                <div><span class="text-cyan-400">const</span> <span class="text-teal-300">runtime</span> = [<span class="text-amber-300">'Laravel'</span>, <span class="text-amber-300">'NestJS'</span>, <span class="text-amber-300">'Node.js'</span>, <span class="text-amber-300">'PHP'</span>];</div>
                <div><span class="text-cyan-400">const</span> <span class="text-teal-300">status</span> = <span class="text-emerald-400">'Active & Scalable'</span>;</div>
                <div class="text-emerald-400 flex items-center gap-1 mt-1">
                  <span>✓</span> <span>Systems ready for production workload</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
