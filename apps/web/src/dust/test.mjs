import {
    Fragment as _Fragment,
    jsx as _jsx,
    jsxs as _jsxs,
} from 'react/jsx-runtime'
function _createMdxContent(props) {
    const _components = {
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        ...props.components,
    }
    return _jsxs(_Fragment, {
        children: [
            _jsx(_components.h2, {
                children: 'Vowels',
            }),
            '\n',
            _jsx(_components.p, {
                children:
                    'Vowels are letters that represent speech sounds (Pronunciation)',
            }),
            '\n',
            _jsx(_components.h3, {
                children: 'Vowel letters',
            }),
            '\n',
            _jsx(_components.p, {
                children: 'For letters in English words',
            }),
        ],
    })
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {}
    return MDXLayout
        ? _jsx(MDXLayout, {
              ...props,
              children: _jsx(_createMdxContent, {
                  ...props,
              }),
          })
        : _createMdxContent(props)
}

console.log(MDXContent().props.children)
