import { Suspense, useState } from 'react'

import './App.scoped.scss'
import "./App.scss"

//import ResetCounter from "frontendComponentReset/ResetCounter"
import {lazy} from 'react'



//const LazyResetCounter = React.lazy(() => import("http://localhost:5001/assets/__federation_expose_ResetCounter-Ppim9CBk.js"))

// Hier wird ein Lokales Modul importiert.
// Im Vite Build gibt es einen alias, welcher 
// `@microfrontend/tsc-library/dist/`
// durch
// `http://localhost:5002/`
// für den Build tauscht.
const LazyCounterDouble = lazy( () => import("@microfrontend/tsc-library/dist/CounterDouble.js") )

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
        {/* <ResetCounter counter={count} setCounter={setCount} /> */}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <LazyResetCounter counter={count} setCounter={setCount} />
        </Suspense> */}
        <Suspense fallback={<div>Loading...</div>}>
          <LazyCounterDouble counter={count} setCounter={setCount} />
        </Suspense>
      </main>
    </div>
  )
}

export default App
