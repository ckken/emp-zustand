const {defineConfig} = require('@efox/emp')
module.exports = defineConfig(() => {
  return {
    server: {
      https: true,
    },
    html: {
      title: 'EMP Zustand',
    },
  }
})
