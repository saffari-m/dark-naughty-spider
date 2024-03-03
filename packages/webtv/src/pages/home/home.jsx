import React from "react";
import { useUserStore } from "@store/user-store";

function Home() {
  const store = useUserStore();
  console.log(store);
  return <div>Home page</div>;
}

export default Home;
