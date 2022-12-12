const {defineConfig} = require('@efox/emp')
const compile = require('@efox/emp-compile-swc')
module.exports = defineConfig(() => {
  return {
		compile,
    server: {
      port: 2001,
      // https: true,
    },
    moduleTransform: {
      include: [/zustand/, /react\-router/,/yyeva/],
    },
    html: {
      title: 'EMP Zustand',
    },
  }
})
