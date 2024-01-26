"use client";
import { useState, useEffect } from "react";
import Loading from "../component/loading/Loading";
import { motion } from "framer-motion";

import "./page.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="heroContainer">
          <h1 className="heroText">Find your next Favorite Read!!</h1>

          <div className={`${pulsing ? "pulse" : ""} load`}>
            <motion.img
              initial={{ height: "1rem", opacity: 0 }}
              style={{ height: loading ? "6rem" : "auto" }}
              animate={{
                height: loading ? "16rem" : "auto",
                opacity: loading ? 0 : 1,
              }}
              transition={
                ({ height: { delay: 0, duration: 0.4 } },
                { opacity: { delay: 0.5, duration: 0.4 } })
              }
              onLoad={imageLoaded}
              width="100%"
              src="/assets/home.svg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
