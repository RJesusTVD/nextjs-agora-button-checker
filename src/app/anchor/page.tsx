"use client";

import { Anchor, AnchorVariant } from "@ama-pt/agora-design-system";

export default function Page() {
  const btnVariantOptions = [
    "primary",
    "neutral",
    "success",
    "warning",
    "danger",
    "informative",
  ] as AnchorVariant[];

  return (
    <div>
      <h1 className="text-2xl-bold">Agora DS Buttons</h1>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">Appearance Link - Light Mode</h2>
        <div className={`flex justify-between p-16 bg-transparent`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `anchor-link-light-${index}`;
            return (
              <div key={key}>
                <Anchor href="#anchor-target" variant={variant} appearance="link">
                  {variant}
                </Anchor>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">Appearance Link - Dark Mode</h2>
        <div className={`flex justify-between p-16 bg-primary-900`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `anchor-link-dark-${index}`;
            return (
              <div key={key}>
                <Anchor
                  href="#anchor-target"
                  variant={variant}
                  appearance="link"
                  darkMode
                >
                  {variant}
                </Anchor>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">Appearance Text - Light Mode</h2>
        <div className={`flex justify-between p-16 bg-transparent`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `anchor-text-light-${index}`;
            return (
              <div key={key}>
                <Anchor href="#anchor-target" variant={variant} appearance="text">
                  {variant}
                </Anchor>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">Appearance Text - Dark Mode</h2>
        <div className={`flex justify-between p-16 bg-primary-900`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `anchor-text-dark-${index}`;
            return (
              <div key={key}>
                <Anchor
                  href="#anchor-target"
                  variant={variant}
                  appearance="text"
                  darkMode
                >
                  {variant}
                </Anchor>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>

      <div id="anchor-target">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        illo ipsa voluptates adipisci praesentium error, animi labore hic. Neque
        reprehenderit cupiditate a totam dignissimos nisi sequi similique
        sapiente, minima recusandae.
      </div>
    </div>
  );
}
