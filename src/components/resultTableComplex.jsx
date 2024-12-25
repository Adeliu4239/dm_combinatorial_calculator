"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";

import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export function ChipYes() {
  return (
    <Chip color="success" size="small">
      Yes
    </Chip>
  );
}

export function ChipNo() {
  return (
    <Chip color="danger" size="small">
      No
    </Chip>
  );
}

export default function ResultTable({
  partitions,
  nPowerR,
  cStarsAndBars,
  ontoNumber,
  sumOfStirling,
  stirlingNumbers,
  combinationsWithRepetitionAndNoEmpty,
  sumOfPartitions,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full px-24">
      <Table aria-label="Example static collection table" className="w-full">
        <TableHeader>
          <TableColumn>Formula</TableColumn>
          <TableColumn>Caculation Result</TableColumn>
          <TableColumn>{"Distinct Objects (m)"}</TableColumn>
          <TableColumn>{"Distinct Containers (n)"}</TableColumn>
          <TableColumn>Some Empty Containers</TableColumn>
          <TableColumn>Interpretation</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="n^r">
            <TableCell>𝑛^𝑚</TableCell>
            <TableCell>{nPowerR}</TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              Each of the 𝑚 objects can be placed in any of the 𝑛 distinct
              containers.
            </TableCell>
          </TableRow>
          <TableRow key="onto">
            <TableCell>onto(𝑚,𝑛)</TableCell>
            <TableCell>{ontoNumber}</TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              Each of the 𝑚 distinct objects may be distributed into any of the
              𝑛 distinct containers such that no container is empty.
            </TableCell>
          </TableRow>
          <TableRow key="Sum of Stirling">
            <TableCell>𝑆(𝑚,1)+𝑆(𝑚,2)+ … +𝑆(𝑚,𝑛)</TableCell>
            <TableCell>{sumOfStirling}</TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              𝑚 distinct objects, onto 1,2,..,𝑛 identical containers, no empty
              containers (𝑆(𝑚,1)+𝑆(𝑚,2)+ … +𝑆(𝑚,𝑛))
            </TableCell>
          </TableRow>
          <TableRow key="Stirling">
            <TableCell>𝑆(𝑚,𝑛)</TableCell>
            <TableCell>{stirlingNumbers}</TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              𝑚 distinct objects, onto 𝑛 identical containers, no containers can
              be empty (𝑆(𝑚,𝑛))
            </TableCell>
          </TableRow>
          <TableRow key="C(r+n-1, r)">
            <TableCell>C(𝑚+𝑛−1, 𝑚)</TableCell>
            <TableCell>{cStarsAndBars}</TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              Ordering food from the view of kitchen (𝑚 kids (identical)𝑛 foods
              (distinct));𝑚 identical pennies into 𝑛 distinct
              container;nonnegative integer solutions for an equation
            </TableCell>
          </TableRow>
          <TableRow key="C(r-1, r-n)">
            <TableCell>C(𝑚-1, 𝑚-𝑛)</TableCell>
            <TableCell>{combinationsWithRepetitionAndNoEmpty}</TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              Deliver one object to each of the 𝑛 distinct containers first,then
              distribute 𝑚-𝑛 objects to the 𝑛 containers{" "}
            </TableCell>
          </TableRow>
          <TableRow key="Sum of partitions">
            <TableCell>p(𝑚,1)+p(𝑚,2)+ … +p(𝑚,𝑛)</TableCell>
            <TableCell>{sumOfPartitions}</TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              Partition integer 𝑚 into at most 𝑛 summands (with some 0
              summands,corresponding to empty containers)
            </TableCell>
          </TableRow>
          <TableRow key="partitions">
            <TableCell>p(𝑚,𝑛)</TableCell>
            <TableCell>{partitions}</TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>Partition integer 𝑚 into exactly 𝑛 summands</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
