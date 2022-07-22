import create from 'zustand'
import {combine, devtools} from 'zustand/middleware'
// import shallow from 'zustand/shallow'
import {version as ReactVersion} from 'react'
import {version as ReactDomVersion} from 'react-dom'
//
const useCommonStore = create(
  devtools(
    combine(
      {
        reactVersion: ReactVersion,
        reactDomVersion: ReactDomVersion,
        chromeVersion: 0,
      },
      set => ({
        init() {
          const raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
          const v = raw ? parseInt(raw[2], 10) : 0
          set({chromeVersion: v})
        },
      }),
    ),
  ),
)
// eslint-disable-next-line react-hooks/rules-of-hooks
// export const getCommonStore = () => useCommonStore(state => state, shallow)

export default useCommonStore
