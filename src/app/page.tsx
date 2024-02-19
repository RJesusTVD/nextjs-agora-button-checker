"use client";

import { LinkWrapper, List } from "@ama-pt/agora-design-system";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Test Select</h1>
      <List listStyle="none">
        <li>
          <LinkWrapper>
            <Link href={"/button"}>Button Tests</Link>
          </LinkWrapper>
        </li>
        <li>
          <LinkWrapper>
            <Link href={"/accordion"}>Accordion Tests</Link>
          </LinkWrapper>
        </li>
        <li>
          <LinkWrapper>
            <Link href={"/anchor"}>Anchor Tests</Link>
          </LinkWrapper>
        </li>
        <li>
          <LinkWrapper>
            <Link href={"/input-text"}>Input Text</Link>
          </LinkWrapper>
        </li>
      </List>
    </div>
  );
}
