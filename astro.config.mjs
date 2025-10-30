// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://kiweelog.netlify.app/',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react(), mdx(), sitemap()],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'catppuccin-frappe',
                dark: 'tokyo-night',
            },
        },
    },
})
