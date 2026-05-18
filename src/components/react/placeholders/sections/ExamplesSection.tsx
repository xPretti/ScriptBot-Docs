import type { FunctionPlaceholderInterface } from "@src/interfaces/placeholder-interface";

import Section from "../../shared/Section";
import ReactCode from "../../shared/ReactCode";
import { getFunctionExample } from "@src/utils/functions-comp-utils";

interface Props {
   item: FunctionPlaceholderInterface;
}

function buildExamples(fn: FunctionPlaceholderInterface) {
   let result = "//Default example:\n" + getFunctionExample(fn);

   if (fn.aliases) {
      result += "\n\n//Using aliases:\n" + getFunctionExample(fn, true);
   }

   if (fn.examples?.length) {
      result += `\n\n//Other examples\n${fn.examples.join("\n")}`;
   }

   return result;
}

export default function ExamplesSection({ item }: Props) {
   return (
      <Section title="Exemplos">
         <ReactCode language="java">{buildExamples(item)}</ReactCode>
      </Section>
   );
}
