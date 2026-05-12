import { redirect } from '@sveltejs/kit';
import { pickCurrentSlug } from '$lib/workshops/registry';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = () => {
	throw redirect(307, `/${pickCurrentSlug()}`);
};
