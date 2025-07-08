import { functionsData } from "@src/data/functions-data";
import type { FunctionModel } from "@src/interfaces/functions-interface";
import { parseToHtmlElement } from "@src/utils/document-utils";
import { html } from "@src/utils/html-utils";

function FunctionModal(fn: FunctionModel): string {
  return html`
    <div class="fn-modal-container">
      <div class="fn-modal-header">
        <h2>${fn.name}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x-icon lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <button class="modal-close-btn">x</button>
      </div>
    </div>
  `;
}

export function FunctionModalModel(fn: string): HTMLElement | null {
  const fnData = functionsData.find((f) => f.name === fn);
  if (!fnData) return null;
  return parseToHtmlElement(FunctionModal(fnData));
}
