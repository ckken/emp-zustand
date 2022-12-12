import {createRoot} from 'react-dom/client'
import {RouterDom} from 'src/router'
const container = document.getElementById('emp-root') as HTMLElement
const root = createRoot(container)
root.render(
    <RouterDom />
)
