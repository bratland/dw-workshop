import { error } from '@sveltejs/kit';
import { getWorkshop } from '$lib/workshops/registry';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = ({ params }) => {
	const config = getWorkshop(params.slug);
	if (!config) {
		throw error(404, `Okänd workshop: ${params.slug}`);
	}

	return {
		config,
		meta: config.fallbackMeta
	};
};
