// import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { LexicalComposer } from "@/lexicalCompoments/LexicalComposerWrapper";
import { initialConfig } from "@/lexicalCompoments/LexicalEditor";

import ContentEditableProvider from "@/lexicalCompoments/ContentEditableProvider";
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
