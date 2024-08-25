import React from "react";
import Hero from "../components/Hero";
import Delicious from "../components/Delicious";
import WorkStep from "../components/WorkStep";
import Behaves from "../components/Behaves";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Delicious />
      <WorkStep />
      <Behaves />
    </div>
  );
}
