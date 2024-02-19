"use client";

import { LinkWrapper } from "@ama-pt/agora-design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BackToHomeComponent = () => {
  const pathName = usePathname();

  const isHomepage = pathName === "/";

  return (
    <>
      {!isHomepage && (
        <nav>
          <ul>
            <li>
              <LinkWrapper>
                <Link href={"/"}>Home</Link>
              </LinkWrapper>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
