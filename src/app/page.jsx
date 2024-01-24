"use client";
import { useState, useEffect } from "react";
import Loading from "../component/loading/Loading";
// import Button from "@/component/button/Button";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading ? (
        <Loading />
      ) : (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>Home</h1>
          {/* <Button>Submit</Button> */}
        </div>
      )}
    </main>
  );
};

export default Home;
