"use client";

import { List } from "@ama-pt/agora-design-system";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Test Select</h1>
      <List listStyle="bullet">
        <li>
          <Link href={"/button"}>Button Tests</Link>
        </li>
        <li>
          <Link href={"/accordion"}>Accordion Tests</Link>
        </li>
        <li>
          <Link href={"/anchor"}>Anchor Tests</Link>
        </li>
      </List>
    </div>
  );
}
