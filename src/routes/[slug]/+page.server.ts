import { error } from '@sveltejs/kit';
import { getWorkshop } from '$lib/workshops/registry';
import type { PageServerLoad } from './$types';

export const prerender = false;

export type DiscountTier = 0 | 10 | 30;

// Workshopdag = 30 %. Resten av samma kalendermånad efter workshopen = 10 %.
// Inget annars. Generaliserar till alla workshops via deras eventDate.
function computeDiscountTier(eventDate: Date, today: Date): DiscountTier {
	const sameYear = eventDate.getFullYear() === today.getFullYear();
	const sameMonth = sameYear && eventDate.getMonth() === today.getMonth();
	const sameDay = sameMonth && eventDate.getDate() === today.getDate();

	if (sameDay) return 30;
	if (sameMonth && today.getTime() > eventDate.getTime()) return 10;
	return 0;
}

export const load: PageServerLoad = ({ params }) => {
	const config = getWorkshop(params.slug);
	if (!config) {
		throw error(404, `Okänd workshop: ${params.slug}`);
	}

	const eventDate = new Date(config.fallbackMeta.startsAt);
	const discountTier = computeDiscountTier(eventDate, new Date());

	return {
		config,
		meta: config.fallbackMeta,
		discountTier
	};
};
