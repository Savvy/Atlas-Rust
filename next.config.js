/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "content.rustmaps.com"
            }
        ]
    }
}

module.exports = nextConfig
