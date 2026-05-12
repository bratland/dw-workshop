import type { Lang, WorkshopTranslations } from './workshops/types';
import { saljTranslations } from './workshops/_content/salj';

export type { Lang };

let lang = $state<Lang>('sv');
let translations = $state<WorkshopTranslations>(saljTranslations);

export function getLang(): Lang {
	return lang;
}

export function setLang(l: Lang) {
	lang = l;
}

export function toggleLang() {
	lang = lang === 'sv' ? 'en' : 'sv';
}

export function setTranslations(next: WorkshopTranslations) {
	translations = next;
}

type TranslationValue = { sv: string; en: string };

// Hämtar en sektion ur aktiv workshop. Saknar sektionen returneras en tom record
// så att t.ex. en bygg-variant utan `why`-sektion inte kraschar mallen.
export function t<K extends string>(section: K): Record<string, string> {
	const sectionData = (translations as Record<string, Record<string, TranslationValue>>)[section];
	if (!sectionData) return {};
	const result: Record<string, string> = {};
	for (const key in sectionData) {
		const entry = sectionData[key];
		result[key] = entry[lang];
	}
	return result;
}
