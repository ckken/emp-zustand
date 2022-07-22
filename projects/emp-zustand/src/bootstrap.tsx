import {createRoot} from 'react-dom/client'
import {RouterDom} from 'src/router'
import {StrictMode} from 'react'
const container = document.getElementById('emp-root') as HTMLElement
const root = createRoot(container)
root.render(
  <StrictMode>
    <RouterDom />
  </StrictMode>,
)
