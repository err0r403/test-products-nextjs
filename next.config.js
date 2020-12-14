module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/product/1',
        permanent: true,
      },
    ]
  },
}