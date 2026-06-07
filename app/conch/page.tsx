import type { Metadata } from "next";
import ConchClient from "./ConchClient";

export const metadata: Metadata = {
  title: "Conch — Carson Smith",
  description: "Conch is a lightweight Unix shell written in C from scratch, implementing a full REPL with process forking, PATH resolution, and builtin commands.",
};

export default function ConchPage() {
  return <ConchClient />;
}