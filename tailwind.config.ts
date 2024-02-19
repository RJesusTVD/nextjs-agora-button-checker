import { AgoraTailwindConfig } from "@ama-pt/agora-design-system";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["src/**/*.{ts,tsx}"],
  theme: AgoraTailwindConfig.theme,
  plugins: AgoraTailwindConfig.plugins,
  safelist: [
    ...AgoraTailwindConfig.safelist,
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "col-span-10",
    "col-span-11",
    "col-span-12",
  ],
  corePlugins: {
    preflight: false,
  },
};
export default config;
