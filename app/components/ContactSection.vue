<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Copy, Check, ArrowUpRight, Send, Terminal } from 'lucide-vue-next'
import type { ProfileContact } from '~/types/profile'

const props = defineProps<{
  contact: ProfileContact
}>()

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.contact.email)
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
  <section id="contact" class="py-20 md:py-28 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      
      <!-- Contact Card -->
      <div class="glass-card glow-border p-8 sm:p-12 text-center space-y-8 relative overflow-hidden">
        <!-- Ambient light in card -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="space-y-3 max-w-xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <Mail class="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interested in Collaboration?
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Feel free to reach out for backend architecture discussions, job opportunities, or system integration projects.
          </p>
        </div>

        <!-- Email Action Box -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a 
            :href="`mailto:${contact.email}`"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-dark-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
          >
            <Send class="w-4 h-4" />
            <span>Send Email</span>
          </a>

          <button 
            @click="copyEmail"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-dark-950/90 border border-slate-700/80 hover:border-cyan-500/60 text-slate-200 hover:text-cyan-300 text-sm font-medium transition-all active:scale-95 cursor-pointer"
          >
            <Check v-if="copied" class="w-4 h-4 text-emerald-400" />
            <Copy v-else class="w-4 h-4 text-slate-400" />
            <span class="font-mono">{{ copied ? 'Copied to Clipboard!' : contact.email }}</span>
          </button>
        </div>

      </div>

      <!-- Footer -->
      <footer class="mt-16 pt-8 border-t border-slate-800/80 text-center text-xs font-mono text-slate-500 space-y-2">
        <p>© {{ new Date().getFullYear() }} Siriphaporn Buanak (SB.dev). All rights reserved.</p>
        <p class="text-slate-600">Built with Nuxt.js v4 & Tailwind CSS</p>
      </footer>

    </div>
  </section>
</template>
