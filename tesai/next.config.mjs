/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "v2.exercisedb.io",
        ],
    },
    webpack: (config) => {
        config.externals = [...config.externals, 'bcrypt'];
        return config;
    },
    //     webpack: (config) => {
    //         config.module.rules.push({
    //             test: /\.html$/,
    //             use: 'raw-loader',
    //         });
    //
    //         return config;
    //     },
    };
export default nextConfig;