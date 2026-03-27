import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'M3 F80 Archive',
  description: '11万km超のF80 M3を長く乗り続けるための記録',
  lang: 'ja',
  themeConfig: {
    nav: [
      { text: '整備計画', link: '/maintenance-guide' },
      { text: '次の車候補', link: '/next-car-candidates' },
    ],
    sidebar: [
      {
        text: 'コンテンツ',
        items: [
          { text: '整備計画の全体像', link: '/maintenance-guide' },
          { text: '次の車候補', link: '/next-car-candidates' },
        ],
      },
    ],
    outline: { level: [2, 3], label: '目次' },
  },
})
