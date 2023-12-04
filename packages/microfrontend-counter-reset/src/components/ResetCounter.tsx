export interface ResetCounterProps {
  counter: number,
  setCounter: (newCount: number) => void
}

import "./ResetCounter.scoped.scss"

// Dies ist eine Komponente aus dem Microfrontend. Es wird vom "Haupt"-Frontend eingebunden
export default function ResetCounter({setCounter}: ResetCounterProps) {
  return <div className="resetCounter">
    <p>Dies ist eine Komponente aus einem Microfrontend! Sie wird über das Internet von einem anderen Port geladen</p>
    <p>Der folgende Button setzt den Counter zurück.</p>
    <button onClick={() => setCounter(0)}>Reset</button>
  </div>
}