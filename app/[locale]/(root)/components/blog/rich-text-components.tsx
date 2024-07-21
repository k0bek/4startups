/* eslint-disable */
export const RichTextComponents = {
  list: {
    bullet: ({ children }: any) => (
      <div className={"my-auto max-w-md"}>
        {" "}
        <ul
          className={
            "list-outside list-disc space-y-2 py-5 italic text-gray-800"
          }
        >
          {children}
        </ul>
      </div>
    ),
    number: ({ children }: any) => (
      <div className={"my-auto max-w-md"}>
        <ol
          className={
            "ml-10 list-outside list-decimal space-y-2 rounded-2xl py-5 italic"
          }
        >
          {children}
        </ol>
      </div>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <div className={"text-justify text-black dark:text-white md:text-lg -mt-4 "}>{children}</div>
    ),
    h1: ({ children }: any) => (
      <h1
        className={"text-5xl font-bold tracking-widest text-primary-foreground"}
      >
        {children}
      </h1>
    ),
    h3: ({ children }: any) => (
      <h3
        className={"text-3xl font-bold text-primary-foreground py-1"}
      >
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className={"py-5 text-2xl font-bold"}>{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        className={
          "border-l-2 py-5 pl-5 text-sm text-gray-800"
        }
      >
        {children}
      </blockquote>
    ),
  },
};
