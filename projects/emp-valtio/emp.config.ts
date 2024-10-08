import {defineConfig} from '@empjs/cli'
import pluginReact from '@empjs/plugin-react'
import {pluginRspackEmpShare} from '@empjs/share'
export default defineConfig(store => {
  const ip = store.getLanIp()
  return {
    plugins: [
      pluginReact(),
      pluginRspackEmpShare({
        // empRuntime: {
        //   runtimeLib: `http://${ip}:2100/full.js`,
        //   frameworkLib: `http://${ip}:1800`,
        //   frameworkGlobal: 'EMP_ADAPTER_REACT',
        //   framework: 'react',
        // },
      }),
    ],
    build: {
      polyfill: 'usage',
      browserslist: store.browserslistOptions.h5,
    },
    html: {
      template: 'src/index.html',
    },
    define: {
      mfhost: `http://${ip}:3300/emp.js`,
    },
  }
})
