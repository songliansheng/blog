// import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { LexicalComposer } from "@/lexical/LexicalComposerWrapper";
import { initialConfig } from "@/lexical/LexicalEditor";

import ContentEditableProvider from "@/lexical/ContentEditableProvider";
// import TargetedCommentProvider from "@/components/Comments/TargetedCommentProvider";
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
