import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// TS7 native has no JS compiler API; useTypeScriptCli makes `next build`
	// spawn the real `tsc` for its type check instead of crashing.
	experimental: { useTypeScriptCli: true },
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
