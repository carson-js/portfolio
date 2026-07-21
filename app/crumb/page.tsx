import type { Metadata } from "next";
import CrumbClient from "./CrumbClient";

export const metadata: Metadata = {
  title: "Crumb — Carson Smith",
  description: "Crumb is a CHIP-8 emulator written in C from scratch, implementing the full fetch-decode-execute cycle with a function-pointer opcode table.",
};

export default function CrumbPage() {
  return <CrumbClient />;
}