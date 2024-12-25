"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import ResultTable from "@/components/resultTable";
import ResultTableComplex from "@/components/resultTableComplex";
import NumTheoryTable from "@/components/numTheoryTable";
import EulerianNumberTable from "@/components/EulerianNumberTable";

import {
  P,
  C,
  nPowerR,
  CStarsAndBars,
  sumofPermutations,
} from "@/utils/combinatorics";

import {
  stirlingNumbersCal,
  sumOfStirlingNumbers,
  ontoNumberCal,
} from "@/utils/stirlingNumbers";

import {
  catalanNumbers,
  triangularNumbers,
  harmonicNumbers,
  fibonacciNumbers,
  lucasNumbers,
} from "@/utils/numTheory";

import { eulerianNumbersList, eulerianNumber } from "@/utils/eulerianNumbers";

import { partitionNumber, sumOfPartitionsCal } from "@/utils/partitionNumbers";

export default function Home() {
  const [n, setN] = useState(6);
  const [r, setR] = useState(3);
  const [nLabel, setNLabel] = useState("n");
  const [rLabel, setRLabel] = useState("r");

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showTable, setShowTable] = useState("basic");
  const [inputDisabled, setInputDisabled] = useState(false);

  const [combinations, setCombinations] = useState("");
  const [permutations, setPermutations] = useState("");
  const [nPowerRResult, setNPowerRResult] = useState("");
  const [cStarsAndBars, setCStarsAndBars] = useState("");
  const [ontoNumber, setOntoNumber] = useState("");
  const [sumOfStirling, setSumOfStirling] = useState("");
  const [stirlingNumbers, setStirlingNumbers] = useState("");
  const [
    combinationsWithRepetitionAndNoEmpty,
    setCombinationsWithRepetitionAndNoEmpty,
  ] = useState("");

  const [CatalanNumber, setCatalanNumber] = useState("");
  const [tringularNumber, setTringularNumber] = useState("");
  const [harmonicNumber, setHarmonicNumber] = useState("");
  const [FibonacciNumber, setFibonacciNumber] = useState("");
  const [LucasNumber, setLucasNumber] = useState("");
  const [EulerianNumberList, setEulerNumberList] = useState("");
  const [EulerianNumber, setEulerianNumber] = useState("");

  const [partitions, setPartitions] = useState("");
  const [sumOfPartitions, setSumOfPartitions] = useState("");

  const calculate = () => {
    console.log("n = ", n);
    console.log("r = ", r);

    // if (n == 0 || r == 0) {
    //   console.log("n and r must be greater than 0");
    //   setAlert(true);
    //   setAlertMessage("n and r must be greater than 0");
    //   return;
    // }

    if (showTable === "basic") {
      if (n >= r) {
        console.log("Basic calculations");
        setAlert(false);
        setAlertMessage("");
        setShowResult(true);
        setPermutations(P(n, r));
        setCombinations(C(n, r));
        setNPowerRResult(nPowerR(n, r));
        setCStarsAndBars(CStarsAndBars(n, r));
      } else {
        console.log("n must be greater than or equal to r");
        setAlertMessage("n must be greater than or equal to r");
        setAlert(true);
        return;
      }
    }
    if (showTable === "Stirling") {
      // n => m, r => n
      const m = n;
      const num = r;
      console.log("Advanced calculations");
      setAlert(false);
      setAlertMessage("");
      setShowResult(true);
      setNPowerRResult(nPowerR(m, num));
      setCStarsAndBars(CStarsAndBars(m, num));
      setCombinationsWithRepetitionAndNoEmpty(
        C(Number(m) - 1, Number(m) - Number(num))
      );

      setOntoNumber(ontoNumberCal(m, num));
      setSumOfStirling(sumOfStirlingNumbers(m, num));
      setStirlingNumbers(stirlingNumbersCal(m, num)[num - 1]);
      setSumOfPartitions(sumOfPartitionsCal(m, num));
      setPartitions(partitionNumber(m, num));
    }
    if (showTable === "numTheory") {
      console.log("Number Theory calculations");
      setAlert(false);
      setAlertMessage("");
      setShowResult(true);
      setCatalanNumber(catalanNumbers(n).join(", "));
      setTringularNumber(triangularNumbers(n).join(", "));
      setHarmonicNumber(harmonicNumbers(n).join(", "));
      setFibonacciNumber(fibonacciNumbers(n).join(", "));
      setLucasNumber(lucasNumbers(n).join(", "));
    }
    if (showTable === "Eulerian") {
      console.log("Eulerian calculations");
      // 不滿足"k must satisfy 0 <= k <= m-1"
      if (r < 0 || r >= n) {
        console.log("k must satisfy 0 <= k <= m-1");
        setAlert(true);
        setAlertMessage("k must satisfy 0 <= k <= m-1");
        return;
      }
      setAlert(false);
      setAlertMessage("");
      setShowResult(true);

      setEulerNumberList(eulerianNumbersList(n).join(", ")); // 更新狀態為字串
      setEulerianNumber(eulerianNumber(n, r));
    }
    if (showTable === "Stirling") {
      console.log("Stirling calculations");
      setAlert(false);
      setAlertMessage("");
      setShowResult(true);
    }
  };

  useEffect(() => {
    if (showTable === "numTheory") {
      console.log("Number Theory calculations");
      setNLabel("n");
      setRLabel("r");
      setInputDisabled(true);
    } else {
      console.log("Other calculations");
      setInputDisabled(false);
    }
    if (showTable === "Stirling") {
      setNLabel("m");
      setRLabel("n");
    }
    if (showTable === "basic") {
      setNLabel("n");
      setRLabel("r");
    }
    if (showTable === "Eulerian") {
      setNLabel("m");
      setRLabel("k");
    }
  }, [showTable]);

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
            label={nLabel + " = "}
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
            label={rLabel + " = "}
            placeholder="Enter a number"
            labelPlacement="outside-left"
            type="number"
            variant="bordered"
            defaultValue="3"
            value={r}
            isDisabled={inputDisabled}
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
      <div className="flex flex-col items-center justify-center gap-4 w-full px-4">
        <Tabs
          aria-label="Options"
          variant="underlined"
          selectedKey={showTable}
          onSelectionChange={(showTable) => {
            setShowTable(showTable);
            console.log("showTable = ", showTable);
          }}
        >
          <Tab key="basic" title="Basic Permutations and Combinations"></Tab>
          <Tab key="numTheory" title="Number Theory"></Tab>
          <Tab key="Eulerian" title="Eulerian Number"></Tab>
          <Tab key="Stirling" title="Stirling Number"></Tab>
        </Tabs>
        {showTable === "basic" && (
          <ResultTable
            n={n}
            r={r}
            permutations={permutations}
            combinations={combinations}
            nPowerR={nPowerRResult}
            cStarsAndBars={cStarsAndBars}
          />
        )}
        {showTable === "numTheory" && (
          <NumTheoryTable
            CatalanNumber={CatalanNumber}
            tringularNumber={tringularNumber}
            harmonicNumber={harmonicNumber}
            FibonacciNumber={FibonacciNumber}
            LucasNumber={LucasNumber}
          />
        )}
        {showTable === "Eulerian" && (
          <EulerianNumberTable
            EulerianNumber={EulerianNumber}
            EulerianNumberList={EulerianNumberList}
          />
        )}
        {showTable === "Stirling" && (
          <ResultTableComplex
            combinations={combinations}
            nPowerR={nPowerRResult}
            cStarsAndBars={cStarsAndBars}
            ontoNumber={ontoNumber}
            sumOfStirling={sumOfStirling}
            stirlingNumbers={stirlingNumbers}
            combinationsWithRepetitionAndNoEmpty={
              combinationsWithRepetitionAndNoEmpty
            }
            sumOfPartitions={sumOfPartitions}
            partitions={partitions}
          />
        )}
      </div>
    </section>
  );
}
