"use client";

import * as React from "react";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <a href="https://nextui.org">NextUI!</a>
          </h1>
          <Button>Press me</Button>
        </main>
      </div>
  );
}
