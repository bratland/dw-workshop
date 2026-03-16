<script lang="ts">
	import { onMount } from 'svelte';
	import QrCode from '$lib/components/QrCode.svelte';
	import { t, toggleLang, getLang } from '$lib/i18n.svelte';

	const siteUrl = 'https://workshop.dailywins.se';

	let currentSlide = $state(0);
	let totalSlides = $state(0);
	let isDesktop = $state(false);

	const header = $derived(t('header'));
	const hero = $derived(t('hero'));
	const agenda = $derived(t('agenda'));
	const about = $derived(t('about'));
	const toolsIntro = $derived(t('toolsIntro'));
	const lovable = $derived(t('lovable'));
	const replit = $derived(t('replit'));
	const cursor = $derived(t('cursor'));
	const claudeCode = $derived(t('claudeCode'));
	const copilot = $derived(t('copilot'));
	const dbIntro = $derived(t('dbIntro'));
	const supabase = $derived(t('supabase'));
	const turso = $derived(t('turso'));
	const vercel = $derived(t('vercel'));
	const netlify = $derived(t('netlify'));
	const aiIntro = $derived(t('aiIntro'));
	const openrouter = $derived(t('openrouter'));
	const composio = $derived(t('composio'));
	const fortnox = $derived(t('fortnox'));
	const tips = $derived(t('tips'));
	const qr = $derived(t('qr'));
	const footer = $derived(t('footer'));
	const lang = $derived(getLang());

	onMount(() => {
		const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-slide]'));
		totalSlides = slides.length;

		const mediaQuery = window.matchMedia('(min-width: 768px)');
		isDesktop = mediaQuery.matches;
		const handleMediaChange = (e: MediaQueryListEvent) => { isDesktop = e.matches; };
		mediaQuery.addEventListener('change', handleMediaChange);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const index = slides.indexOf(entry.target as HTMLElement);
						if (index !== -1) currentSlide = index;
					}
				}
			},
			{ rootMargin: '-40% 0px -40% 0px' }
		);
		for (const slide of slides) observer.observe(slide);

		const handleKeydown = (e: KeyboardEvent) => {
			if (!mediaQuery.matches) return;
			const tag = (e.target as HTMLElement).tagName;
			if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

			let direction = 0;
			if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
				direction = 1;
			} else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
				direction = -1;
			}

			if (direction !== 0) {
				e.preventDefault();
				const next = currentSlide + direction;
				if (next >= 0 && next < slides.length) {
					slides[next].scrollIntoView({ behavior: 'smooth' });
				}
			}
		};
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
			mediaQuery.removeEventListener('change', handleMediaChange);
			observer.disconnect();
		};
	});
</script>

