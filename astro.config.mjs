// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import preact from '@astrojs/preact'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
    site: 'https://kiweelog.vercel.app/',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [preact(), mdx()],
})
