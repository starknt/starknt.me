import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      autoInstall: true,
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetUno(),
    presetAttributify(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'Roboto',
    //     mono: ['Fira Code', 'Fira Mono:400,700'],
    //   },
    // }),
  ],
  shortcuts: [

  ],
})
