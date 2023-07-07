const {defineConfig} = require('@efox/emp')
const compile = require('@efox/emp-compile-swc')
module.exports = defineConfig(() => {
  return {
    compile,
    moduleTransform: {
      include: [/zustand/, /react\-router/, /yyeva/],
    },
    html: {
      title: 'EMP Zustand',
      tags: {
        headTags: [
          `<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
				<script>
					var vConsole = new window.VConsole();
				</script>`,
        ],
      },
    },
  }
})
