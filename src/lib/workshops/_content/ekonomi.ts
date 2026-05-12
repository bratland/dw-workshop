import type { WorkshopTranslations } from '../types';
import { saljTranslations } from './salj';

// Ekonomi-variant av workshopen. Spreadar salj som bas och skriver över
// hero/agenda/about/why/goals/toolsIntro + fortnox-tagging.
// Verktygsbeskrivningarna (lovable/claudeCode etc) ärvs orörda — exempel-prompts
// kan ge ekonomi-vinkling i en framtida iteration.
export const ekonomiTranslations: WorkshopTranslations = {
	...saljTranslations,
	header: {
		badge: { sv: 'AI för Ekonomi', en: 'AI for Finance' }
	},
	hero: {
		label: { sv: 'AI för Ekonomi — 12 maj 2026', en: 'AI for Finance — May 12, 2026' },
		title1: { sv: 'Bokför med', en: 'Book with' },
		description: {
			sv: 'Resurser och verktyg från vår workshop. Automatiserad bokföring, smartare rapportering och AI-driven analys — allt du behöver för att spara timmar varje vecka i ekonomifunktionen.',
			en: 'Resources and tools from our workshop. Automated bookkeeping, smarter reporting and AI-driven analysis — everything you need to save hours every week in the finance function.'
		},
		cta: { sv: 'Kom igång', en: 'Get started' }
	},
	agenda: {
		label: { sv: 'AI för Ekonomi', en: 'AI for Finance' },
		title: { sv: 'Kvällens agenda', en: "Tonight's agenda" },
		description: {
			sv: 'Inspiration, live-demos av AI-verktyg och öppen diskussion om möjligheter och utmaningar för ekonomi och redovisning.',
			en: 'Inspiration, live demos of AI tools and open discussion about opportunities and challenges for finance and accounting.'
		},
		block1Title: { sv: 'Mingel', en: 'Mingling' },
		block1Desc: {
			sv: 'Anländ i lugn och ro, ta en kaffe och hälsa på de andra innan vi drar igång.',
			en: 'Arrive at your own pace, grab a coffee and meet the others before we kick off.'
		},
		block2Title: { sv: 'Intro: 5 sätt AI förändrar ekonomi', en: 'Intro: 5 ways AI is changing finance' },
		block2Desc: {
			sv: 'Kort välkomsthälsning följt av live-demos: faktura-OCR utan klickande, månadsrapportering med avvikelsedetektion, bokslutsstöd med AI, kassaflödesprognoser och automatiserad regelefterlevnad. Från idé till fungerande flöde på minuter.',
			en: 'Brief welcome followed by live demos: invoice OCR without clicking, monthly reporting with anomaly detection, AI-assisted year-end, cash flow forecasting and automated compliance. From idea to working workflow in minutes.'
		},
		block4Title: { sv: 'Hands-on: testa själv', en: 'Hands-on: try it yourself' },
		block4Badge: { sv: 'Huvudpass', en: 'Main session' },
		block4Desc: {
			sv: 'Välj en utmaning från din egen ekonomivardag och testa AI-verktyg på riktigt — med dina kunder, din bransch och dina underlag. Vi coachar dig hela vägen.',
			en: 'Pick a challenge from your own finance work and test AI tools for real — with your customers, your industry and your data. We coach you all the way.'
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
		participants: { sv: 'Max 20 deltagare', en: 'Max 20 participants' },
		noTechRequired: { sv: 'Ingen teknisk bakgrund krävs', en: 'No technical background required' }
	},
	about: {
		label: { sv: 'Dina workshopledare', en: 'Your workshop leaders' },
		bio1: {
			sv: 'AI-Coach och grundare av Daily Wins. 15+ års erfarenhet av AI-teknik och affärsnytta. Hjälper ekonomifunktionen att implementera AI utan egen AI-avdelning — från idé till mätbara resultat.',
			en: 'AI Coach and founder of Daily Wins. 15+ years of experience in AI technology and business impact. Helping finance functions implement AI without their own AI department — from idea to measurable results.'
		},
		bio2: {
			sv: 'Anders lägger 12+ timmar om dagen på att bygga AI-lösningar och har hands-on erfarenhet av samtliga verktyg på den här sidan. Workshopsen handlar inte om teori — utan om att bygga på riktigt, tillsammans.',
			en: 'Anders spends 12+ hours a day building AI solutions and has hands-on experience with every tool on this page. The workshops are not about theory — but about building for real, together.'
		},
		cospeakerLabel: { sv: 'Gästtalare', en: 'Guest speaker' },
		cospeakerName: { sv: 'Mattias Olinder', en: 'Mattias Olinder' },
		cospeakerRole: {
			sv: 'Auktoriserad redovisningskonsult, MBA, styrelseledamot — Företagstjänster Olinder Redovisning',
			en: 'Authorized accounting consultant, MBA, board member — Företagstjänster Olinder Redovisning'
		},
		cospeakerBio: {
			sv: 'Mattias delar insikter om redovisningens framtid och hur AI redan i dag ändrar arbetsdagen för redovisningskonsulter och CFO:er.',
			en: 'Mattias shares insights on the future of accounting and how AI is already reshaping the workday for accounting consultants and CFOs.'
		}
	},
	goals: {
		label: { sv: 'Mål', en: 'Goals' },
		title: { sv: 'Det här tar du med dig', en: 'What you take away' },
		description: {
			sv: 'Workshopen handlar inte om att lyssna — utan om att göra. När du går härifrån har du:',
			en: 'This workshop is not about listening — it\'s about doing. When you leave, you will have:'
		},
		goal1Title: { sv: 'Ett AI-flöde du kan köra imorgon', en: 'An AI workflow you can run tomorrow' },
		goal1Desc: {
			sv: 'Ett konkret AI-flöde i din ekonomiprocess — testat på riktiga underlag och egna prompts. Inte en övning, utan något du använder på måndag.',
			en: 'A concrete AI workflow in your finance process — tested on real data and your own prompts. Not an exercise, but something you use on Monday.'
		},
		goal2Title: { sv: 'Förstått vad AI kan idag', en: 'Understood what AI can do today' },
		goal2Desc: {
			sv: 'Inte teori, utan hands-on förståelse av var AI faktiskt gör skillnad i ekonomi — och var den inte gör det.',
			en: 'Not theory, but hands-on understanding of where AI actually makes a difference in finance — and where it doesn\'t.'
		},
		goal3Title: { sv: 'Verktygslådan klar', en: 'Toolbox ready' },
		goal3Desc: {
			sv: 'Du vet vilka verktyg som passar dig, har konton redo och vet exakt hur du fortsätter på egen hand.',
			en: 'You know which tools suit you, have accounts ready, and know exactly how to continue on your own.'
		},
		goal4Title: { sv: 'Ny bild av dig själv', en: 'New self-image' },
		goal4Desc: {
			sv: 'Du har gått från "jag har knappt använt ChatGPT" till "jag har AI i min ekonomiprocess". Det är den förändring som håller.',
			en: 'You\'ve gone from "I\'ve barely used ChatGPT" to "I have AI in my finance process." That\'s the change that sticks.'
		}
	},
	why: {
		label: { sv: 'Bakgrund', en: 'Background' },
		title: { sv: 'Varför den här workshopen?', en: 'Why this workshop?' },
		lead: {
			sv: 'För två år sedan var AI-frågan enkel: "Har ni börjat använda ChatGPT?" Idag är den frågan lika relevant som att fråga om ni har internet. Det som händer just nu — efter ChatGPT-eran — är något helt annat.',
			en: 'Two years ago, the AI question was simple: "Have you started using ChatGPT?" Today, that question is as relevant as asking if you have internet. What\'s happening right now — after the ChatGPT era — is something entirely different.'
		},
		shift: {
			sv: 'Från att fråga till att bygga',
			en: 'From asking to building'
		},
		shiftDesc: {
			sv: 'AI svarar inte bara på frågor längre — den bygger hela lösningar. Och det mest anmärkningsvärda: det är inte längre bara utvecklare som bygger dem. Ekonomifunktionen är ett av de tydligaste vinst-områdena — repetitiva flöden som kan automatiseras utan kvalitetsförlust.',
			en: 'AI no longer just answers questions — it builds entire solutions. And the most remarkable thing: it\'s no longer just developers who build them. The finance function is one of the clearest win areas — repetitive workflows that can be automated without quality loss.'
		},
		moment: {
			sv: 'Ögonblicket som förändrar allt',
			en: 'The moment that changes everything'
		},
		momentDesc: {
			sv: 'I våra workshops testar redovisningskonsulter och controllers AI-flöden mot sina egna underlag — fakturor, kontoplaner, månadsbokslut. Det lyser i ögonen på människor. De går från "jag har knappt använt ChatGPT" till "jag har AI i min månadsrutin". Det är en identitetsförskjutning — den enda typen av förändring som faktiskt håller.',
			en: 'In our workshops, accounting consultants and controllers test AI workflows against their own data — invoices, charts of accounts, monthly closings. People\'s eyes light up. They go from "I\'ve barely used ChatGPT" to "I have AI in my monthly routine." It\'s an identity shift — the only type of change that actually sticks.'
		},
		quote: {
			sv: '"Det svåraste att begripa är hur enkelt det faktiskt är. Så länge du inte har upplevt det själv kommer du att underskatta det."',
			en: '"The hardest thing to grasp is how simple it actually is. As long as you haven\'t experienced it yourself, you will underestimate it."'
		},
		bottom: {
			sv: 'ChatGPT var steg ett — att fråga. Det här är steg två — att bygga. Och steg två förändrar allt.',
			en: 'ChatGPT was step one — asking. This is step two — building. And step two changes everything.'
		}
	},
	toolsIntro: {
		title: { sv: 'Nu kör vi!', en: "Let's go!" },
		description: {
			sv: 'Här är de AI-verktyg vi använder och rekommenderar för ekonomifunktionen. Fortnox MCP är vår egen brygga till ditt bokföringssystem — börja där om du redan kör Fortnox.',
			en: 'Here are the AI tools we use and recommend for the finance function. Fortnox MCP is our own bridge to your accounting system — start there if you already run Fortnox.'
		}
	},
	lovable: {
		...saljTranslations.lovable,
		promoCode: { sv: 'COMM-AI-J3UV', en: 'COMM-AI-J3UV' }
	}
};
