// import 'core-js/features/object/get-own-property-descriptors'
// import 'core-js/features/object/entries'
// import 'core-js/features/object/values'
// import 'core-js/es' // 导入 ES8 所有相关的 polyfills
import './style.scss'
// import('./bootstrap')
import {createRoot} from 'react-dom/client'
import {RouterDom} from 'src/router'
const container = document.getElementById('emp-root') as HTMLElement
const root = createRoot(container)
root.render(<RouterDom />)
