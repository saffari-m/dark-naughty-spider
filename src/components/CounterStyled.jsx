import { createSignal } from "solid-js";
export default function CounterStyled() {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="rounded-full bg-red-100 border-2 border-red-300 focus:border-red-400 active:border-red-400 px-[2rem] py-[1rem]"
      onClick={() => setCount(count() + 1)}
    >
      Clicks with style: {count()}
    </button>
  );
}
