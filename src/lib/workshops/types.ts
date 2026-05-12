export type Lang = 'sv' | 'en';
export type LocalizedString = { sv: string; en: string };

export type WorkshopSlug = 'ekonomi' | 'salj' | 'bygg';

// Shape of translation data per workshop. Keep flexible so each workshop
// can carry its own keys; +page.svelte reads via t('<section>').<key>.
export type WorkshopTranslations = Record<
	string,
	Record<string, LocalizedString>
>;

export type WorkshopMeta = {
	title: string;
	startsAt: string;        // ISO timestamp
	endsAt?: string;
	location: string;
	registered: number;
	capacity: number;
	status: 'open' | 'waitlist' | 'full' | 'closed';
};

export type WorkshopConfig = {
	slug: WorkshopSlug;
	eventSlug: string;             // dw-event slug (for live metadata)
	translations: WorkshopTranslations;
	fallbackMeta: WorkshopMeta;    // used if dw-event fetch fails
};
