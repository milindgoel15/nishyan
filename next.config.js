/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// add url domain for your images in this list to whitelist them
		domains: ["avatars.githubusercontent.com"],
	},
	async redirects() {
		return [
			{
				source: "/dashboard",
				destination: "/dashboard/payments",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
