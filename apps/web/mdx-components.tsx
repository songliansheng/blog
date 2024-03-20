import type { MDXComponents } from 'mdx/types'
 import { MdxComponents } from '@/components/MDX/MDXComponents'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  //  return components
  return {
      ...MdxComponents,
      ...components,
  }
}