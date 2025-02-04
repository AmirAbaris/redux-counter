"use client";

import {
  counterSlice,
  decrement,
  increment,
  incrementByAmount,
} from "@/countSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const count = useSelector(counterSlice.selectSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App. yeaah. im a noob coderr btw</h1>
      <h2>{count.value}</h2>
      <button onClick={() => dispatch(increment())}>plus</button>
      <button onClick={() => dispatch(decrement())}>mignus</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  );
}