<div class="min-h-screen bg-white text-navy font-sans">
	<!-- Header -->
	<header class="px-6 py-6 md:px-12 flex items-center justify-center relative">
		<a href="/" class="block" aria-label="Daily Wins">
			<svg viewBox="0 0 165 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-auto text-navy">
				<g clip-path="url(#dw-logo-header)" fill="currentColor">
					<path d="M17.9641 23.5405L25.0912 4.50641H29.7436L36.8926 23.5405H32.9111L31.5033 19.6956H23.2324L21.8466 23.5405H17.9531H17.9641ZM24.5632 16.0524H30.1945L27.3789 8.31771L24.5632 16.0524Z"/>
					<path d="M55.1901 4.50632V19.7964H62.768V23.5404H51.3516V4.50632H55.1901Z"/>
					<path d="M68.2942 16.0076L61.4531 4.50641H65.9075L70.219 12.1178L74.5854 4.50641H78.9958L72.1547 15.8394V23.5517H68.2942V16.0188V16.0076Z"/>
					<path d="M124.525 23.5517H120.664V4.51758H124.525V23.5517Z"/>
					<path d="M134.238 23.5405H130.422V4.50641H134.832L142.938 16.9268V4.50641H146.755V23.5405H142.817L134.238 10.4139V23.5405Z"/>
					<path d="M165 17.9578C165 19.6841 164.406 21.119 163.185 22.2175C161.964 23.3161 160.303 23.8429 158.147 23.8429C154.639 23.8429 151.966 22.1166 150.855 19.3703L154.199 17.6216C154.936 19.2694 156.399 20.267 158.279 20.267C159.918 20.267 161.117 19.4151 161.117 18.2493C161.117 17.6888 160.875 17.2516 160.38 16.9378C159.907 16.6015 158.972 16.2091 157.587 15.7944C155.42 15.1442 153.891 14.3595 153.033 13.4852C152.076 12.5323 151.603 11.3665 151.603 9.96532C151.603 8.28386 152.241 6.92748 153.506 5.86256C154.771 4.76401 156.322 4.23715 158.114 4.23715C161.238 4.23715 163.603 5.71683 164.67 8.33991L161.469 10.111C160.831 8.55289 159.654 7.77942 157.939 7.77942C156.41 7.77942 155.464 8.58652 155.464 9.72991C155.464 10.8733 156.344 11.4562 158.466 12.0615C162.921 13.3507 165 14.9312 165 17.9691V17.9578Z"/>
					<path d="M13.3962 20.9173C11.4935 22.6661 8.91981 23.5404 5.64225 23.5404H0V4.50632H5.71924C8.9858 4.50632 11.5595 5.33584 13.4402 7.00608C15.321 8.68754 16.2558 10.9967 16.2558 13.9785C16.2558 16.9603 15.299 19.1574 13.3962 20.9061V20.9173ZM10.4926 9.76367C9.27176 8.74359 7.72097 8.22794 5.81822 8.22794H3.86049V19.83H5.76323C7.74297 19.83 9.31576 19.3144 10.5036 18.2943C11.7024 17.2518 12.2964 15.8169 12.2964 13.9897C12.2964 12.1626 11.7024 10.7501 10.4816 9.76367H10.4926Z"/>
					<path d="M17.9844 23.5405L25.1114 4.50641H29.7638L36.9129 23.5405H32.9314L31.5236 19.6956H23.2527L21.8669 23.5405H17.9844ZM24.5835 16.0524H30.2147L27.3991 8.31771L24.5835 16.0524Z"/>
					<path d="M90.3454 11.6581C92.842 8.45212 95.4157 3.93461 86.2539 3.93461V0C97.6264 0 98.8582 7.11817 93.5349 13.7879C89.2675 19.0453 94.5798 22.4082 99.0452 17.9916C98.1323 16.1868 97.6374 14.2475 97.6374 12.4764C97.6374 7.68986 100.552 5.5376 103.445 5.5376C105.16 5.5376 106.722 6.42317 107.624 7.91406C108.658 9.61794 108.702 11.7926 107.756 13.7207C107.107 15.0434 105.908 16.9042 104.303 18.653C105.138 19.404 106.139 19.886 107.272 19.886C108.35 19.886 110.891 19.886 110.891 13.2275V4.23727H114.751V13.2499C114.751 16.4671 114.223 18.8996 113.123 20.6707C111.847 22.7445 109.824 23.8431 107.272 23.8431C103.467 23.8431 101.377 21.276 101.377 21.276C98.4843 23.7422 95.8446 24.3923 92.897 23.7758C89.2565 23.0135 85.44 17.9355 90.3454 11.6581ZM103.434 9.48342C101.74 9.48342 101.487 11.3554 101.487 12.4764C101.487 13.2723 101.685 14.2588 102.07 15.2676C103.137 14.0009 103.896 12.7567 104.292 11.9608C104.698 11.1312 104.577 10.4026 104.324 9.98785C104.116 9.65156 103.819 9.47221 103.434 9.47221V9.48342Z"/>
					<path d="M47.7221 23.5405H43.5977L36.5586 4.50641H40.683L47.7221 23.5405Z"/>
				</g>
				<defs><clipPath id="dw-logo-header"><rect width="165" height="24" fill="white"/></clipPath></defs>
			</svg>
		</a>
		<div class="absolute right-6 md:right-12 flex items-center gap-4">
			<span class="text-[13px] uppercase font-bold tracking-[1.5px] text-muted hidden md:block">{header.badge}</span>
			<button onclick={toggleLang} class="text-[13px] uppercase font-bold tracking-[1.5px] text-navy hover:text-blue-accent transition-colors cursor-pointer">
				{lang === 'sv' ? 'EN' : 'SV'}
			</button>
		</div>
	</header>

	<!-- Hero -->
	<section data-slide class="hero relative overflow-hidden bg-navy text-white">
		<div class="absolute inset-0 opacity-[0.07]" style="background-image: radial-gradient(circle, #ffffff 1px, transparent 1px); background-size: 32px 32px;"></div>
		<div class="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] animate-[hero-orb-1_8s_ease-in-out_infinite]" style="background: radial-gradient(circle, #184ace 0%, transparent 70%);"></div>
		<div class="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-20 blur-[80px] animate-[hero-orb-2_10s_ease-in-out_infinite]" style="background: radial-gradient(circle, #d9ff42 0%, transparent 70%);"></div>
		<div class="absolute top-[30%] left-[50%] w-[300px] h-[300px] rounded-full opacity-15 blur-[90px] animate-[hero-orb-3_12s_ease-in-out_infinite]" style="background: radial-gradient(circle, #184ace 0%, transparent 70%);"></div>
		<div class="absolute top-[15%] right-[12%] w-16 h-16 border-2 border-blue-accent/30 rounded-lg rotate-12 animate-[hero-float_6s_ease-in-out_infinite]"></div>
		<div class="absolute top-[60%] right-[25%] w-10 h-10 border-2 border-lime/20 rounded-full animate-[hero-float_8s_ease-in-out_infinite_1s]"></div>
		<div class="absolute bottom-[20%] left-[8%] w-6 h-6 bg-blue-accent/20 rounded-sm rotate-45 animate-[hero-float_7s_ease-in-out_infinite_2s]"></div>
		<div class="absolute top-[25%] left-[30%] w-3 h-3 bg-lime/30 rounded-full animate-[hero-float_5s_ease-in-out_infinite_0.5s]"></div>
		<div class="absolute top-[45%] right-[8%] w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-accent/40 to-transparent animate-[hero-float_9s_ease-in-out_infinite_3s]"></div>
		<div class="absolute bottom-[35%] right-[40%] w-8 h-8 border border-white/10 rotate-45 animate-[hero-float_7s_ease-in-out_infinite_4s]"></div>

		<div class="relative z-10 px-6 md:px-12 pt-20 pb-24 md:pt-32 md:pb-40 max-w-5xl">
			<p class="text-blue-accent text-sm font-bold uppercase tracking-[2px] mb-6 animate-[hero-fade-up_0.6s_ease-out_both]">
				{hero.label}
			</p>
			<h1 class="text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-[-0.05em] mb-8 animate-[hero-fade-up_0.6s_ease-out_0.15s_both]">
				{hero.title1}<br />
				<span class="relative inline-block mt-2">
					<span class="relative z-10 bg-gradient-to-r from-white via-white to-blue-accent/80 bg-clip-text text-transparent">AI</span>
					<span class="absolute inset-0 blur-[40px] bg-blue-accent/30 scale-150"></span>
					<span class="absolute -bottom-3 left-0 w-full h-[3px] bg-gradient-to-r from-lime via-lime to-transparent rounded-full"></span>
				</span>
			</h1>
			<p class="text-lg text-white/60 max-w-xl mt-10 leading-[1.55] animate-[hero-fade-up_0.6s_ease-out_0.3s_both]">
				{hero.description}
			</p>
			<a href="#verktyg" class="inline-flex items-center gap-2 mt-10 bg-lime text-navy text-[13px] font-bold uppercase tracking-[1.5px] rounded-[3px] py-[13px] px-[28px] hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 animate-[hero-fade-up_0.6s_ease-out_0.45s_both]">
				{hero.cta}
				<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
			</a>
		</div>
		<div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
			<svg class="relative block w-full h-[60px] md:h-[80px]" viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 80L1200 80L1200 0L0 80Z" fill="white" /></svg>
		</div>
	</section>

	<style>
		@keyframes hero-orb-1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-40px, 30px) scale(1.15); } }
		@keyframes hero-orb-2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(30px, -40px) scale(1.1); } }
		@keyframes hero-orb-3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-20px, -30px) scale(1.2); } }
		@keyframes hero-float { 0%, 100% { transform: translateY(0) rotate(var(--tw-rotate, 0deg)); } 50% { transform: translateY(-12px) rotate(var(--tw-rotate, 0deg)); } }
		@keyframes hero-fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
		@media (min-width: 768px) {
			:global([data-slide]:not(.hero)) {
				min-height: 100dvh;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
	</style>

	<!-- Agenda -->
	<section data-slide class="bg-navy text-white px-6 md:px-12 py-20 md:py-10">
		<div class="max-w-5xl mx-auto">
			<p class="text-blue-accent text-sm font-bold uppercase tracking-[2px] mb-3 md:mb-2">{agenda.label}</p>
			<h2 class="text-5xl md:text-5xl font-bold mb-4 md:mb-2 tracking-tight">{agenda.title}</h2>
			<p class="text-white/60 text-lg md:text-base leading-[1.55] mb-12 md:mb-6 max-w-2xl">{agenda.description}</p>
			<div class="space-y-0">
				<div class="flex gap-6 md:gap-8 pb-8 md:pb-4 border-b border-white/10">
					<div class="shrink-0 w-24 md:w-28"><span class="text-2xl font-bold">00:00</span><p class="text-white/40 text-sm md:text-xs mt-1 md:mt-0">15 min</p></div>
					<div><h3 class="text-xl md:text-lg font-bold mb-2 md:mb-0.5">{agenda.block1Title}</h3><p class="text-white/60 leading-[1.55] md:text-sm">{agenda.block1Desc}</p></div>
				</div>
				<div class="flex gap-6 md:gap-8 py-8 md:py-4 border-b border-white/10">
					<div class="shrink-0 w-24 md:w-28"><span class="text-2xl font-bold">00:15</span><p class="text-white/40 text-sm md:text-xs mt-1 md:mt-0">30 min</p></div>
					<div><h3 class="text-xl md:text-lg font-bold mb-2 md:mb-0.5">{agenda.block2Title}</h3><p class="text-white/60 leading-[1.55] md:text-sm">{agenda.block2Desc}</p></div>
				</div>
				<div class="flex gap-6 md:gap-8 py-8 md:py-4 border-b border-white/10">
					<div class="shrink-0 w-24 md:w-28"><span class="text-2xl font-bold">00:45</span><p class="text-white/40 text-sm md:text-xs mt-1 md:mt-0">15 min</p></div>
					<div><h3 class="text-xl md:text-lg font-bold mb-2 md:mb-0.5">{agenda.block3Title}</h3><p class="text-white/60 leading-[1.55] md:text-sm">{agenda.block3Desc}</p></div>
				</div>
				<div class="flex gap-6 md:gap-8 py-8 md:py-4 border-b border-white/10">
					<div class="shrink-0 w-24 md:w-28"><span class="text-2xl font-bold">01:00</span><p class="text-white/40 text-sm md:text-xs mt-1 md:mt-0">60 min</p></div>
					<div><h3 class="text-xl md:text-lg font-bold mb-2 md:mb-0.5 flex items-center gap-2">{agenda.block4Title}<span class="bg-lime text-navy text-xs font-bold px-2 py-0.5 rounded-[3px] uppercase tracking-wider">{agenda.block4Badge}</span></h3><p class="text-white/60 leading-[1.55] md:text-sm">{agenda.block4Desc}</p></div>
				</div>
				<div class="flex gap-6 md:gap-8 py-8 md:py-4 border-b border-white/10">
					<div class="shrink-0 w-24 md:w-28"><span class="text-2xl font-bold">02:00</span><p class="text-white/40 text-sm md:text-xs mt-1 md:mt-0">15 min</p></div>
					<div><h3 class="text-xl md:text-lg font-bold mb-2 md:mb-0.5">{agenda.block5Title}</h3><p class="text-white/60 leading-[1.55] md:text-sm">{agenda.block5Desc}</p></div>
				</div>
				<div class="flex gap-6 md:gap-8 pt-8 md:pt-4">
					<div class="shrink-0 w-24 md:w-28"><span class="text-2xl font-bold">02:15</span><p class="text-white/40 text-sm md:text-xs mt-1 md:mt-0">15 min</p></div>
					<div><h3 class="text-xl md:text-lg font-bold mb-2 md:mb-0.5">{agenda.block6Title}</h3><p class="text-white/60 leading-[1.55] md:text-sm">{agenda.block6Desc}</p></div>
				</div>
			</div>
			<div class="mt-12 md:mt-6 flex flex-wrap gap-8 md:gap-6 text-sm text-white/40">
				<div class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>{agenda.hours}</span></div>
				<div class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span>{agenda.participants}</span></div>
				<div class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg><span>{agenda.noTechRequired}</span></div>
			</div>
		</div>
	</section>

	<!-- About Anders -->
	<section data-slide class="px-6 md:px-12 py-20">
		<div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
			<div class="shrink-0">
				<div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy overflow-hidden flex items-center justify-center relative">
					<span class="text-white text-3xl md:text-4xl font-bold select-none">AB</span>
					<img src="/anders.jpg" alt="Anders Bratland" class="absolute inset-0 w-full h-full object-cover" onerror={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
				</div>
			</div>
			<div>
				<p class="text-blue-accent text-sm font-bold uppercase tracking-[2px] mb-3">{about.label}</p>
				<h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Anders Bratland</h2>
				<p class="text-gray-text text-lg leading-[1.55] mb-4">{about.bio1}</p>
				<p class="text-gray-text text-lg leading-[1.55] mb-6">{about.bio2}</p>
				<div class="flex flex-wrap gap-4 text-sm">
					<a href="https://www.linkedin.com/in/andersbratland" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-navy hover:text-blue-accent transition-colors">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
						LinkedIn
					</a>
					<span class="text-muted">anders@dailywins.se</span>
					<span class="text-muted">0732-707 280</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Tools intro -->
	<section data-slide id="verktyg" class="px-6 md:px-12 pt-16 pb-8 scroll-mt-8">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-5xl md:text-6xl font-bold mb-4 tracking-tight">{toolsIntro.title}</h2>
			<p class="text-gray-text text-lg leading-[1.55]">{toolsIntro.description}</p>
		</div>
	</section>

	<!-- 01 Lovable -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">01</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/lovable.svg" alt="Lovable" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Lovable</h3>
				<span class="bg-lime text-navy text-xs font-bold px-2 py-0.5 rounded-[3px] uppercase tracking-wider">{lovable.recommended}</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{lovable.description}</p>
			<div class="flex flex-wrap gap-2 mb-8">
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{lovable.tag1}</span>
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{lovable.tag2}</span>
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{lovable.tag3}</span>
			</div>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{lovable.stepsTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {@html lovable.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {lovable.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {lovable.step3}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">4.</span> {lovable.step4}</li>
				</ol>
			</div>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{lovable.examplesTitle}</h4>
				<div class="space-y-3 text-gray-text leading-[1.55]">
					<div class="bg-white rounded p-3"><p class="text-sm font-mono">{lovable.example1}</p></div>
					<div class="bg-white rounded p-3"><p class="text-sm font-mono">{lovable.example2}</p></div>
					<div class="bg-white rounded p-3"><p class="text-sm font-mono">{lovable.example3}</p></div>
				</div>
			</div>
			<div class="border border-navy/10 rounded-lg p-5 mb-6">
				<h4 class="font-bold mb-2 text-sm uppercase tracking-wider text-muted">{lovable.mistakesTitle}</h4>
				<ul class="space-y-2 text-gray-text text-sm leading-[1.55]">
					<li><strong>{lovable.mistake1Label}</strong> {lovable.mistake1}</li>
					<li><strong>{lovable.mistake2Label}</strong> {lovable.mistake2}</li>
					<li><strong>{lovable.mistake3Label}</strong> {lovable.mistake3}</li>
				</ul>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{lovable.level}</span><span>{lovable.price}</span></div>
				<a href="https://lovable.dev/invite/D99APSK" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{lovable.cta} &rarr;</a>
			</div>
			<p class="text-xs text-muted mt-4">{lovable.referral}</p>
		</div>
	</section>

	<!-- 02 Replit -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">02</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/replit.svg" alt="Replit" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Replit</h3>
				<span class="bg-lime text-navy text-xs font-bold px-2 py-0.5 rounded-[3px] uppercase tracking-wider">{replit.recommended}</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{replit.description}</p>
			<div class="flex flex-wrap gap-2 mb-8">
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{replit.tag1}</span>
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{replit.tag2}</span>
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{replit.tag3}</span>
			</div>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{replit.stepsTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {@html replit.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {replit.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {replit.step3}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">4.</span> {replit.step4}</li>
				</ol>
			</div>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{replit.bestForTitle}</h4>
				<ul class="space-y-1.5 text-gray-text leading-[1.55]">
					<li>{replit.bestFor1}</li>
					<li>{replit.bestFor2}</li>
					<li>{replit.bestFor3}</li>
					<li>{replit.bestFor4}</li>
					<li>{replit.bestFor5}</li>
				</ul>
			</div>
			<div class="border border-navy/10 rounded-lg p-5 mb-6">
				<h4 class="font-bold mb-2 text-sm uppercase tracking-wider text-muted">{replit.importTitle}</h4>
				<p class="text-gray-text text-sm leading-[1.55]">{replit.importDesc}</p>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{replit.level}</span><span>{replit.price}</span></div>
				<a href="https://replit.com/refer/andersbratland1" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{replit.cta} &rarr;</a>
			</div>
			<p class="text-xs text-muted mt-4">{replit.referral}</p>
		</div>
	</section>

	<!-- 03 Cursor -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator bg-bg-warm">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">03</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/cursor.svg" alt="Cursor" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Cursor</h3>
				<span class="text-xs uppercase tracking-wider text-muted">AI Code Editor</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{cursor.description}</p>
			<div class="bg-white rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{cursor.quickstartTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {cursor.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> <kbd class="bg-navy/10 px-1.5 py-0.5 rounded text-xs font-mono">Cmd+L</kbd> {cursor.step2Chat}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> <kbd class="bg-navy/10 px-1.5 py-0.5 rounded text-xs font-mono">Cmd+I</kbd> {cursor.step3Composer}</li>
				</ol>
			</div>
			<div class="bg-white rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{cursor.bestForTitle}</h4>
				<ul class="space-y-1.5 text-gray-text leading-[1.55]">
					<li>{cursor.bestFor1}</li>
					<li>{cursor.bestFor2} <kbd class="bg-navy/10 px-1.5 py-0.5 rounded text-xs font-mono">Cmd+K</kbd> {cursor.bestFor2Suffix}</li>
					<li>{cursor.bestFor3}</li>
				</ul>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{cursor.level}</span><span>{cursor.price}</span></div>
				<a href="https://cursor.com" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{cursor.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- 04 Claude Code -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">04</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/claude.svg" alt="Claude Code" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Claude Code</h3>
				<span class="text-xs uppercase tracking-wider text-muted">AI Terminal Agent</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{claudeCode.description}</p>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{claudeCode.quickstartTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {claudeCode.step1} <code class="bg-navy/10 px-2 py-0.5 rounded text-sm font-mono">curl -fsSL https://claude.ai/install.sh | bash</code></li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {claudeCode.step2} <code class="bg-navy/10 px-2 py-0.5 rounded text-sm font-mono">claude</code></li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {claudeCode.step3}</li>
				</ol>
			</div>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{claudeCode.uniqueTitle}</h4>
				<ul class="space-y-1.5 text-gray-text leading-[1.55]">
					<li>{claudeCode.unique1}</li>
					<li>{claudeCode.unique2}</li>
					<li>{claudeCode.unique3}</li>
					<li>{claudeCode.unique4}</li>
				</ul>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{claudeCode.level}</span><span>{claudeCode.price}</span></div>
				<a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{claudeCode.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- 05 GitHub Copilot -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator bg-bg-warm">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">05</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/github.svg" alt="GitHub Copilot" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">GitHub Copilot</h3>
				<span class="text-xs uppercase tracking-wider text-muted">AI Pair Programmer</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{copilot.description}</p>
			<div class="bg-white rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{copilot.quickstartTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {copilot.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {copilot.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {copilot.step3} <kbd class="bg-navy/10 px-1.5 py-0.5 rounded text-xs font-mono">Tab</kbd> {copilot.step3Suffix}</li>
				</ol>
			</div>
			<div class="bg-white rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{copilot.tipsTitle}</h4>
				<p class="text-gray-text leading-[1.55]">{copilot.tipsDesc} <code class="bg-navy/10 px-1.5 py-0.5 rounded text-sm font-mono">{copilot.tipsComment}</code> {copilot.tipsSuffix}</p>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{copilot.level}</span><span>{copilot.price}</span></div>
				<a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{copilot.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- Databases & Hosting intro -->
	<section data-slide class="px-6 md:px-12 pt-20 pb-8">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-5xl md:text-6xl font-bold mb-4 tracking-tight">{dbIntro.title}</h2>
			<p class="text-gray-text text-lg leading-[1.55]">{dbIntro.description}</p>
		</div>
	</section>

	<!-- 06 Supabase -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">06</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/supabase.svg" alt="Supabase" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Supabase</h3>
				<span class="text-xs uppercase tracking-wider text-muted">{lang === 'sv' ? 'Databas + auth' : 'Database + auth'}</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{supabase.description}</p>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{supabase.stepsTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {supabase.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {supabase.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {supabase.step3}</li>
				</ol>
			</div>
			<div class="flex flex-wrap gap-2 mb-6">
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{supabase.tag1}</span>
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{supabase.tag2}</span>
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{supabase.tag3}</span>
				<span class="bg-navy/5 text-navy text-sm px-4 py-1.5 rounded-full">{supabase.tag4}</span>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{supabase.level}</span><span>{supabase.price}</span></div>
				<a href="https://supabase.com" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{supabase.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- 07 Turso -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator bg-bg-warm">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">07</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/turso.svg" alt="Turso" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Turso</h3>
				<span class="text-xs uppercase tracking-wider text-muted">{lang === 'sv' ? 'Edge-databas' : 'Edge database'}</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{turso.description}</p>
			<div class="bg-white rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-2 text-sm">{turso.compareTitle}</h4>
				<p class="text-gray-text text-sm leading-[1.55]">{@html turso.compareDesc}</p>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{turso.level}</span><span>{turso.price}</span></div>
				<a href="https://turso.tech" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{turso.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- 08 Vercel -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">08</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/vercel.svg" alt="Vercel" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Vercel</h3>
				<span class="text-xs uppercase tracking-wider text-muted">Hosting</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{vercel.description}</p>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{vercel.stepsTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {vercel.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {vercel.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {vercel.step3}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">4.</span> {vercel.step4}</li>
				</ol>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{vercel.level}</span><span>{vercel.price}</span></div>
				<a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{vercel.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- 09 Netlify -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator bg-bg-warm">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">09</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/netlify.svg" alt="Netlify" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Netlify</h3>
				<span class="text-xs uppercase tracking-wider text-muted">Hosting</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{netlify.description}</p>
			<div class="bg-white rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{netlify.quickstartTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {netlify.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {netlify.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {netlify.step3}</li>
				</ol>
				<p class="text-gray-text text-sm mt-3">{netlify.note}</p>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{netlify.level}</span><span>{netlify.price}</span></div>
				<a href="https://netlify.com" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{netlify.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- AI & Integrations intro -->
	<section data-slide class="px-6 md:px-12 pt-20 pb-8">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-5xl md:text-6xl font-bold mb-4 tracking-tight">{aiIntro.title}</h2>
			<p class="text-gray-text text-lg leading-[1.55]">{aiIntro.description}</p>
		</div>
	</section>

	<!-- 10 OpenRouter -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">10</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/openrouter.svg" alt="OpenRouter" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">OpenRouter</h3>
				<span class="text-xs uppercase tracking-wider text-muted">AI Model Gateway</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{openrouter.description}</p>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{openrouter.stepsTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {openrouter.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {openrouter.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {openrouter.step3}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">4.</span> {openrouter.step4}</li>
				</ol>
			</div>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{openrouter.whyTitle}</h4>
				<ul class="space-y-1.5 text-gray-text leading-[1.55]">
					<li>{openrouter.why1}</li>
					<li>{openrouter.why2}</li>
					<li>{openrouter.why3}</li>
				</ul>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{openrouter.level}</span><span>{openrouter.price}</span></div>
				<a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{openrouter.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- 11 Composio -->
	<section data-slide class="relative px-6 md:px-12 py-16 border-b border-separator bg-bg-warm">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">11</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/composio.svg" alt="Composio" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Composio</h3>
				<span class="text-xs uppercase tracking-wider text-muted">{lang === 'sv' ? 'API-integrationer' : 'API integrations'}</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{composio.description}</p>
			<div class="bg-white rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{composio.stepsTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {composio.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {composio.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {composio.step3}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">4.</span> {composio.step4}</li>
				</ol>
			</div>
			<div class="bg-white rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{composio.examplesTitle}</h4>
				<ul class="space-y-1.5 text-gray-text leading-[1.55]">
					<li>{composio.example1}</li>
					<li>{composio.example2}</li>
					<li>{composio.example3}</li>
				</ul>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{composio.level}</span><span>{composio.price}</span></div>
				<a href="https://composio.dev" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{composio.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- 12 Fortnox MCP -->
	<section data-slide class="relative px-6 md:px-12 py-16">
		<div class="max-w-4xl mx-auto relative">
			<span class="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-navy/[0.04] select-none pointer-events-none -mt-6">12</span>
			<div class="flex items-center gap-3 mb-2">
				<img src="/logos/fortnox.svg" alt="Fortnox MCP" class="h-8 w-auto" />
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight">Fortnox MCP</h3>
				<span class="text-xs uppercase tracking-wider text-muted">{fortnox.subtitle}</span>
			</div>
			<p class="text-gray-text text-lg leading-[1.55] mb-6">{fortnox.description}</p>
			<div class="bg-bg-warm rounded-lg p-6 mb-6">
				<h4 class="font-bold mb-3">{fortnox.stepsTitle}</h4>
				<ol class="space-y-2 text-gray-text leading-[1.55]">
					<li class="flex gap-3"><span class="text-blue-accent font-bold">1.</span> {@html fortnox.step1}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">2.</span> {fortnox.step2}</li>
					<li class="flex gap-3"><span class="text-blue-accent font-bold">3.</span> {fortnox.step3}</li>
				</ol>
				<p class="text-sm text-muted mt-4">{fortnox.tryWith}</p>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex gap-6 text-sm text-muted"><span>{fortnox.level}</span><span>{fortnox.price}</span></div>
				<a href="https://portal-daily-wins.vercel.app" target="_blank" rel="noopener noreferrer" class="text-blue-accent font-bold text-sm uppercase tracking-[1px] hover:underline">{fortnox.cta} &rarr;</a>
			</div>
		</div>
	</section>

	<!-- Tips -->
	<section data-slide class="bg-section-warm px-6 md:px-12 py-20">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-5xl md:text-6xl font-bold mb-12 tracking-tight">{tips.title}</h2>
			<div class="space-y-10">
				<div class="flex gap-5"><span class="text-5xl font-bold text-navy/15 leading-none">1</span><div><h3 class="font-bold text-xl mb-2">{tips.tip1Title}</h3><p class="text-gray-text text-lg leading-[1.55]">{tips.tip1Desc}</p></div></div>
				<div class="flex gap-5"><span class="text-5xl font-bold text-navy/15 leading-none">2</span><div><h3 class="font-bold text-xl mb-2">{tips.tip2Title}</h3><p class="text-gray-text text-lg leading-[1.55]">{tips.tip2Desc}</p></div></div>
				<div class="flex gap-5"><span class="text-5xl font-bold text-navy/15 leading-none">3</span><div><h3 class="font-bold text-xl mb-2">{tips.tip3Title}</h3><p class="text-gray-text text-lg leading-[1.55]">{tips.tip3Desc}</p></div></div>
				<div class="flex gap-5"><span class="text-5xl font-bold text-navy/15 leading-none">4</span><div><h3 class="font-bold text-xl mb-2">{tips.tip4Title}</h3><p class="text-gray-text text-lg leading-[1.55]">{tips.tip4Desc}</p></div></div>
			</div>
		</div>
	</section>

	<!-- QR Code + CTA -->
	<section data-slide class="bg-navy text-white px-6 md:px-12 py-20">
		<div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
			<div class="flex-1">
				<h2 class="text-5xl md:text-6xl font-bold mb-4 tracking-tight">{qr.title}</h2>
				<p class="text-white/70 mb-8 text-lg leading-[1.55]">{qr.description}</p>
				<a href="https://dailywins.se" class="inline-block bg-lime text-navy uppercase text-[13px] font-bold tracking-[1.5px] rounded-[3px] py-[13px] px-[24px] hover:opacity-90 transition-opacity">{qr.cta}</a>
			</div>
			<div class="bg-white p-4 rounded-lg"><QrCode url={siteUrl} size={200} /></div>
		</div>
	</section>

	<!-- Slide counter (desktop only) -->
	{#if isDesktop && totalSlides > 0}
		<div class="fixed bottom-6 right-6 bg-navy/80 text-white text-xs font-mono px-3 py-1.5 rounded-full z-50 hidden md:block">
			{currentSlide + 1} / {totalSlides}
		</div>
	{/if}

	<!-- Footer -->
	<footer data-slide class="bg-bg-warm px-6 md:px-12 py-16">
		<div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12">
			<div>
				<svg viewBox="0 0 165 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-auto text-navy mb-4">
					<g clip-path="url(#dw-logo-footer)" fill="currentColor">
						<path d="M17.9641 23.5405L25.0912 4.50641H29.7436L36.8926 23.5405H32.9111L31.5033 19.6956H23.2324L21.8466 23.5405H17.9531H17.9641ZM24.5632 16.0524H30.1945L27.3789 8.31771L24.5632 16.0524Z"/>
						<path d="M55.1901 4.50632V19.7964H62.768V23.5404H51.3516V4.50632H55.1901Z"/>
						<path d="M68.2942 16.0076L61.4531 4.50641H65.9075L70.219 12.1178L74.5854 4.50641H78.9958L72.1547 15.8394V23.5517H68.2942V16.0188V16.0076Z"/>
						<path d="M124.525 23.5517H120.664V4.51758H124.525V23.5517Z"/>
						<path d="M134.238 23.5405H130.422V4.50641H134.832L142.938 16.9268V4.50641H146.755V23.5405H142.817L134.238 10.4139V23.5405Z"/>
						<path d="M165 17.9578C165 19.6841 164.406 21.119 163.185 22.2175C161.964 23.3161 160.303 23.8429 158.147 23.8429C154.639 23.8429 151.966 22.1166 150.855 19.3703L154.199 17.6216C154.936 19.2694 156.399 20.267 158.279 20.267C159.918 20.267 161.117 19.4151 161.117 18.2493C161.117 17.6888 160.875 17.2516 160.38 16.9378C159.907 16.6015 158.972 16.2091 157.587 15.7944C155.42 15.1442 153.891 14.3595 153.033 13.4852C152.076 12.5323 151.603 11.3665 151.603 9.96532C151.603 8.28386 152.241 6.92748 153.506 5.86256C154.771 4.76401 156.322 4.23715 158.114 4.23715C161.238 4.23715 163.603 5.71683 164.67 8.33991L161.469 10.111C160.831 8.55289 159.654 7.77942 157.939 7.77942C156.41 7.77942 155.464 8.58652 155.464 9.72991C155.464 10.8733 156.344 11.4562 158.466 12.0615C162.921 13.3507 165 14.9312 165 17.9691V17.9578Z"/>
						<path d="M13.3962 20.9173C11.4935 22.6661 8.91981 23.5404 5.64225 23.5404H0V4.50632H5.71924C8.9858 4.50632 11.5595 5.33584 13.4402 7.00608C15.321 8.68754 16.2558 10.9967 16.2558 13.9785C16.2558 16.9603 15.299 19.1574 13.3962 20.9061V20.9173ZM10.4926 9.76367C9.27176 8.74359 7.72097 8.22794 5.81822 8.22794H3.86049V19.83H5.76323C7.74297 19.83 9.31576 19.3144 10.5036 18.2943C11.7024 17.2518 12.2964 15.8169 12.2964 13.9897C12.2964 12.1626 11.7024 10.7501 10.4816 9.76367H10.4926Z"/>
						<path d="M17.9844 23.5405L25.1114 4.50641H29.7638L36.9129 23.5405H32.9314L31.5236 19.6956H23.2527L21.8669 23.5405H17.9844ZM24.5835 16.0524H30.2147L27.3991 8.31771L24.5835 16.0524Z"/>
						<path d="M90.3454 11.6581C92.842 8.45212 95.4157 3.93461 86.2539 3.93461V0C97.6264 0 98.8582 7.11817 93.5349 13.7879C89.2675 19.0453 94.5798 22.4082 99.0452 17.9916C98.1323 16.1868 97.6374 14.2475 97.6374 12.4764C97.6374 7.68986 100.552 5.5376 103.445 5.5376C105.16 5.5376 106.722 6.42317 107.624 7.91406C108.658 9.61794 108.702 11.7926 107.756 13.7207C107.107 15.0434 105.908 16.9042 104.303 18.653C105.138 19.404 106.139 19.886 107.272 19.886C108.35 19.886 110.891 19.886 110.891 13.2275V4.23727H114.751V13.2499C114.751 16.4671 114.223 18.8996 113.123 20.6707C111.847 22.7445 109.824 23.8431 107.272 23.8431C103.467 23.8431 101.377 21.276 101.377 21.276C98.4843 23.7422 95.8446 24.3923 92.897 23.7758C89.2565 23.0135 85.44 17.9355 90.3454 11.6581ZM103.434 9.48342C101.74 9.48342 101.487 11.3554 101.487 12.4764C101.487 13.2723 101.685 14.2588 102.07 15.2676C103.137 14.0009 103.896 12.7567 104.292 11.9608C104.698 11.1312 104.577 10.4026 104.324 9.98785C104.116 9.65156 103.819 9.47221 103.434 9.47221V9.48342Z"/>
						<path d="M47.7221 23.5405H43.5977L36.5586 4.50641H40.683L47.7221 23.5405Z"/>
					</g>
					<defs><clipPath id="dw-logo-footer"><rect width="165" height="24" fill="white"/></clipPath></defs>
				</svg>
				<p class="text-gray-text text-sm mb-4">{footer.tagline}</p>
				<div class="flex gap-4">
					<a href="https://www.linkedin.com/company/dailywins" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-navy hover:text-blue-accent transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
					</a>
					<a href="https://open.spotify.com/show/dailywins" target="_blank" rel="noopener noreferrer" aria-label="Spotify" class="text-navy hover:text-blue-accent transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
					</a>
				</div>
			</div>
			<div>
				<p class="font-bold mb-2">{footer.lecture}</p>
				<p class="text-gray-text text-sm">Anders Bratland</p>
				<p class="text-gray-text text-sm">0732-707 280</p>
				<p class="text-gray-text text-sm">anders@dailywins.se</p>
			</div>
			<div>
				<p class="font-bold mb-2">{footer.address}</p>
				<p class="text-gray-text text-sm">Daily Wins</p>
				<p class="text-gray-text text-sm">Heurlins Plats 1a</p>
				<p class="text-gray-text text-sm">413 01 Göteborg</p>
			</div>
		</div>
	</footer>
</div>
