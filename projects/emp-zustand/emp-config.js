const {defineConfig} = require('@efox/emp')
module.exports = defineConfig(() => {
  return {
    moduleTransform: {
      include: [/zustand/],
    },
    html: {
      title: 'EMP Zustand',
    },
  }
})
