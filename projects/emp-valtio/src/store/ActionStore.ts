import {ValtioProxy} from './base'
class ActionStore extends ValtioProxy {
  bears = {
    count: 0,
    tips: 'bearStore',
  }
  increasePopulation() {
    this.bears.count++
  }
  decreasePopulation() {
    this.bears.count--
  }
  removeAllBears() {
    this.bears.count = 0
  }
}
export default new ActionStore()
