import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				surface: "#1e2640",
			},
		},
	},
	plugins: [],
};
export default config;
