import type { FunctionParameter } from "@src/types/functions-type";
import Section from "../../shared/Section";
import PlaceholderParams from "../params/PlaceholderParams";

interface Props {
   params: FunctionParameter[] | undefined;
}

export default function ParametersSection({ params }: Props) {
   if (!params || params.length === 0) return null;

   return (
      <Section title="Parâmetros">
         <PlaceholderParams params={params} />
      </Section>
   );
}
