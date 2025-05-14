// import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { LexicalComposer } from "@/lexical/LexicalComposerWrapper";
import { initialConfig } from "@/lexical/LexicalEditor";

import ContentEditableProvider from "@/lexical/ContentEditableProvider";
// import TargetedCommentProvider from "@/components/Comments/TargetedCommentProvider";
// grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0
export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      {children}
      {/* <TargetedCommentProvider>{children}</TargetedCommentProvider> */}
    </LexicalComposer>
  );
}
