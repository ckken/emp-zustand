import {version as ReactVersion} from 'react'
import {version as ReactDomVersion} from 'react-dom'
import {ValtioProxy} from './base'

class CommonStore extends ValtioProxy {
  reactVersion = ReactVersion
  reactDomVersion = ReactDomVersion
  public chromeVersion = 0
  init() {
    const raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
    const v = raw ? Number.parseInt(raw[2], 10) : 0
    this.chromeVersion = v
  }
}
export default new CommonStore()
