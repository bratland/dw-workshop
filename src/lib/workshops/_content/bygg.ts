import type { WorkshopTranslations } from '../types';
import { saljTranslations } from './salj';

// AW för Bygg-variant. Bygger på salj som bas och skriver över hero/agenda/badge.
// Egna infographics + podcast finns redan i static/.
export const byggTranslations: WorkshopTranslations = {
	...saljTranslations,
	header: {
		badge: { sv: 'AI AW för Bygg', en: 'AI AW for Construction' }
	},
	hero: {
		label: { sv: 'AI AW för Bygg — 20 maj 2026', en: 'AI AW for Construction — May 20, 2026' },
		title1: { sv: 'Bygg med', en: 'Build with' },
		description: {
			sv: 'Resurser och verktyg från vår workshop. Allt du behöver för att börja använda AI i din byggprocess — från kalkyl och offert till AMA-stöd och dagbok.',
			en: 'Resources and tools from our workshop. Everything you need to start using AI in your construction work — from estimating and offers to AMA support and site diaries.'
		},
		cta: { sv: 'Kom igång', en: 'Get started' }
	},
	agenda: {
		label: { sv: 'AI AW för Bygg', en: 'AI AW for Construction' },
		title: { sv: 'Kvällens agenda', en: "Tonight's agenda" },
		description: {
			sv: 'Kort orientering om hur AI förändrar byggbranschen, följt av praktiskt arbete där du testar AI-verktyg direkt i din egen vardag.',
			en: 'A brief orientation on how AI is changing the construction industry, followed by hands-on work where you test AI tools directly in your own workflow.'
		},
		block1Title: { sv: 'Mingel', en: 'Mingling' },
		block1Desc: {
			sv: 'Anländ i lugn och ro, ta en kaffe och hälsa på de andra innan vi drar igång.',
			en: 'Arrive at your own pace, grab a coffee and meet the others before we kick off.'
		},
		block2Title: { sv: 'Intro: 5 sätt AI förändrar bygg', en: 'Intro: 5 ways AI is changing construction' },
		block2Desc: {
			sv: 'Kort välkomsthälsning följt av live-demos: AMA-stöd, kalkyl och materialprislistor, automatiska byggdagböcker, offert-generering och AI som assistent i fält. Från idé till fungerande flöde på minuter.',
			en: 'Brief welcome followed by live demos: AMA support, estimating and material price lists, automatic site diaries, offer generation and AI as a field assistant. From idea to working workflow in minutes.'
		},
		block4Title: { sv: 'Hands-on: testa själv', en: 'Hands-on: try it yourself' },
		block4Badge: { sv: 'Huvudpass', en: 'Main session' },
		block4Desc: {
			sv: 'Välj en utmaning från din egen byggvardag och testa AI-verktyg på riktigt — med dina projekt, dina underlag och dina prompts. Vi coachar dig hela vägen.',
			en: 'Pick a challenge from your own construction work and test AI tools for real — with your projects, your data and your prompts. We coach you all the way.'
		},
		block5Title: { sv: 'Visa & berätta', en: 'Show & tell' },
		block5Desc: {
			sv: 'Deltagarna delar vad de upptäckt och testat. Vi firar framstegen och inspirerar varandra.',
			en: 'Participants share what they discovered and tested. We celebrate progress and inspire each other.'
		},
		block6Title: { sv: 'Avslut & nätverka', en: 'Wrap-up & network' },
		block6Desc: {
			sv: 'Kvällen avslutas med samtal och nätverkande. Ställ frågor, diskutera idéer och ta med dig konkreta nästa steg.',
			en: 'The evening wraps up with conversation and networking. Ask questions, discuss ideas and take concrete next steps with you.'
		},
		hours: { sv: '2,5 timmar', en: '2.5 hours' },
		participants: { sv: 'Max 25 deltagare', en: 'Max 25 participants' },
		noTechRequired: { sv: 'Ingen teknisk bakgrund krävs', en: 'No technical background required' }
	},
	toolsIntro: {
		title: { sv: 'Nu kör vi!', en: "Let's go!" },
		description: {
			sv: 'Här är de AI-verktyg vi använder och rekommenderar för byggbranschen. Välj utifrån din erfarenhetsnivå och vad du vill bygga.',
			en: 'Here are the AI tools we use and recommend for construction. Choose based on your experience level and what you want to build.'
		}
	}
};
