<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Terminal, Mail, Check, Copy } from 'lucide-vue-next'
import type { ProfilePersonal } from '~/types/profile'

const props = defineProps<{
  personal: ProfilePersonal
}>()

const isScrolled = ref(false)
const copied = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-dark-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/30' : 'bg-transparent py-5'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="group flex items-center gap-2.5 text-slate-100 hover:text-cyan-400 transition-colors">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
          <Terminal class="w-5 h-5 text-white" />
        </div>
        <div>
          <span class="font-mono font-bold text-sm tracking-wide text-white">SB.dev</span>
          <span class="hidden sm:inline-block ml-2 text-xs font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/50">
            Backend Dev
          </span>
        </div>
      </a>

      <!-- Nav Links -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
        <a href="#about" class="hover:text-cyan-400 transition-colors">About</a>
        <a href="#skills" class="hover:text-cyan-400 transition-colors">Skills</a>
        <a href="#experience" class="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#projects" class="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" class="hover:text-cyan-400 transition-colors">Contact</a>
      </nav>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2.5">
        <button 
          @click="copyEmail"
          class="hidden sm:flex items-center gap-1.5 text-xs font-mono px-3 py-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
          :title="'Copy: ' + personal.email"
        >
          <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-400" />
          <Copy v-else class="w-3.5 h-3.5 text-slate-400" />
          <span>{{ copied ? 'Copied!' : 'Copy Email' }}</span>
        </button>

        <a 
          href="#contact"
          class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-dark-950 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95"
        >
          <Mail class="w-4 h-4" />
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  </header>
</template>
