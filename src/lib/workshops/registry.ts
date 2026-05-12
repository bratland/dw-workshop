import type { WorkshopConfig, WorkshopSlug } from './types';
import { saljTranslations } from './_content/salj';
import { ekonomiTranslations } from './_content/ekonomi';
import { byggTranslations } from './_content/bygg';

// Per-slug konfiguration. Lägg till en ny workshop genom att:
//   1. Skapa _content/<slug>.ts som spreadar saljTranslations och skriver över
//      hero/agenda/badge/etc.
//   2. Lägga in posten nedan med fallbackMeta så sidan kan rendera även om
//      dw-event är otillgänglig.
export const workshops: Record<WorkshopSlug, WorkshopConfig> = {
	ekonomi: {
		slug: 'ekonomi',
		eventSlug: 'ai-for-ekonomi',
		translations: ekonomiTranslations,
		fallbackMeta: {
			title: 'AI för Ekonomi',
			startsAt: '2026-05-12T17:00:00+02:00',
			endsAt: '2026-05-12T19:30:00+02:00',
			location: 'Daily Wins, Heurlins Plats 1A, Göteborg',
			registered: 20,
			capacity: 20,
			status: 'full'
		}
	},
	salj: {
		slug: 'salj',
		eventSlug: 'ai-for-salj',
		translations: saljTranslations,
		fallbackMeta: {
			title: 'AI för Sälj',
			startsAt: '2026-04-09T17:00:00+02:00',
			endsAt: '2026-04-09T19:30:00+02:00',
			location: 'Daily Wins, Heurlins Plats 1A, Göteborg',
			registered: 0,
			capacity: 25,
			status: 'closed'
		}
	},
	bygg: {
		slug: 'bygg',
		eventSlug: 'ai-aw-for-bygg-iii',
		translations: byggTranslations,
		fallbackMeta: {
			title: 'AI AW för Bygg III',
			startsAt: '2026-05-20T17:00:00+02:00',
			endsAt: '2026-05-20T19:30:00+02:00',
			location: 'Daily Wins, Heurlins Plats 1A, Göteborg',
			registered: 5,
			capacity: 25,
			status: 'open'
		}
	}
};

export function getWorkshop(slug: string): WorkshopConfig | null {
	return slug in workshops ? workshops[slug as WorkshopSlug] : null;
}

// Picking-logik för / redirect: dagens event (inom ±18 h), annars närmaste
// framtida, annars senaste passerade.
export function pickCurrentSlug(now: Date = new Date()): WorkshopSlug {
	const all = Object.values(workshops);
	const eighteenHours = 18 * 60 * 60 * 1000;

	for (const w of all) {
		const starts = new Date(w.fallbackMeta.startsAt).getTime();
		if (Math.abs(starts - now.getTime()) < eighteenHours) return w.slug;
	}

	const future = all
		.filter((w) => new Date(w.fallbackMeta.startsAt).getTime() > now.getTime())
		.sort(
			(a, b) =>
				new Date(a.fallbackMeta.startsAt).getTime() -
				new Date(b.fallbackMeta.startsAt).getTime()
		);
	if (future.length) return future[0].slug;

	const past = [...all].sort(
		(a, b) =>
			new Date(b.fallbackMeta.startsAt).getTime() -
			new Date(a.fallbackMeta.startsAt).getTime()
	);
	return past[0]?.slug ?? 'salj';
}
