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
  m,
  k,
  EulerianNumber,
  EulerianNumberList
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full px-24">
      <Table aria-label="Example static collection table" className="w-full">
        <TableHeader>
          <TableColumn>Formula</TableColumn>
          <TableColumn>Eulerian Number List (m)</TableColumn>
          <TableColumn>Eulerian Number (m, k)</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="Eulerian Number">
            <TableCell>Eulerian Number</TableCell>
            <TableCell>{EulerianNumberList}</TableCell>
            <TableCell>{EulerianNumber}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
