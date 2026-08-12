import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function inlineProductionCss() {
  return {
    name: 'inline-production-css',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = bundle['index.html']
      if (!html || typeof html.source !== 'string') return
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type !== 'asset' || !fileName.endsWith('.css')) continue
        const link = `<link rel="stylesheet" crossorigin href="/${fileName}">`
        if (!html.source.includes(link)) continue
        html.source = html.source.replace(link, `<style>${asset.source}</style>`)
        delete bundle[fileName]
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), inlineProductionCss()],
})
