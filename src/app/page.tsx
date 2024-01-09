"use client";

import { Button, ButtonVariant } from "@ama-pt/agora-design-system";

export default function Home() {
  const btnVariantOptions = [
    "primary",
    "neutral",
    "success",
    "warning",
    "danger",
    "informative",
  ] as ButtonVariant[];

  return (
    <div>
      <h1 className="text-2xl-bold">Agora DS Buttons</h1>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">
          Appearance Solid - Light Mode
        </h2>
        <div className={`flex justify-between p-16 bg-transparent`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `btn-solid-light-${index}`;
            return (
              <div key={key}>
                <Button variant={variant} appearance="solid">
                  {variant}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">Appearance Solid - Dark Mode</h2>
        <div className={`flex justify-between p-16 bg-primary-900`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `btn-solid-dark-${index}`;
            return (
              <div key={key}>
                <Button variant={variant} appearance="solid" darkMode>
                  {variant}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">
          Appearance Outline - Light Mode
        </h2>
        <div className={`flex justify-between p-16 bg-transparent`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `btn-outline-light-${index}`;
            return (
              <div key={key}>
                <Button variant={variant} appearance="outline">
                  {variant}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">
          Appearance Outline - Dark Mode
        </h2>
        <div className={`flex justify-between p-16 bg-primary-900`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `btn-outline-dark-${index}`;
            return (
              <div key={key}>
                <Button variant={variant} appearance="outline" darkMode>
                  {variant}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">Appearance Link - Light Mode</h2>
        <div className={`flex justify-between p-16 bg-transparent`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `btn-link-light-${index}`;
            return (
              <div key={key}>
                <Button variant={variant} appearance="link">
                  {variant}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-32">
        <h2 className="mb-16 text-xl-semibold">Appearance Link - Dark Mode</h2>
        <div className={`flex justify-between p-16 bg-primary-900`}>
          {btnVariantOptions.map((variant, index) => {
            const key = `btn-link-dark-${index}`;
            return (
              <div key={key}>
                <Button variant={variant} appearance="link" darkMode>
                  {variant}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
