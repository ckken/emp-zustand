import {ValtioProxy} from './base'
class ListStore extends ValtioProxy {
  list: number[] = []
  listNum = 100
  changeListNum(num: string) {
    this.listNum = Number.parseInt(num)
  }
  getList() {
    let l: number[] = [...new Array(this.listNum).keys()]
    l = l.map(() => {
      return Math.random()
    })
    this.list = l.concat(this.list)
  }
}
export default new ListStore()
