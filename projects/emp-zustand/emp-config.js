const {defineConfig} = require('@efox/emp')
module.exports = defineConfig(() => {
  return {
    moduleTransform: {
      include: [/zustand/, /react-router-dom/],
    },
    html: {
      title: 'EMP Zustand',
    },
  }
})
