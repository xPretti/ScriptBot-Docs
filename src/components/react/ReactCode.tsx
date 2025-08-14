// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore

import styles from "./ReactCode.module.css";

const theme = {
   'code[class*="language-"]': {
      color: "var(--code-text-color, #333333)",
      background: "none",
      fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      lineHeight: "1.5",
      MozTabSize: "4",
      OTabSize: "4",
      tabSize: "4",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      borderColor: "var(--code-border-color, #ddd)",
   },
   'pre[class*="language-"]': {
      color: "var(--code-text-color, #333333)",
      background: "var(--code-bg-color, #f1f1f1ff)",
      fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      lineHeight: "1.5",
      MozTabSize: "4",
      OTabSize: "4",
      tabSize: "4",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      padding: "1em",
      margin: ".5em 0",
      overflow: "auto",
      borderRadius: "0.3em",
      border: "1px solid var(--code-border-color, #ddd)",
   },
   ':not(pre) > code[class*="language-"]': {
      background: "var(--code-bg-color, #f8f8f8)",
      padding: ".1em",
      borderRadius: ".3em",
      whiteSpace: "normal",
   },
   comment: {
      color: "var(--code-comment-color, #6a737d)",
   },
   prolog: {
      color: "var(--code-comment-color, #6a737d)",
   },
   doctype: {
      color: "var(--code-comment-color, #6a737d)",
   },
   cdata: {
      color: "var(--code-comment-color, #6a737d)",
   },
   punctuation: {
      color: "var(--code-punctuation-color, #333333)",
   },
   ".namespace": {
      opacity: "0.7",
   },
   property: {
      color: "var(--code-property-color, #6f42c1)",
   },
   tag: {
      color: "var(--code-tag-color, #22863a)",
   },
   constant: {
      color: "var(--code-constant-color, #005cc5)",
   },
   symbol: {
      color: "var(--code-symbol-color, #d73a49)",
   },
   deleted: {
      color: "var(--code-deleted-color, #b31d28)",
   },
   boolean: {
      color: "var(--code-boolean-color, #d73a49)",
   },
   number: {
      color: "var(--code-number-color, #005cc5)",
   },
   selector: {
      color: "var(--code-selector-color, #22863a)",
   },
   "attr-name": {
      color: "var(--code-attr-name-color, #6f42c1)",
   },
   string: {
      color: "var(--code-string-color, #032f62)",
   },
   char: {
      color: "var(--code-char-color, #22863a)",
   },
   builtin: {
      color: "var(--code-builtin-color, #6f42c1)",
   },
   inserted: {
      color: "var(--code-inserted-color, #22863a)",
   },
   operator: {
      color: "var(--code-operator-color, #d73a49)",
   },
   entity: {
      color: "var(--code-entity-color, #333333)",
      cursor: "help",
   },
   url: {
      color: "var(--code-url-color, #005cc5)",
   },
   ".language-css .token.string": {
      color: "var(--code-css-string-color, #333333)",
   },
   ".style .token.string": {
      color: "var(--code-style-string-color, #333333)",
   },
   variable: {
      color: "var(--code-variable-color, #e36209)",
   },
   atrule: {
      color: "var(--code-atrule-color, #d73a49)",
   },
   "attr-value": {
      color: "var(--code-attr-value-color, #032f62)",
   },
   function: {
      color: "var(--code-function-color, #6f42c1)",
   },
   "class-name": {
      color: "var(--code-class-name-color, #6f42c1)",
   },
   keyword: {
      color: "var(--code-keyword-color, #d73a49)",
   },
   regex: {
      color: "var(--code-regex-color, #e36209)",
   },
   important: {
      color: "var(--code-important-color, #e36209)",
      fontWeight: "bold",
   },
   bold: {
      fontWeight: "bold",
   },
   italic: {
      fontStyle: "italic",
   },
};

interface Props {
   children: string | string[];
   language: string;
}

export default function ReactCode({ children, language }: Props) {
   if (!children) return null;

   const toText = (children: string | string[]) => {
      if (!Array.isArray(children)) {
         return children;
      }
      return children.join("\n");
   };

   return (
      <SyntaxHighlighter
         language={language}
         showLineNumbers={true}
         showInlineLineNumbers={true}
         wrapLines={true}
         style={theme}
         className={styles.code}
      >
         {toText(children)}
      </SyntaxHighlighter>
   );
}
