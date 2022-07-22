import {mountStoreDevtool} from 'simple-zustand-devtools'
import CommonStore from 'src/store/CommonStore'
import ActionStore from 'src/store/ActionStore'
import ListStore from 'src/store/ListStore'
import CodeStore from 'src/store/CodeStore'

if (process.env.mode === 'development') {
  mountStoreDevtool('CommonStore', CommonStore)
  mountStoreDevtool('ActionStore', ActionStore)
  mountStoreDevtool('ListStore', ListStore)
  mountStoreDevtool('CodeStore', CodeStore)
}
