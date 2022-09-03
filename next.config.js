/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['outrachave.herokuapp.com', "brandlogos.net", 'localhost', 'cdn-w31zu3jn.resize-files-simplefileupload.com', "www.car-logos.org", "cdn-w31zu3jn.files-simplefileupload.com", "dummyimage.com"],
		hostname: ['outrachave.herokuapp.com', "brandlogos.net", 'localhost', 'cdn-w31zu3jn.resize-files-simplefileupload.com', "www.car-logos.org", "cdn-w31zu3jn.files-simplefileupload.com", "dummyimage.com"]
	},
}

module.exports = nextConfig
