const {defineConfig} = require('@efox/emp')
module.exports = defineConfig(() => {
  return {
    moduleTransform: {
      // include: ['zustand'],
      include: [/node_modules/],
    },
    html: {
      title: 'EMP Zustand',
    },
  }
})
