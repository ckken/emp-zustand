import emp from '@empjs/share/runtime'
import {reactAdapter} from '@empjs/share/adapter'
import {lazy, Suspense} from 'react'
emp.init({
  name: 'emp_valtio',
  shared: reactAdapter.shared,
})
const entry = process.env.mfhost as string
emp.register([
  {
    name: 'mfHost',
    entry,
  },
])
const MFHost = lazy(() => emp.load('mfHost/App'))
export default function RemoteHost() {
  return (
    <div>
      <h1>EMP REMOTE RUNTIME DEMO</h1>
      <Suspense>
        <MFHost />
      </Suspense>
    </div>
  )
}
