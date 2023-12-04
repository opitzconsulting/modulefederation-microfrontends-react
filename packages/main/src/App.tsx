import { Suspense, useState } from 'react'

import './App.scoped.scss'
import "./App.scss"

// @ts-expect-error 
import ResetCounter from "frontendComponentReset/ResetCounter"
import React from 'react'

// @ts-expect-error 
const LazyResetCounter = React.lazy(() => import("frontendComponentReset/ResetCounter"))


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='root'>
      <div>
        <h1>Microfrontend Demo</h1>
        <div className='buttonStateContainer'>
          <button onClick={() => setCount(count+1)}>{count}</button> 
          Dieser Button dient als Demo, dass Informationen zwischen Microfrontend und Root-Frontend übertragen werden können.
        </div>
        <p>Die darunter liegenden Komponenten sind <em>nicht</em> Teil dieses Bündels. 
        Das bedeutet auch, dass diese Komponenten separat von diesem <em>Wurzel</em>-Frontend aktualisiert und modifiziert werden können.</p>
      </div>
      <hr/>
      <main>
        <ResetCounter counter={count} setCounter={setCount} />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyResetCounter counter={count} setCounter={setCount} />
        </Suspense>
      </main>
    </div>
  )
}

export default App
