"use client";

import {
  counterSlice,
  decrement,
  increment,
  incrementByAmount,
} from "@/countSlice";
import { useGetUsersQuery } from "@/services/auth";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const count = useSelector(counterSlice.selectSlice);
  const dispatch = useDispatch();
  const { data: users, isLoading } = useGetUsersQuery({});

  return (
    <div>
      <h1>Counter App. yeaah. im a noob coderr btw</h1>
      <h2>{count.value}</h2>
      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(increment())}>plus</button>
        <button onClick={() => dispatch(decrement())}>mingus</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      </div>

      <div className="mt-12">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          users?.map((user) => <div key={user.id}>{user.name}</div>)
        )}
      </div>
    </div>
  );
}
