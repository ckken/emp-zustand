const {defineConfig} = require('@efox/emp')
const compile = require('@efox/emp-compile-swc')
module.exports = defineConfig(() => {
  return {
    compile,
    moduleTransform: {
      include: [/valtio/, /react\-router/, /yyeva/],
    },
    html: {
      title: 'EMP valtio',
    },
  }
})
