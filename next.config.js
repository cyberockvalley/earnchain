const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')

const withImages = require('next-images')

const path = require('path')

// next.js configuration
const nextConfig = {
    images: {
        deviceSizes: [400, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [
            'localhost:2021', 
            'dev.domain.com:2021', 
            "workerschain.com",
            "workerschain.io",
        ],
    },
}

module.exports = withPlugins([
    [nextTranslate],
    [withImages]
], nextConfig)