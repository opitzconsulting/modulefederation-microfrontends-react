export interface Props {
  counter: number,
  setCounter: (newCount: number) => void
}

export default function CounterDouble(props: Props) {
  return <button onClick={() => props.setCounter(props.counter * 2)}>Zum Verdoppeln anclicken {props.counter}</button>
}