import axios from 'axios'
import {ValtioProxy} from './base'
class CodeStore extends ValtioProxy {
  code = {}
  async fetchRemote() {
    const {data} = await axios.get('/data.json')
    this.code = data
  }
  cleanCode() {
    this.code = {}
  }
}

export default new CodeStore()
