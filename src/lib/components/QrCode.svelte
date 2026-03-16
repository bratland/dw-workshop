<script lang="ts">
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';

	interface Props {
		url: string;
		size?: number;
	}

	let { url, size = 200 }: Props = $props();
	let canvas: HTMLCanvasElement;

	onMount(async () => {
		await QRCode.toCanvas(canvas, url, {
			width: size,
			margin: 0,
			color: {
				dark: '#0e122f',
				light: '#ffffff'
			}
		});
	});
</script>

<canvas bind:this={canvas} width={size} height={size} class="block"></canvas>
