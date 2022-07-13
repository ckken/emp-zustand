const {defineConfig} = require('@efox/emp')
const path = require('path')
module.exports = defineConfig(() => {
  return {
    moduleTransform: {
      include: [require.resolve('zustand')],
      // include: [/zustand/],
    },
    html: {
      title: 'EMP Zustand',
    },
  }
})
