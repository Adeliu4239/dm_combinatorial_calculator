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
  n,
  r,
  permutations,
  combinations,
  nPowerR,
  cStarsAndBars,
}) {

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full px-24">
      <Table aria-label="Example static collection table" className="w-full">
        <TableHeader>
          <TableColumn>Formula</TableColumn>
          <TableColumn>Caculation Result</TableColumn>
          <TableColumn>Order Relevant</TableColumn>
          <TableColumn>Repetition Allowed</TableColumn>
          <TableColumn>Interpretation</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="P(n, r)">
            <TableCell>P(n, r)</TableCell>
            <TableCell>{permutations}</TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              Permutations of size r from n distinct objects
            </TableCell>
          </TableRow>
          <TableRow key="C(n, r)">
            <TableCell>C(n, r)</TableCell>
            <TableCell>{combinations}</TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              Selections/Combinations of size r from n distinct objects
            </TableCell>
          </TableRow>
          <TableRow key="n^r">
            <TableCell>n^r</TableCell>
            <TableCell>{nPowerR}</TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              Arrangements with repetition of size r from n distinct objects
            </TableCell>
          </TableRow>
          <TableRow key="C(r+n-1, r)">
            <TableCell>C(r+n-1, r)</TableCell>
            <TableCell>{cStarsAndBars}</TableCell>
            <TableCell>
              <ChipNo />
            </TableCell>
            <TableCell>
              <ChipYes />
            </TableCell>
            <TableCell>
              Selections with repetition of size r from n distinct objects
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
