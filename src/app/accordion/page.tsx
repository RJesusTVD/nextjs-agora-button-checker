"use client";

import { Accordion } from "@ama-pt/agora-design-system";

export default function Page() {
  return (
    <div className="p-32 bg-neutral-100">
      <Accordion headerTag="h1" title="My accordion">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          iste? Veritatis atque corporis illum harum sit officia distinctio
          culpa amet reprehenderit vel, cumque voluptates nihil quis hic
          obcaecati. Eum, reiciendis?
        </div>
      </Accordion>
    </div>
  );
}
