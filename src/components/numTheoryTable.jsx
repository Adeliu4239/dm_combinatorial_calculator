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
  CatalanNumber,
  tringularNumber,
  harmonicNumber,
  FibonacciNumber,
  LucasNumber,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full px-24">
      <Table aria-label="Example static collection table" className="w-full">
        <TableHeader>
          <TableColumn>Formula</TableColumn>
          <TableColumn>Number Series Result</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="Catalan Number">
            <TableCell>Catalan Number</TableCell>
            <TableCell>{CatalanNumber}</TableCell>
          </TableRow>
          <TableRow key="Tringular Number">
            <TableCell>Tringular Number</TableCell>
            <TableCell>{tringularNumber}</TableCell>
          </TableRow>
          <TableRow key="Harmonic Number">
            <TableCell>Harmonic Number</TableCell>
            <TableCell>{harmonicNumber}</TableCell>
          </TableRow>
          <TableRow key="Fibonacci Number">
            <TableCell>Fibonacci Number</TableCell>
            <TableCell>{FibonacciNumber}</TableCell>
          </TableRow>
          <TableRow key="Lucas Number">
            <TableCell>Lucas Number</TableCell>
            <TableCell>{LucasNumber}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
