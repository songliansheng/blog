import { compile, evaluate, run } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
const Compiled = await compile('*like this* or _like this_?')
    // const evaluated = await evaluate('*like this* or _like this_?', runtime)
    const wtf = await run(Compiled, { })
    console.log('Logs from [slug] -> page.jsx'+wtf)