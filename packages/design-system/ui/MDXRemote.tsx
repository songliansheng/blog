import { MdxComponents } from "@/mdxComponent/MDXComponents";
import { MDXRemote } from "next-mdx-remote/rsc";
export default function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...MdxComponents, ...(props.components || {}) }}
    />
  );
}
