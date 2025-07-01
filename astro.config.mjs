// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/public/favicon.ico',
			title: 'ScriptBot',
			logo: {
				src: './src/assets/Botrading.png',
			},
			social: [{
				icon: 'discord',
				label: 'discord',
				href: 'https://discord.botrading.net'
			}],
			sidebar: [
				{
					label: 'Indicators',
					autogenerate: { directory: 'indicators' },
				},
				{
					label: 'Placeholders',
					autogenerate: { directory: 'placeholders' },
				},
				{
					label: 'Moldable Vars',
					autogenerate: { directory: 'moldablevars' },
				},
			],

			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
