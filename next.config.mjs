/** @type {import('next').NextConfig} */

export function webpack(config, { dev }) {
	config.module.rules.push({
		test: /\.pdf$/i,
		type: 'asset/source',
	})
	return config
}
