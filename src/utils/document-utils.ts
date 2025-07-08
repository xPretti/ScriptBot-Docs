export const parseToHtmlElement = (html: string) => {
  const parser = new DOMParser().parseFromString(html, "text/html");
  return parser.body.firstElementChild as HTMLElement;
};
