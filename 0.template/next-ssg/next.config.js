const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  generateBuildId: async () => {
    // 这里的buildId最终会输出到html的next_data中，导致打包后的html变了，wrangler就得全量提交
    return process.env.NODE_ENV;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // productionBrowserSourceMaps: true,
  webpack: (config, { isServer }) => {
    // console.log(config)
    // 仅在客户端配置中排除React和ReactDOM
    if (!isServer) {
      // console.log('config.externals', config.externals)
      config.externals.push({
        react: 'React',
        'react-dom': 'ReactDOM',
      });
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig)
