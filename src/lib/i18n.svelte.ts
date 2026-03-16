export type Lang = 'sv' | 'en';

let lang = $state<Lang>('sv');

export function getLang(): Lang {
	return lang;
}

export function setLang(l: Lang) {
	lang = l;
}

export function toggleLang() {
	lang = lang === 'sv' ? 'en' : 'sv';
}

const translations = {
	header: {
		badge: { sv: 'Workshop — AI-verktyg', en: 'Workshop — AI Tools' }
	},
	hero: {
		label: { sv: 'Workshop — AI-verktyg', en: 'Workshop — AI Tools' },
		title1: { sv: 'Bygg med', en: 'Build with' },
		description: {
			sv: 'Resurser och verktyg från vår workshop. Allt du behöver för att komma igång med att bygga appar och lösningar med hjälp av AI.',
			en: 'Resources and tools from our workshop. Everything you need to start building apps and solutions with AI.'
		},
		cta: { sv: 'Kom igång', en: 'Get started' }
	},
	agenda: {
		label: { sv: 'Typiskt upplägg', en: 'Typical format' },
		title: { sv: 'Workshop-agenda', en: 'Workshop agenda' },
		description: {
			sv: 'Inspiration, live-demos och hands-on byggande. Du går härifrån med konkreta saker du kan börja göra annorlunda redan nästa vecka.',
			en: 'Inspiration, live demos and hands-on building. You leave with concrete things you can start doing differently next week.'
		},
		block1Title: { sv: 'Välkomna & introduktion', en: 'Welcome & introduction' },
		block1Desc: {
			sv: 'Förväntningar och en snabb överblick av vad AI kan göra idag. Var står vi — och vart är vi på väg?',
			en: 'Expectations and a quick overview of what AI can do today. Where are we — and where are we headed?'
		},
		block2Title: { sv: 'Inspiration & live-demos', en: 'Inspiration & live demos' },
		block2Desc: {
			sv: 'Vi visar hur AI-verktygen fungerar i praktiken. Från idé till fungerande app på minuter — live, utan manus.',
			en: 'We show how AI tools work in practice. From idea to working app in minutes — live, no script.'
		},
		block3Title: { sv: 'Idéworkshop', en: 'Idea workshop' },
		block3Desc: {
			sv: 'Vad vill du bygga? Vi hittar konkreta utmaningar i din vardag som AI kan lösa.',
			en: 'What do you want to build? We brainstorm and identify concrete challenges in your daily work that AI can solve.'
		},
		block4Title: { sv: 'Hands-on: Bygg din lösning', en: 'Hands-on: Build your solution' },
		block4Badge: { sv: 'Huvudpass', en: 'Main session' },
		block4Desc: {
			sv: 'Välj ett verktyg (Lovable, Replit) och börja bygga din idé med stöd av en AI-coach.',
			en: 'Pick a tool (Lovable, Replit) and start building your idea with support from an AI coach.'
		},
		block5Title: { sv: 'Visa & berätta', en: 'Show & tell' },
		block5Desc: {
			sv: 'Deltagarna visar vad de byggt. Vi firar framstegen och inspirerar varandra.',
			en: 'Participants show what they built. We celebrate progress and inspire each other.'
		},
		block6Title: { sv: 'Nästa steg & avslut', en: 'Next steps & wrap-up' },
		block6Desc: {
			sv: 'Konkreta rekommendationer och tillgång till den här sidan med alla resurser och verktyg.',
			en: 'Concrete recommendations and access to this page with all resources and tools.'
		},
		hours: { sv: '2,5 timmar', en: '2.5 hours' },
		participants: { sv: 'Max 15–20 deltagare', en: 'Max 15–20 participants' },
		noTechRequired: { sv: 'Ingen teknisk bakgrund krävs', en: 'No technical background required' }
	},
	about: {
		label: { sv: 'Din workshopledare', en: 'Your workshop leader' },
		bio1: {
			sv: 'AI-Coach och grundare av Daily Wins. 10+ års erfarenhet av AI-teknik och affärsnytta. Hjälper små och medelstora företag att implementera AI utan egen AI-avdelning — från idé till mätbara resultat.',
			en: 'AI Coach and founder of Daily Wins. 10+ years of experience in AI technology and business impact. Helping small and medium-sized businesses implement AI without their own AI department — from idea to measurable results.'
		},
		bio2: {
			sv: 'Anders lägger 12+ timmar om dagen på att bygga AI-lösningar och har hands-on erfarenhet av samtliga verktyg på den här sidan. Workshopsen handlar inte om teori — utan om att bygga på riktigt, tillsammans.',
			en: 'Anders spends 12+ hours a day building AI solutions and has hands-on experience with every tool on this page. The workshops are not about theory — but about building for real, together.'
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
			sv: 'AI svarar inte bara på frågor längre — den bygger hela lösningar. Och det mest anmärkningsvärda: det är inte längre bara utvecklare som bygger dem. MIT Technology Review utsåg det till en av 2026 års genombrottsteknologier.',
			en: 'AI no longer just answers questions — it builds entire solutions. And the most remarkable thing: it\'s no longer just developers who build them. MIT Technology Review named it one of 2026\'s breakthrough technologies.'
		},
		moment: {
			sv: 'Ögonblicket som förändrar allt',
			en: 'The moment that changes everything'
		},
		momentDesc: {
			sv: 'I våra workshops bygger vanliga medarbetare sina egna verktyg med AI — med sina egna problem. Det lyser i ögonen på människor. De går från "jag är inte en teknisk person" till "jag kan bygga lösningar". Det är en identitetsförskjutning — den enda typen av förändring som faktiskt håller.',
			en: 'In our workshops, regular employees build their own tools with AI — solving their own problems. People\'s eyes light up. They go from "I\'m not a technical person" to "I can build solutions." It\'s an identity shift — the only type of change that actually sticks.'
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
	goals: {
		label: { sv: 'Mål', en: 'Goals' },
		title: { sv: 'Det här tar du med dig', en: 'What you take away' },
		description: {
			sv: 'Workshopen handlar inte om att lyssna — utan om att göra. När du går härifrån har du:',
			en: 'This workshop is not about listening — it\'s about doing. When you leave, you will have:'
		},
		goal1Title: { sv: 'Byggt en egen app', en: 'Built your own app' },
		goal1Desc: {
			sv: 'En fungerande prototyp som löser ett verkligt problem i din vardag. Inte en övning — något du faktiskt kan använda.',
			en: 'A working prototype that solves a real problem in your daily work. Not an exercise — something you can actually use.'
		},
		goal2Title: { sv: 'Förstått vad AI kan idag', en: 'Understood what AI can do today' },
		goal2Desc: {
			sv: 'Inte teori, utan hands-on förståelse. Du har sett och upplevt skillnaden mellan att fråga AI och att bygga med AI.',
			en: 'Not theory, but hands-on understanding. You\'ve seen and experienced the difference between asking AI and building with AI.'
		},
		goal3Title: { sv: 'Verktygslådan klar', en: 'Toolbox ready' },
		goal3Desc: {
			sv: 'Du vet vilka verktyg som passar dig, har konton redo och vet exakt hur du fortsätter på egen hand.',
			en: 'You know which tools suit you, have accounts ready, and know exactly how to continue on your own.'
		},
		goal4Title: { sv: 'Ny bild av dig själv', en: 'New self-image' },
		goal4Desc: {
			sv: 'Du har gått från "jag är inte en teknisk person" till "jag kan bygga lösningar". Det är den förändring som håller.',
			en: 'You\'ve gone from "I\'m not a technical person" to "I can build solutions." That\'s the change that sticks.'
		}
	},
	toolsIntro: {
		title: { sv: 'Nu kör vi!', en: "Let's go!" },
		description: {
			sv: 'Här är de AI-verktyg vi använder och rekommenderar. Välj utifrån din erfarenhetsnivå och vad du vill bygga.',
			en: 'Here are the AI tools we use and recommend. Choose based on your experience level and what you want to build.'
		}
	},
	lovable: {
		recommended: { sv: 'Rekommenderas', en: 'Recommended' },
		description: {
			sv: 'Det snabbaste sättet att gå från idé till färdig app. Beskriv vad du vill ha — Lovable bygger en komplett applikation med gränssnitt, databas och inloggning. Ingen kod behövs. Det här är verktyget vi rekommenderar att de flesta börjar med.',
			en: 'The fastest way to go from idea to finished app. Describe what you want — Lovable builds a complete application with UI, database and authentication. No code needed. This is the tool we recommend most people start with.'
		},
		tag1: { sv: 'Text-till-app', en: 'Text-to-app' },
		tag2: { sv: 'Supabase-integration', en: 'Supabase integration' },
		tag3: { sv: 'Deploy med ett klick', en: 'One-click deploy' },
		stepsTitle: { sv: 'Steg för steg', en: 'Step by step' },
		step1: {
			sv: 'Skapa konto på <a href="https://lovable.dev/invite/D99APSK" target="_blank" rel="noopener noreferrer" class="text-blue-accent underline">lovable.dev</a> — Google, GitHub eller e-post fungerar',
			en: 'Create an account at <a href="https://lovable.dev/invite/D99APSK" target="_blank" rel="noopener noreferrer" class="text-blue-accent underline">lovable.dev</a> — Google, GitHub or email works'
		},
		step2: {
			sv: 'Beskriv din app i chattrutan (se exempelpromptar nedan)',
			en: 'Describe your app in the chat box (see example prompts below)'
		},
		step3: {
			sv: 'Vänta medan Lovable bygger — du ser appen växa fram i realtid till höger',
			en: 'Wait while Lovable builds — you see the app growing in real-time on the right'
		},
		step4: {
			sv: 'Chatta vidare för att ändra: "Gör knapparna blå" eller "Lägg till en sida för statistik"',
			en: 'Keep chatting to make changes: "Make the buttons blue" or "Add a page for statistics"'
		},
		examplesTitle: { sv: 'Prova dessa', en: 'Try these' },
		example1: {
			sv: '"Skapa en tidrapport-app där man kan logga timmar per projekt. Varje rad har datum, projekt, antal timmar och en kommentar. Visa en veckosammanfattning med totalt antal timmar."',
			en: '"Create a time tracking app where you can log hours per project. Each row has date, project, hours and a comment. Show a weekly summary with total hours."'
		},
		example2: {
			sv: '"Bygg en enkel CRM där jag kan lägga till företag och kontaktpersoner. Varje företag har namn, org.nr och en lista med kontakter. Jag vill kunna söka och filtrera."',
			en: '"Build a simple CRM where I can add companies and contacts. Each company has name, org number and a list of contacts. I want to search and filter."'
		},
		example3: {
			sv: '"Gör en receptsamling där man kan lägga till recept med ingredienser och instruktioner. Recepten ska visas som kort med bild-placeholder. Lägg till sökfunktion."',
			en: '"Create a recipe collection where you can add recipes with ingredients and instructions. Recipes should be displayed as cards with image placeholders. Add search."'
		},
		mistakesTitle: { sv: 'Vanliga misstag', en: 'Common mistakes' },
		mistake1Label: { sv: 'För vag prompt:', en: 'Too vague prompt:' },
		mistake1: {
			sv: '"Bygg en app" ger dåligt resultat. Beskriv specifikt vilka sidor, fält och funktioner du vill ha.',
			en: '"Build an app" gives poor results. Describe specifically which pages, fields and features you want.'
		},
		mistake2Label: { sv: 'Allt på en gång:', en: 'Everything at once:' },
		mistake2: {
			sv: 'Försök inte beskriva hela appen i en enda prompt. Börja med grundfunktionen, sedan bygg ut.',
			en: "Don't try to describe the whole app in one prompt. Start with the core feature, then expand."
		},
		mistake3Label: { sv: 'Glömmer att spara:', en: 'Forgetting to save:' },
		mistake3: {
			sv: 'Klicka "Publish" regelbundet — det är din save-knapp. Om något går fel kan du gå tillbaka.',
			en: 'Click "Publish" regularly — it\'s your save button. If something goes wrong you can go back.'
		},
		level: { sv: 'Nybörjarvänlig — ingen kod behövs', en: 'Beginner-friendly — no code needed' },
		price: { sv: 'Gratis att testa, sedan från $20/mån', en: 'Free to try, then from $20/mo' },
		cta: { sv: 'Testa gratis', en: 'Try free' },
		referral: {
			sv: 'Använd vår länk — du får 10 extra credits vid registrering.',
			en: 'Use our link — you get 10 extra credits when signing up.'
		}
	},
	replit: {
		recommended: { sv: 'Rekommenderas', en: 'Recommended' },
		description: {
			sv: 'Det bästa valet när du behöver mer än en enkel webbsida. Replit Agent kan bygga appar med databaser, API:er, inloggning och betalningar — och hanterar hela processen själv. Den planerar, kodar, testar och publicerar. Du beskriver, agenten levererar.',
			en: 'The best choice when you need more than a simple website. Replit Agent can build apps with databases, APIs, authentication and payments — handling the entire process itself. It plans, codes, tests and publishes. You describe, the agent delivers.'
		},
		tag1: { sv: 'AI-agent bygger hela appen', en: 'AI agent builds the entire app' },
		tag2: { sv: 'Databas + API inkluderat', en: 'Database + API included' },
		tag3: { sv: 'Automatisk hosting', en: 'Automatic hosting' },
		stepsTitle: { sv: 'Steg för steg', en: 'Step by step' },
		step1: {
			sv: 'Skapa konto på <a href="https://replit.com/refer/andersbratland1" target="_blank" rel="noopener noreferrer" class="text-blue-accent underline">replit.com</a> (gratis)',
			en: 'Create an account at <a href="https://replit.com/refer/andersbratland1" target="_blank" rel="noopener noreferrer" class="text-blue-accent underline">replit.com</a> (free)'
		},
		step2: {
			sv: 'Klicka "Create Repl" → "Replit Agent" och beskriv ditt projekt',
			en: 'Click "Create Repl" → "Replit Agent" and describe your project'
		},
		step3: {
			sv: 'Agenten visar en plan — godkänn eller justera innan den börjar koda',
			en: 'The agent shows a plan — approve or adjust before it starts coding'
		},
		step4: {
			sv: 'Appen publiceras automatiskt på en .replit.app-URL',
			en: 'The app is published automatically on a .replit.app URL'
		},
		bestForTitle: { sv: 'Replit Agent är bäst för...', en: 'Replit Agent is best for...' },
		bestFor1: {
			sv: 'Appar som behöver spara data (CRM, bokningssystem, inventariehantering)',
			en: 'Apps that need to save data (CRM, booking system, inventory management)'
		},
		bestFor2: {
			sv: 'Projekt med inloggning eller användarroller',
			en: 'Projects with authentication or user roles'
		},
		bestFor3: {
			sv: 'Verktyg som ska kopplas till externa API:er',
			en: 'Tools that need to connect to external APIs'
		},
		bestFor4: {
			sv: 'Mobilappar — Replit kan generera native-liknande appar direkt',
			en: 'Mobile apps — Replit can generate native-like apps directly'
		},
		bestFor5: {
			sv: 'Allt som kräver backend-logik — inte bara en snygg sida',
			en: 'Anything that needs backend logic — not just a pretty page'
		},
		importTitle: { sv: 'Tips: importera från Lovable', en: 'Tip: import from Lovable' },
		importDesc: {
			sv: 'Har du redan byggt något i Lovable? Du kan importera ditt Lovable-projekt direkt till Replit och fortsätta bygga där. Koppla ditt GitHub-repo (som Lovable skapar automatiskt) när du startar ett nytt Repl — Replit Agent tar vid där Lovable slutade.',
			en: 'Already built something in Lovable? You can import your Lovable project directly into Replit and keep building there. Connect your GitHub repo (which Lovable creates automatically) when starting a new Repl — Replit Agent picks up where Lovable left off.'
		},
		level: { sv: 'Nybörjarvänlig', en: 'Beginner-friendly' },
		price: { sv: 'Gratis plan, sedan från $25/mån', en: 'Free plan, then from $25/mo' },
		cta: { sv: 'Testa gratis', en: 'Try free' },
		referral: {
			sv: 'Använd vår länk — vi får båda $10 i credits när du uppgraderar.',
			en: 'Use our link — we both get $10 in credits when you upgrade.'
		}
	},
	cursor: {
		description: {
			sv: 'En VS Code-editor med inbyggd AI. Cursor förstår hela ditt projekt och kan redigera flera filer samtidigt. Mest relevant om du redan kodar och vill bli snabbare — inte ett nybörjarverktyg.',
			en: 'A VS Code editor with built-in AI. Cursor understands your entire project and can edit multiple files simultaneously. Most relevant if you already code and want to be faster — not a beginner tool.'
		},
		quickstartTitle: { sv: 'Snabbstart', en: 'Quick start' },
		step1: {
			sv: 'Ladda ner från cursor.com — importerar dina VS Code-inställningar',
			en: 'Download from cursor.com — imports your VS Code settings'
		},
		step2Chat: {
			sv: 'öppnar chatten — ställ frågor om din kodbas',
			en: 'opens the chat — ask questions about your codebase'
		},
		step3Composer: {
			sv: 'öppnar Composer — AI:n redigerar flera filer åt dig',
			en: 'opens Composer — AI edits multiple files for you'
		},
		bestForTitle: { sv: 'Bäst för', en: 'Best for' },
		bestFor1: {
			sv: 'Utvecklare som redan använder VS Code och vill ha AI integrerad i sitt befintliga arbetsflöde',
			en: 'Developers already using VS Code who want AI integrated into their existing workflow'
		},
		bestFor2: {
			sv: 'Refaktorering av befintlig kod — markera kod, tryck',
			en: 'Refactoring existing code — select code, press'
		},
		bestFor2Suffix: {
			sv: 'och beskriv ändringen',
			en: 'and describe the change'
		},
		bestFor3: {
			sv: 'Buggfixar — klistra in ett felmeddelande i chatten och Cursor hittar och fixar problemet',
			en: 'Bug fixes — paste an error message in the chat and Cursor finds and fixes the problem'
		},
		level: { sv: 'Kräver kodvana', en: 'Requires coding experience' },
		price: { sv: 'Gratis plan, Pro från $20/mån', en: 'Free plan, Pro from $20/mo' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	claudeCode: {
		description: {
			sv: 'Det mest kraftfulla verktyget i listan — men också det mest avancerade. Claude Code körs i terminalen och kan självständigt läsa, skriva och köra kod i hela ditt projekt. Det här är vad vi på Daily Wins använder mest.',
			en: 'The most powerful tool on the list — but also the most advanced. Claude Code runs in the terminal and can independently read, write and run code across your entire project. This is what we at Daily Wins use the most.'
		},
		quickstartTitle: { sv: 'Snabbstart', en: 'Quick start' },
		step1: { sv: 'Installera:', en: 'Install:' },
		step2: {
			sv: 'Stå i ditt projekt och skriv',
			en: 'Navigate to your project and type'
		},
		step3: {
			sv: 'Beskriv vad du vill göra — Claude läser koden, föreslår ändringar, och committar åt dig',
			en: 'Describe what you want to do — Claude reads the code, suggests changes, and commits for you'
		},
		uniqueTitle: { sv: 'Vad gör det unikt?', en: 'What makes it unique?' },
		unique1: {
			sv: 'Kan navigera, läsa och skriva i hela ditt projekt — inte bara en fil i taget',
			en: 'Can navigate, read and write across your entire project — not just one file at a time'
		},
		unique2: {
			sv: 'Kör kommandon direkt i terminalen: tester, Git, databasmigrering',
			en: 'Runs commands directly in the terminal: tests, Git, database migrations'
		},
		unique3: {
			sv: 'Stöd för MCP — koppla Claude till externa tjänster (Fortnox, Slack, databaser)',
			en: 'MCP support — connect Claude to external services (Fortnox, Slack, databases)'
		},
		unique4: {
			sv: 'Den här workshopsidan byggdes helt med Claude Code',
			en: 'This workshop page was built entirely with Claude Code'
		},
		level: { sv: 'Avancerad — kräver terminal + kodvana', en: 'Advanced — requires terminal + coding experience' },
		price: { sv: 'Ingår i Claude Pro ($20/mån)', en: 'Included in Claude Pro ($20/mo)' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	copilot: {
		description: {
			sv: 'AI-autocomplete för din editor. Copilot föreslår kod medan du skriver — tryck Tab för att acceptera. Bäst som komplement till Cursor eller VS Code, inte ett fristående verktyg.',
			en: 'AI autocomplete for your editor. Copilot suggests code as you type — press Tab to accept. Best as a complement to Cursor or VS Code, not a standalone tool.'
		},
		quickstartTitle: { sv: 'Snabbstart', en: 'Quick start' },
		step1: {
			sv: 'Installera tillägget "GitHub Copilot" i VS Code',
			en: 'Install the "GitHub Copilot" extension in VS Code'
		},
		step2: {
			sv: 'Aktivera under github.com/settings/copilot',
			en: 'Activate at github.com/settings/copilot'
		},
		step3: {
			sv: 'Börja skriva kod — förslag dyker upp automatiskt i grått, tryck',
			en: 'Start writing code — suggestions appear automatically in gray, press'
		},
		step3Suffix: {
			sv: 'för att acceptera',
			en: 'to accept'
		},
		tipsTitle: { sv: 'Tips: kommentarer som prompts', en: 'Tip: comments as prompts' },
		tipsDesc: {
			sv: 'Skriv en kommentar som',
			en: 'Write a comment like'
		},
		tipsComment: {
			sv: '// räkna ut moms på beloppet',
			en: '// calculate VAT on the amount'
		},
		tipsSuffix: {
			sv: 'och Copilot genererar funktionen automatiskt. Ju mer beskrivande kommentaren är, desto bättre kod får du.',
			en: 'and Copilot generates the function automatically. The more descriptive the comment, the better code you get.'
		},
		level: { sv: 'Kräver editor-vana', en: 'Requires editor experience' },
		price: { sv: 'Gratis för studenter, sedan från $10/mån', en: 'Free for students, then from $10/mo' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	dbIntro: {
		title: { sv: 'Databaser & hosting', en: 'Databases & hosting' },
		description: {
			sv: 'Gratis tjänster för att lagra data och publicera dina appar. Alla har generösa gratisnivåer som räcker långt.',
			en: 'Free services for storing data and publishing your apps. All have generous free tiers that go a long way.'
		}
	},
	supabase: {
		description: {
			sv: 'Databas, inloggning och fillagring — färdigt att använda på minuter. Supabase är standardvalet i Lovable: klicka "Connect to Supabase" så kopplas allt automatiskt. Registrera dig på supabase.com med GitHub — gratisnivån räcker långt (500 MB, 50K användare).',
			en: 'Database, authentication and file storage — ready to use in minutes. Supabase is the default choice in Lovable: click "Connect to Supabase" and everything connects automatically. Sign up at supabase.com with GitHub — the free tier goes a long way (500 MB, 50K users).'
		},
		stepsTitle: { sv: 'Steg för steg', en: 'Step by step' },
		step1: {
			sv: 'Skapa konto på supabase.com med GitHub',
			en: 'Create an account at supabase.com with GitHub'
		},
		step2: {
			sv: 'Klicka "New Project" — välj region (EU/Stockholm) och sätt ett lösenord',
			en: 'Click "New Project" — choose region (EU/Stockholm) and set a password'
		},
		step3: {
			sv: 'I Lovable: klicka "Connect to Supabase" i sidopanelen — allt kopplas automatiskt',
			en: 'In Lovable: click "Connect to Supabase" in the sidebar — everything connects automatically'
		},
		tag1: { sv: 'PostgreSQL-databas', en: 'PostgreSQL database' },
		tag2: { sv: 'Inloggning & roller', en: 'Auth & roles' },
		tag3: { sv: 'Fillagring', en: 'File storage' },
		tag4: { sv: 'Realtids-uppdateringar', en: 'Real-time updates' },
		level: { sv: 'Nybörjarvänlig', en: 'Beginner-friendly' },
		price: { sv: 'Generös gratis-plan', en: 'Generous free plan' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	turso: {
		description: {
			sv: 'Lättviktig SQLite-databas i molnet. Snabb, enkel, och med en generös gratisnivå (500 databaser, 9 GB). Bra alternativ till Supabase om du vill ha en enklare databas utan allt runt omkring.',
			en: 'Lightweight SQLite database in the cloud. Fast, simple, with a generous free tier (500 databases, 9 GB). Good alternative to Supabase if you want a simpler database without all the extras.'
		},
		compareTitle: {
			sv: 'Supabase vs Turso — vilken ska jag välja?',
			en: 'Supabase vs Turso — which should I choose?'
		},
		compareDesc: {
			sv: '<strong>Supabase</strong> om du bygger med Lovable eller vill ha inloggning, fillagring och dashboard på köpet. <strong>Turso</strong> om du bara behöver en snabb, enkel databas och vill ha full kontroll. Turso är lättare att komma igång med via Replit.',
			en: '<strong>Supabase</strong> if you\'re building with Lovable or want auth, file storage and dashboard included. <strong>Turso</strong> if you just need a fast, simple database and want full control. Turso is easier to get started with via Replit.'
		},
		level: { sv: 'Kräver SQL-grundkunskap', en: 'Requires basic SQL knowledge' },
		price: { sv: 'Generös gratis-plan', en: 'Generous free plan' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	vercel: {
		description: {
			sv: 'Publicera din app till webben genom att koppla ditt GitHub-repo. Varje gång du pushar kod deployas en ny version automatiskt. Gratis, snabbt och kräver ingen konfiguration.',
			en: 'Publish your app to the web by connecting your GitHub repo. Every time you push code, a new version is deployed automatically. Free, fast and requires no configuration.'
		},
		stepsTitle: { sv: 'Steg för steg', en: 'Step by step' },
		step1: {
			sv: 'Registrera dig på vercel.com med GitHub',
			en: 'Sign up at vercel.com with GitHub'
		},
		step2: {
			sv: 'Klicka "Add New Project" och välj ditt GitHub-repo',
			en: 'Click "Add New Project" and select your GitHub repo'
		},
		step3: {
			sv: 'Vercel identifierar ramverket automatiskt — klicka "Deploy"',
			en: 'Vercel identifies the framework automatically — click "Deploy"'
		},
		step4: {
			sv: 'Din app är live på en .vercel.app-URL. Varje push deployas automatiskt',
			en: 'Your app is live on a .vercel.app URL. Every push deploys automatically'
		},
		level: { sv: 'Git är allt du behöver', en: 'Git is all you need' },
		price: { sv: 'Gratis — obegränsade deploys', en: 'Free — unlimited deploys' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	netlify: {
		description: {
			sv: 'Alternativ till Vercel. Samma koncept — koppla Git-repo, automatisk deploy. Netlify har dessutom inbyggda formulär och dra-och-släpp-deploy.',
			en: 'Alternative to Vercel. Same concept — connect Git repo, automatic deploy. Netlify also has built-in forms and drag-and-drop deploy.'
		},
		quickstartTitle: { sv: 'Snabbstart (utan Git)', en: 'Quick start (without Git)' },
		step1: {
			sv: 'Registrera dig på netlify.com',
			en: 'Sign up at netlify.com'
		},
		step2: {
			sv: 'Dra din projektmapp direkt till Netlify-dashboarden',
			en: 'Drag your project folder directly to the Netlify dashboard'
		},
		step3: {
			sv: 'Sidan publiceras direkt — ingen Git, ingen konfiguration',
			en: 'The site is published immediately — no Git, no configuration'
		},
		note: {
			sv: 'Perfekt för snabba prototyper eller statiska sidor. Vill du ha automatisk deploy vid kodändringar — koppla ett GitHub-repo istället.',
			en: 'Perfect for quick prototypes or static sites. Want automatic deploy on code changes — connect a GitHub repo instead.'
		},
		level: { sv: 'Nybörjarvänlig', en: 'Beginner-friendly' },
		price: { sv: 'Gratis — 300 build-minuter/mån', en: 'Free — 300 build minutes/mo' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	aiIntro: {
		title: { sv: 'AI & integrationer', en: 'AI & integrations' },
		description: {
			sv: 'Kraftfulla tjänster för att koppla ihop AI-modeller, appar och affärssystem. Ta dina projekt till nästa nivå.',
			en: 'Powerful services for connecting AI models, apps and business systems. Take your projects to the next level.'
		}
	},
	openrouter: {
		description: {
			sv: 'Tillgång till hundratals AI-modeller (Claude, GPT-4, Gemini, Llama m.fl.) via ett enda API. Byt modell utan att ändra kod. OpenRouter stödjer samma format som OpenAI — byt bara URL och API-nyckel.',
			en: 'Access to hundreds of AI models (Claude, GPT-4, Gemini, Llama etc.) via a single API. Switch models without changing code. OpenRouter supports the same format as OpenAI — just change the URL and API key.'
		},
		stepsTitle: { sv: 'Steg för steg', en: 'Step by step' },
		step1: { sv: 'Skapa konto på openrouter.ai', en: 'Create an account at openrouter.ai' },
		step2: { sv: 'Gå till "Keys" och skapa en API-nyckel', en: 'Go to "Keys" and create an API key' },
		step3: {
			sv: 'Ladda krediter — $5 räcker långt för att testa',
			en: 'Load credits — $5 goes a long way for testing'
		},
		step4: {
			sv: 'Använd nyckeln i din app — fungerar med alla bibliotek som stödjer OpenAI-formatet',
			en: 'Use the key in your app — works with any library supporting the OpenAI format'
		},
		whyTitle: { sv: 'Varför OpenRouter?', en: 'Why OpenRouter?' },
		why1: {
			sv: 'En API-nyckel för alla modeller — testa Claude, GPT-4 och Gemini utan separata konton',
			en: 'One API key for all models — test Claude, GPT-4 and Gemini without separate accounts'
		},
		why2: {
			sv: 'Automatisk fallback — om en modell är nere, routas du till en annan',
			en: 'Automatic fallback — if a model is down, you are routed to another'
		},
		why3: {
			sv: 'Prisöversikt — jämför kostnad per modell direkt i dashboarden',
			en: 'Price overview — compare cost per model directly in the dashboard'
		},
		level: { sv: 'Kräver API-vana', en: 'Requires API experience' },
		price: { sv: 'Betala per token', en: 'Pay per token' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	composio: {
		description: {
			sv: 'Koppla ihop AI-agenter med 250+ tjänster — Gmail, Slack, Google Sheets, GitHub m.fl. Composio hanterar OAuth åt dig. Fungerar direkt med Claude Code via MCP — ge din AI-agent tillgång till e-post, kalender och andra verktyg.',
			en: 'Connect AI agents with 250+ services — Gmail, Slack, Google Sheets, GitHub etc. Composio handles OAuth for you. Works directly with Claude Code via MCP — give your AI agent access to email, calendar and other tools.'
		},
		stepsTitle: { sv: 'Steg för steg', en: 'Step by step' },
		step1: { sv: 'Skapa konto på composio.dev', en: 'Create an account at composio.dev' },
		step2: {
			sv: 'Välj de tjänster du vill koppla (Gmail, Google Calendar, Slack m.fl.)',
			en: 'Choose the services you want to connect (Gmail, Google Calendar, Slack etc.)'
		},
		step3: {
			sv: 'Logga in med ditt konto för respektive tjänst — Composio sparar tokens säkert',
			en: 'Log in with your account for each service — Composio stores tokens securely'
		},
		step4: {
			sv: 'Lägg till som MCP-server i Claude Code — AI:n kan nu läsa och skriva till dina tjänster',
			en: 'Add as MCP server in Claude Code — AI can now read and write to your services'
		},
		examplesTitle: { sv: 'Exempel: vad du kan be Claude göra', en: 'Examples: what you can ask Claude to do' },
		example1: {
			sv: '"Läs mina senaste 5 mail och sammanfatta dem"',
			en: '"Read my latest 5 emails and summarize them"'
		},
		example2: {
			sv: '"Skapa ett möte i Google Calendar med Kalle kl 14 imorgon"',
			en: '"Create a meeting in Google Calendar with Kalle at 2 PM tomorrow"'
		},
		example3: {
			sv: '"Lägg till en rad i mitt Google Sheet med dagens försäljningssiffra"',
			en: '"Add a row to my Google Sheet with today\'s sales figure"'
		},
		level: { sv: 'Kräver teknisk vana', en: 'Requires technical experience' },
		price: { sv: 'Gratis plan med 1000 anrop/mån', en: 'Free plan with 1000 calls/mo' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	fortnox: {
		subtitle: { sv: 'Bokföring via AI (av Daily Wins)', en: 'Accounting via AI (by Daily Wins)' },
		description: {
			sv: 'Vår egen MCP-server som kopplar Claude direkt till Fortnox. Be Claude "Skapa en faktura till Kund AB på 10 000 kr" — och det händer. Fakturering, kundhantering, bokföring och löner, allt via naturligt språk.',
			en: 'Our own MCP server that connects Claude directly to Fortnox. Ask Claude "Create an invoice for Client AB for 10,000 SEK" — and it happens. Invoicing, customer management, accounting and payroll, all via natural language.'
		},
		stepsTitle: { sv: 'Steg för steg', en: 'Step by step' },
		step1: {
			sv: 'Logga in på <a href="https://portal-daily-wins.vercel.app" target="_blank" rel="noopener noreferrer" class="text-blue-accent underline">portal-daily-wins.vercel.app</a> med ditt Fortnox-konto',
			en: 'Log in at <a href="https://portal-daily-wins.vercel.app" target="_blank" rel="noopener noreferrer" class="text-blue-accent underline">portal-daily-wins.vercel.app</a> with your Fortnox account'
		},
		step2: {
			sv: 'Godkänn anslutningen — klart, ditt Fortnox är kopplat',
			en: 'Approve the connection — done, your Fortnox is connected'
		},
		step3: {
			sv: 'Lägg till MCP-servern i Claude Desktop eller Claude Code',
			en: 'Add the MCP server to Claude Desktop or Claude Code'
		},
		tryWith: {
			sv: 'Testa med: "Visa mina senaste fakturor" eller "Skapa en kund med namn Test AB"',
			en: 'Try with: "Show my latest invoices" or "Create a customer named Test AB"'
		},
		level: {
			sv: 'Nybörjarvänlig — om du kan Fortnox kan du detta',
			en: 'Beginner-friendly — if you know Fortnox you can do this'
		},
		price: { sv: 'Gratis för Daily Wins-kunder', en: 'Free for Daily Wins customers' },
		cta: { sv: 'Besök', en: 'Visit' }
	},
	tips: {
		title: { sv: 'Tips för att lyckas', en: 'Tips for success' },
		tip1Title: { sv: 'Börja med en enkel idé', en: 'Start with a simple idea' },
		tip1Desc: {
			sv: 'Välj ett litet problem att lösa — en tidrapport, en kalkylator, en enkel webbsida. Undvik att tänka för stort i början.',
			en: 'Pick a small problem to solve — a time tracker, a calculator, a simple website. Avoid thinking too big at the start.'
		},
		tip2Title: { sv: 'Var specifik i dina prompts', en: 'Be specific in your prompts' },
		tip2Desc: {
			sv: 'Istället för "bygg en app" — beskriv exakt vad appen ska göra, vilka fält som behövs, och hur den ska se ut.',
			en: 'Instead of "build an app" — describe exactly what the app should do, which fields are needed, and how it should look.'
		},
		tip3Title: { sv: 'Bygg i små steg', en: 'Build in small steps' },
		tip3Desc: {
			sv: 'Bygg en funktion i taget. Testa. Justera. Gå vidare. Samma princip som i traditionell utveckling — fast 10x snabbare.',
			en: 'Build one feature at a time. Test. Adjust. Move on. Same principle as traditional development — but 10x faster.'
		},
		tip4Title: { sv: 'Spara och versionshantera', en: 'Save and version control' },
		tip4Desc: {
			sv: 'Använd Git eller verktygets inbyggda versionshantering. Det är lätt att råka skriva över något som fungerade.',
			en: "Use Git or the tool's built-in version control. It's easy to accidentally overwrite something that worked."
		}
	},
	qr: {
		title: { sv: 'Spara den här sidan', en: 'Save this page' },
		description: {
			sv: 'Skanna QR-koden med din telefon för att spara länken. Alla resurser och verktyg samlade på ett ställe.',
			en: 'Scan the QR code with your phone to save the link. All resources and tools in one place.'
		},
		cta: { sv: 'BESÖK DAILYWINS.SE', en: 'VISIT DAILYWINS.SE' }
	},
	footer: {
		tagline: { sv: 'Öka vinsten med AI', en: 'Accelerate profit with AI' },
		lecture: { sv: 'Kontakt', en: 'Contact' },
		address: { sv: 'Adress', en: 'Address' }
	}
} as const;

type Translations = typeof translations;
type TranslationValue = { sv: string; en: string };

function resolve(obj: Record<string, TranslationValue | Record<string, TranslationValue>>): Record<string, string | Record<string, string>> {
	const result: Record<string, string | Record<string, string>> = {};
	for (const [key, value] of Object.entries(obj)) {
		if ('sv' in value && 'en' in value) {
			result[key] = (value as TranslationValue)[lang];
		}
	}
	return result;
}

export function t<K extends keyof Translations>(section: K) {
	type Section = Translations[K];
	const result = {} as { [P in keyof Section]: string };
	const sectionData = translations[section];
	for (const key in sectionData) {
		const entry = sectionData[key] as TranslationValue;
		(result as Record<string, string>)[key] = entry[lang];
	}
	return result;
}
