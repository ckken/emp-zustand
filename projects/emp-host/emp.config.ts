import {defineConfig} from '@empjs/cli'
import pluginReact from '@empjs/plugin-react'
import {pluginRspackEmpShare} from '@empjs/share'
export default defineConfig(store => {
  return {
    plugins: [
      pluginReact(),
      pluginRspackEmpShare({
        name: 'mfHost',
        // shared: {
        //   react: {
        //     singleton: true,
        //     requiredVersion: '18',
        //   },
        //   'react-dom': {
        //     singleton: true,
        //     requiredVersion: '18',
        //   },
        // },
        exposes: {'./App': 'src/App'},
      }),
    ],
    build: {
      polyfill: 'usage',
      browserslist: store.browserslistOptions.h5,
    },
    server: {
      port: 3300,
    },
  }
})
