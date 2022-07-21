import create from 'zustand'
import {combine} from 'zustand/middleware'
import {version as ReactVersion} from 'react'
import {version as ReactDomVersion} from 'react-dom'
const useCommonStore = create(
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
)

export default useCommonStore
