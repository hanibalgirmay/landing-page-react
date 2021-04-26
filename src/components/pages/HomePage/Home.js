import React from "react";
import HeaderSection from "../../Header";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";

function HomeSec() {
  return (
    <>
      <HeaderSection {...homeObjOne} />
      <HeaderSection {...homeObjTwo} />
      <HeaderSection {...homeObjThree} />
      <HeaderSection {...homeObjFour} />
      <HeaderSection {...homeObjFive} />
    </>
  );
}

export default HomeSec;
