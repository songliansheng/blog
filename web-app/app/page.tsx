import Image from 'next/image'
import { Inter } from '@next/font/google'

import Editor from '../components/LexicalEditor/App'
import Editor2 from '../components/LexicalEditor/Editor2'
import { PlainEditor } from '../components/LexicalEditor/PlainEditor'

// const App = dynamic(() => import('../components/CustomEditor/App'), {
//     ssr: false,
// })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    <div className="div-layer-I test place-items-center">
        Hello ! world!
        {/* <form></form> */}
    </div>
}
