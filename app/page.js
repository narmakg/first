"use client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Link from "next/link";

import TodoList from "./Todo";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <TodoList value="add" />
    </>
  );
}
