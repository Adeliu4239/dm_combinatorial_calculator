"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import ResultTable from "@/components/resultTable";
import { P, C, nPowerR, CStarsAndBars } from "@/utils/combinatorics";

export default function Home() {
  const [n, setN] = useState(6);
  const [r, setR] = useState(3);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const [combinations, setCombinations] = useState("");
  const [permutations, setPermutations] = useState("");
  const [nPowerRResult, setNPowerRResult] = useState("");
  const [cStarsAndBars, setCStarsAndBars] = useState("");

  const calculate = () => {
    console.log("n = ", n);
    console.log("r = ", r);

    if (n == 0 || r == 0) {
      console.log("n and r must be greater than 0");
      setAlert(true);
      setAlertMessage("n and r must be greater than 0");
      return;
    }
    if (n >= r) {
      console.log("Calculating...");
      setAlert(false);
      setAlertMessage("");
      setShowResult(true);
      setPermutations(P(n, r));
      setCombinations(C(n, r));
      setNPowerRResult(nPowerR(n, r));
      setCStarsAndBars(CStarsAndBars(n, r));
    } else if (n < r) {
      console.log("n must be greater than or equal to r");
      setAlertMessage("n must be greater than or equal to r");
      setAlert(true);
      return;
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center gap-4 flex flex-col">
        <h1 className="text-4xl font-bold text-gray-800">
          Combinatorial Calculator
        </h1>
        {/* <p className="text-lg text-gray-600">
          A simple combinatorial calculator
        </p> */}
        <p className="text-lg text-gray-600">
          This calculator is designed to help you solve combinatorial problems
          like permutations, combinations, and more.
        </p>
        <div className="flex gap-4">
          <Input
            label="n = "
            placeholder="Enter a number"
            labelPlacement="outside-left"
            type="number"
            variant="bordered"
            defaultValue="6"
            value={n}
            onValueChange={(value) => {
              setN(value);
              setAlert(false);
            }}
            isInvalid={alert}
            errorMessage={alertMessage}
            is
          />
          <Input
            label="r = "
            placeholder="Enter a number"
            labelPlacement="outside-left"
            type="number"
            variant="bordered"
            defaultValue="3"
            value={r}
            onValueChange={(value) => {
              setR(value);
              setAlert(false);
            }}
            isInvalid={alert}
            errorMessage={alertMessage}
          />
          <Button auto onPress={calculate}>
            Calculate
          </Button>
        </div>
      </div>
      <ResultTable
        n={n}
        r={r}
        permutations={permutations}
        combinations={combinations}
        nPowerR={nPowerRResult}
        cStarsAndBars={cStarsAndBars}
        showResult={showResult}
      />
    </section>
  );
}
