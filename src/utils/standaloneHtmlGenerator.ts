import { PROFILE, SOCIAL_LINKS, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData.ts';

export function generateStandaloneHtml(customLinkedinUrl?: string): string {
  const linkedin = customLinkedinUrl || SOCIAL_LINKS.linkedin;
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rithwik | Aspiring AI Engineer & B.Tech CSE Student</title>
  <meta name="description" content="Portfolio of Rithwik, a motivated 1st-year B.Tech CSE student passionate about Generative AI, machine learning foundations, and modern software engineering.">

  <!-- Google Fonts: Inter and Poppins -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              dark: '#0f172a',
              card: '#1e293b',
              cyan: '#06b6d4',
              violet: '#8b5cf6'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Poppins', 'sans-serif']
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #0f172a;
      color: #f8fafc;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Poppins', sans-serif;
    }
    .neon-glow-cyan {
      box-shadow: 0 0 25px -5px rgba(6, 182, 212, 0.25);
    }
    .neon-glow-violet {
      box-shadow: 0 0 25px -5px rgba(139, 92, 246, 0.25);
    }
  </style>
</head>
<body class="bg-[#0f172a] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">

  <!-- ========================================== -->
  <!-- 1. HEADER / NAVIGATION                     -->
  <!-- ========================================== -->
  <header id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
      <!-- Logo / Name -->
      <a href="#hero" class="flex items-center gap-3 group focus:outline-none">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
          R
        </div>
        <div class="flex flex-col">
          <span class="font-semibold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
            Rithwik
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          </span>
          <span class="text-xs text-slate-400 font-medium">Aspiring AI Engineer</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        <a href="#about" class="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors">About</a>
        <a href="#skills" class="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors">Skills</a>
        <a href="#projects" class="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors">Projects</a>
        <a href="#contact" class="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors">Contact</a>
      </nav>

      <!-- Desktop CTA Buttons -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Developer Profile Links: Update here if needed -->
        <a href="https://github.com/rithu07082008-collab" target="_blank" rel="noopener noreferrer" class="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors" title="GitHub">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="#contact" class="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 shadow-md shadow-cyan-500/20 transition-all">
          Get in Touch
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobile-toggle" class="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div id="mobile-menu" class="hidden md:hidden bg-[#0f172a] border-b border-slate-800 px-4 py-4 space-y-3">
      <a href="#about" class="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg">About</a>
      <a href="#skills" class="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg">Skills</a>
      <a href="#projects" class="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg">Projects</a>
      <a href="#contact" class="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg">Contact</a>
      <a href="#contact" class="block text-center py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium text-sm">Get in Touch</a>
    </div>
  </header>

  <!-- ========================================== -->
  <!-- 2. HERO SECTION                            -->
  <!-- ========================================== -->
  <section id="hero" class="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
    <!-- Ambient subtle background glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Hero Copy -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span class="font-medium text-slate-200">1st Year B.Tech CSE</span>
            <span class="text-slate-500">|</span>
            <span class="text-cyan-400 font-medium">Aspiring AI Engineer</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Building the Future with <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400">Artificial Intelligence</span> & Software
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Hi, I'm <span class="text-white font-semibold">Rithwik</span> &mdash; a motivated 1st-year Computer Science & Engineering student passionate about Generative AI, prompt architecture, and software engineering. Driven by curiosity to transform ideas into functional systems.
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a href="#projects" class="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm sm:text-base transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2">
              <span>Explore Projects</span>
              <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>

            <!-- Developer LinkedIn Link: Replace URL if needed -->
            <a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <!-- Micro Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div>
              <span class="text-xs text-slate-400 font-medium uppercase">Current Education</span>
              <p class="text-sm font-semibold text-slate-200 mt-0.5">B.Tech CSE (1st Year)</p>
            </div>
            <div>
              <span class="text-xs text-slate-400 font-medium uppercase">Primary Focus</span>
              <p class="text-sm font-semibold text-slate-200 mt-0.5">Generative AI & Web</p>
            </div>
            <div>
              <span class="text-xs text-slate-400 font-medium uppercase">Projects</span>
              <p class="text-sm font-semibold text-slate-200 mt-0.5">3+ Built & Active</p>
            </div>
            <div>
              <span class="text-xs text-slate-400 font-medium uppercase">Version Control</span>
              <p class="text-sm font-semibold text-slate-200 mt-0.5">Active on GitHub</p>
            </div>
          </div>
        </div>

        <!-- Terminal Card Showcase -->
        <div class="lg:col-span-5">
          <div class="rounded-2xl bg-slate-900 border border-slate-700/80 p-6 shadow-2xl relative">
            <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 font-mono text-xs text-slate-400">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span class="ml-2">rithwik.profile.ts</span>
              </div>
              <span class="text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">node v20</span>
            </div>
            <div class="font-mono text-xs sm:text-sm text-slate-300 space-y-1.5 leading-relaxed">
              <p><span class="text-violet-400">const</span> <span class="text-cyan-300">student</span> = {</p>
              <p class="pl-4">name: <span class="text-emerald-300">'Rithwik'</span>,</p>
              <p class="pl-4">program: <span class="text-emerald-300">'B.Tech Computer Science'</span>,</p>
              <p class="pl-4">academicYear: <span class="text-amber-300">1</span>,</p>
              <p class="pl-4">interests: [<span class="text-cyan-200">'GenAI'</span>, <span class="text-cyan-200">'Prompt Eng.'</span>, <span class="text-cyan-200">'Web Dev'</span>],</p>
              <p class="pl-4">mindset: <span class="text-emerald-300">'Curious &bull; Analytical &bull; Builder'</span>,</p>
              <p class="pl-4">openForOpportunities: <span class="text-violet-400">true</span></p>
              <p>};</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span class="flex items-center gap-1.5 text-emerald-400">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Terminal Ready
              </span>
              <a href="https://github.com/rithu07082008-collab" target="_blank" class="text-cyan-400 hover:underline">@rithu07082008-collab</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 3. ABOUT ME                                -->
  <!-- ========================================== -->
  <section id="about" class="py-20 sm:py-28 border-t border-slate-800/60">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Background</span>
        <h2 class="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1">About Me</h2>
        <p class="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Starting my journey in Computer Science with a strong foundation in problem-solving and modern AI exploration.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-7 space-y-4 text-slate-300 text-base leading-relaxed">
          <p>
            My journey in Computer Science began with a deep curiosity about how lines of code translate into intelligent systems. As a first-year undergraduate in CSE, I am dedicating my time to mastering algorithmic logic, core web fundamentals, and practical software development principles.
          </p>
          <p>
            I am especially fascinated by the rapid evolution of Large Language Models (LLMs) and Generative AI. Whether analyzing prompt optimization patterns or building client-side logic tools, I approach every project with an analytical, problem-solving mindset and a commitment to continuous daily learning.
          </p>
          <p>
            Currently exploring foundational AI integration workflows while expanding my development toolkit across modern web architectures and collaborative Git environments.
          </p>
          
          <div class="p-4 rounded-xl bg-slate-900 border-l-4 border-cyan-400 border border-slate-800 text-sm text-slate-200 italic mt-4">
            &ldquo;Engineering isn't just about writing code that compiles; it's about cultivating an insatiable curiosity to understand how intelligent systems solve human problems.&rdquo;
          </div>
        </div>

        <div class="lg:col-span-5 space-y-4">
          <div class="p-5 rounded-2xl bg-slate-900 border border-cyan-800/40">
            <h3 class="text-base font-bold text-white mb-1">B.Tech CSE Foundation</h3>
            <p class="text-xs text-cyan-400 font-medium mb-2">1st Year Undergraduate</p>
            <p class="text-xs text-slate-300 leading-relaxed">Building rigorous fundamentals in algorithmic thinking, data structures, computational logic, and modular software design.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 border border-violet-800/40">
            <h3 class="text-base font-bold text-white mb-1">Curiosity for GenAI & LLMs</h3>
            <p class="text-xs text-violet-400 font-medium mb-2">Emerging AI Frontiers</p>
            <p class="text-xs text-slate-300 leading-relaxed">Fascinated by generative architectures, reasoning capabilities of large language models, structured prompting, and contextual AI workflows.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 border border-teal-800/40">
            <h3 class="text-base font-bold text-white mb-1">Problem-Solving Mindset</h3>
            <p class="text-xs text-teal-400 font-medium mb-2">Iterative & Analytical</p>
            <p class="text-xs text-slate-300 leading-relaxed">Approaching engineering challenges systematically: breaking complex requirements into verifiable logical components and clean implementations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 4. TECHNICAL SKILLS                        -->
  <!-- ========================================== -->
  <section id="skills" class="py-20 sm:py-28 border-t border-slate-800/60 bg-slate-950/40">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Competencies</span>
        <h2 class="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1">Technical Skills</h2>
        <p class="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Cleanly grouped technical domains spanning web fundamentals, artificial intelligence, and developer environments.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Category 1: Web Fundamentals -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
          <div class="flex items-center gap-3 pb-3 mb-4 border-b border-slate-800">
            <div class="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-800/50 text-cyan-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Web Fundamentals</h3>
              <p class="text-xs text-slate-400">Core browser standards</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">HTML5</span>
                <span class="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">Core</span>
              </div>
              <p class="text-xs text-slate-400">Semantic markup, accessibility, forms & input validation</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">CSS3</span>
                <span class="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">Core</span>
              </div>
              <p class="text-xs text-slate-400">Flexbox, CSS Grid, responsive design & CSS variables</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">JavaScript (Basics)</span>
                <span class="text-[10px] uppercase font-bold text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded">Intermediate</span>
              </div>
              <p class="text-xs text-slate-400">DOM manipulation, events, conditional logic & ES6+</p>
            </div>
          </div>
        </div>

        <!-- Category 2: Artificial Intelligence -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
          <div class="flex items-center gap-3 pb-3 mb-4 border-b border-slate-800">
            <div class="p-2.5 rounded-xl bg-violet-950/50 border border-violet-800/50 text-violet-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Artificial Intelligence</h3>
              <p class="text-xs text-slate-400">GenAI & LLM concepts</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">Generative AI Fundamentals</span>
                <span class="text-[10px] uppercase font-bold text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded">Intermediate</span>
              </div>
              <p class="text-xs text-slate-400">LLM tokenization, context windows & foundational architectures</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">Prompt Engineering</span>
                <span class="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">Core</span>
              </div>
              <p class="text-xs text-slate-400">System prompts, role-setting, few-shot conditioning & schemas</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">AI APIs & Workflows</span>
                <span class="text-[10px] uppercase font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Familiar</span>
              </div>
              <p class="text-xs text-slate-400">Inference endpoints, temperature tuning & programmatic calls</p>
            </div>
          </div>
        </div>

        <!-- Category 3: Tools & Environments -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
          <div class="flex items-center gap-3 pb-3 mb-4 border-b border-slate-800">
            <div class="p-2.5 rounded-xl bg-teal-950/50 border border-teal-800/50 text-teal-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Tools & Environments</h3>
              <p class="text-xs text-slate-400">Workflow & version control</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">Git</span>
                <span class="text-[10px] uppercase font-bold text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded">Intermediate</span>
              </div>
              <p class="text-xs text-slate-400">Branching, staging, committing, log tracking & merges</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">GitHub</span>
                <span class="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">Core</span>
              </div>
              <p class="text-xs text-slate-400">Repositories, remote sync, issues & Markdown documentation</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-semibold text-slate-200">VS Code</span>
                <span class="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">Core</span>
              </div>
              <p class="text-xs text-slate-400">Debugging, workspace shortcuts, extensions & integrated terminal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 5. FEATURED PROJECTS                       -->
  <!-- ========================================== -->
  <section id="projects" class="py-20 sm:py-28 border-t border-slate-800/60">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Portfolio</span>
        <h2 class="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1">Featured Projects</h2>
        <p class="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Practical web tools demonstrating client-side algorithmic calculations, conditional flow, and early AI workflows.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project 1 -->
        <!-- Future repository link: Update the href attribute below -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex flex-col justify-between shadow-xl group">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">Completed</span>
              <a href="https://github.com/rithu07082008-collab" target="_blank" class="text-slate-400 hover:text-white" title="GitHub Repo">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Student Grade Calculator</h3>
            <p class="text-xs text-slate-300 mb-4 leading-relaxed">
              An interactive web tool designed to calculate student percentages, GPA, and grade categories with input validation and clear visual feedback.
            </p>
            <ul class="text-xs text-slate-400 space-y-1 mb-4">
              <li>&bull; Multi-subject dynamic score calculation</li>
              <li>&bull; Automated 10-point GPA & letter grade matrix</li>
            </ul>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-800">
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">HTML</span>
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">CSS</span>
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">JavaScript</span>
            </div>
            <a href="https://github.com/rithu07082008-collab" target="_blank" class="block w-full text-center py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors">
              View Repository
            </a>
          </div>
        </div>

        <!-- Project 2 -->
        <!-- Future repository link: Update the href attribute below -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex flex-col justify-between shadow-xl group">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">Completed</span>
              <a href="https://github.com/rithu07082008-collab" target="_blank" class="text-slate-400 hover:text-white" title="GitHub Repo">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Voting Eligibility Checker</h3>
            <p class="text-xs text-slate-300 mb-4 leading-relaxed">
              A conditional logic application that verifies user age and citizenship criteria to assess voter registration eligibility.
            </p>
            <ul class="text-xs text-slate-400 space-y-1 mb-4">
              <li>&bull; Age threshold validation (18+ requirement)</li>
              <li>&bull; Real-time DOM status cards & feedback</li>
            </ul>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-800">
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">JavaScript</span>
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">DOM Manipulation</span>
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">Web Basics</span>
            </div>
            <a href="https://github.com/rithu07082008-collab" target="_blank" class="block w-full text-center py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors">
              View Repository
            </a>
          </div>
        </div>

        <!-- Project 3 -->
        <!-- Future repository link: Update the href attribute below -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex flex-col justify-between shadow-xl group">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">Upcoming / In Progress</span>
              <a href="https://github.com/rithu07082008-collab" target="_blank" class="text-slate-400 hover:text-white" title="GitHub Repo">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">GenAI Concept Sandbox</h3>
            <p class="text-xs text-slate-300 mb-4 leading-relaxed">
              Exploring foundational generative AI integrations, system prompt engineering, and parameter testing workflows.
            </p>
            <ul class="text-xs text-slate-400 space-y-1 mb-4">
              <li>&bull; System and role prompt structure</li>
              <li>&bull; Model parameter testing (temperature & tokens)</li>
            </ul>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-800">
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">GenAI</span>
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">APIs</span>
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">In Progress</span>
            </div>
            <a href="https://github.com/rithu07082008-collab" target="_blank" class="block w-full text-center py-2 px-3 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold transition-colors">
              Upcoming Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 6. FOOTER / CONTACT SECTION                -->
  <!-- ========================================== -->
  <section id="contact" class="py-20 sm:py-28 border-t border-slate-800/60 bg-slate-950/60">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Get In Touch</span>
        <h2 class="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1">Connect with Rithwik</h2>
        <p class="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Interested in discussing technology, academic projects, or collaborative engineering initiatives? Reach out directly.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- Direct Links -->
        <div class="lg:col-span-5 space-y-4">
          <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <span class="text-xs uppercase font-bold text-slate-400">Direct Email</span>
            <p class="text-sm font-semibold text-white mt-1 font-mono">rithu07082008@gmail.com</p>
            <a href="mailto:rithu07082008@gmail.com" class="inline-block mt-3 text-xs text-cyan-400 hover:underline font-medium">Send Email &rarr;</a>
          </div>

          <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <span class="text-xs uppercase font-bold text-slate-400">GitHub Profile</span>
            <p class="text-sm font-semibold text-white mt-1 font-mono">github.com/rithu07082008-collab</p>
            <a href="https://github.com/rithu07082008-collab" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 text-xs text-cyan-400 hover:underline font-medium">Visit Repositories &rarr;</a>
          </div>

          <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <span class="text-xs uppercase font-bold text-slate-400">LinkedIn Network</span>
            <p class="text-sm font-semibold text-white mt-1 font-mono truncate">${linkedin}</p>
            <!-- Developer LinkedIn Link: Replace URL if needed -->
            <a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 text-xs text-cyan-400 hover:underline font-medium">Connect on LinkedIn &rarr;</a>
          </div>
        </div>

        <!-- Contact Form Mockup -->
        <div class="lg:col-span-7">
          <form id="contact-form" class="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4" onsubmit="event.preventDefault(); alert('Message noted! You can also reach Rithwik directly at rithu07082008@gmail.com');">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                <input type="text" required placeholder="Alex" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400">
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400">
              </div>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
              <input type="text" placeholder="Project inquiry / Mentorship" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Message</label>
              <textarea required rows="4" placeholder="Write your message here..." class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"></textarea>
            </div>
            <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-sm shadow-md shadow-cyan-500/20 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- FOOTER & COPYRIGHT                         -->
  <!-- ========================================== -->
  <footer class="bg-[#0b1120] border-t border-slate-800 py-10 text-xs text-slate-400">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="font-bold text-white">Rithwik</span>
        <span>&bull;</span>
        <span>1st Year B.Tech CSE</span>
      </div>
      <p>&copy; <span id="current-year">${year}</span> Rithwik. All rights reserved.</p>
    </div>
  </footer>

  <!-- ========================================== -->
  <!-- VANILLA JAVASCRIPT MICRO-INTERACTIONS      -->
  <!-- ========================================== -->
  <script>
    // Dynamic Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const toggleBtn = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });
  </script>
</body>
</html>`;
}
