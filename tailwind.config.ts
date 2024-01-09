import { AgoraTailwindConfig } from '@ama-pt/agora-design-system'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["src/**/*.{ts,tsx}"],
  theme: AgoraTailwindConfig.theme,
  plugins: AgoraTailwindConfig.plugins,
  safelist: AgoraTailwindConfig.safelist,
  corePlugins: {
    preflight: false,
  },

}
export default config
