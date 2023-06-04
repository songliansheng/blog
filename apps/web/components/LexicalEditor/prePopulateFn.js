function prepopulateFn() {
    const root = $getRoot()
    if (root.getFirstChild() === null) {
        const heading = $createHeadingNode('h1')
        heading.append($createTextNode('Welcome to the playground'))
        root.append(heading)
        const quote = $createQuoteNode()
        quote.append(
            $createTextNode(
                `In case you were wondering what the black box at the bottom is – it's the debug view, showing the current state of the editor. ` +
                    `You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting.`
            )
        )
        root.append(quote)
        const paragraph = $createParagraphNode()
        paragraph.append(
            $createTextNode('The playground is a demo environment built with '),
            $createTextNode('@lexical/react').toggleFormat('code'),
            $createTextNode('.'),
            $createTextNode(' Try typing in '),
            $createTextNode('some text').toggleFormat('bold'),
            $createTextNode(' with '),
            $createTextNode('different').toggleFormat('italic'),
            $createTextNode(' formats.')
        )
        root.append(paragraph)
        const paragraph2 = $createParagraphNode()
        paragraph2.append(
            $createTextNode(
                'Make sure to check out the various plugins in the toolbar. You can also use #hashtags or @-mentions too!'
            )
        )
        root.append(paragraph2)
        const paragraph3 = $createParagraphNode()
        paragraph3.append(
            $createTextNode(
                `If you'd like to find out more about Lexical, you can:`
            )
        )
        root.append(paragraph3)
        const list = $createListNode('bullet')
        list.append(
            $createListItemNode().append(
                $createTextNode(`Visit the `),
                $createLinkNode('https://lexical.dev/').append(
                    $createTextNode('Lexical website')
                ),
                $createTextNode(` for documentation and more information.`)
            ),
            $createListItemNode().append(
                $createTextNode(`Check out the code on our `),
                $createLinkNode('https://github.com/facebook/lexical').append(
                    $createTextNode('GitHub repository')
                ),
                $createTextNode(`.`)
            ),
            $createListItemNode().append(
                $createTextNode(`Playground code can be found `),
                $createLinkNode(
                    'https://github.com/facebook/lexical/tree/main/packages/lexical-playground'
                ).append($createTextNode('here')),
                $createTextNode(`.`)
            ),
            $createListItemNode().append(
                $createTextNode(`Join our `),
                $createLinkNode('https://discord.com/invite/KmG4wQnnD9').append(
                    $createTextNode('Discord Server')
                ),
                $createTextNode(` and chat with the team.`)
            )
        )
        root.append(list)
        const paragraph4 = $createParagraphNode()
        paragraph4.append(
            $createTextNode(
                `Lastly, we're constantly adding cool new features to this playground. So make sure you check back here when you next get a chance :).`
            )
        )
        root.append(paragraph4)
    }
}

const originalObl = {
    root: {
        children: [
            {
                children: [
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Welcome to the playground',
                        type: 'text',
                        version: 1,
                    },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                tag: 'h1',
            },
            {
                children: [
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'The playground is a demo environment built with ',
                        type: 'text',
                        version: 1,
                    },
                    {
                        detail: 0,
                        format: 16,
                        mode: 'normal',
                        style: '',
                        text: '@lexical/react',
                        type: 'text',
                        version: 1,
                    },
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '. Try typing in ',
                        type: 'text',
                        version: 1,
                    },
                    {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'some text',
                        type: 'text',
                        version: 1,
                    },
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' with ',
                        type: 'text',
                        version: 1,
                    },
                    {
                        detail: 0,
                        format: 2,
                        mode: 'normal',
                        style: '',
                        text: 'different',
                        type: 'text',
                        version: 1,
                    },
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' formats.',
                        type: 'text',
                        version: 1,
                    },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
            },
            {
                children: [
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Make sure to check out the various plugins in the toolbar. You can also use ',
                        type: 'text',
                        version: 1,
                    },
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '#hashtags',
                        type: 'hashtag',
                        version: 1,
                    },
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' or @-mentions too!',
                        type: 'text',
                        version: 1,
                    },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
            },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
    },
}
const serializedJson = {"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Welcome to the playground","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"The playground is a demo environment built with ","type":"text","version":1},{"detail":0,"format":16,"mode":"normal","style":"","text":"@lexical/react","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":". Try typing in ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"some text","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" with ","type":"text","version":1},{"detail":0,"format":2,"mode":"normal","style":"","text":"different","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" formats.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Make sure to check out the various plugins in the toolbar. You can also use ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"#hashtags","type":"hashtag","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" or @-mentions too!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}
const serializedJson2 = '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Welcome to the playground","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"The playground is a demo environment built with ","type":"text","version":1},{"detail":0,"format":16,"mode":"normal","style":"","text":"@lexical/react","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":". Try typing in ","type":"text","version":1},{"detail":0,"format":1,"mode":"normal","style":"","text":"some text","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" with ","type":"text","version":1},{"detail":0,"format":2,"mode":"normal","style":"","text":"different","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" formats.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Make sure to check out the various plugins in the toolbar. You can also use ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"#hashtags","type":"hashtag","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" or @-mentions too!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'
export { originalObl, prepopulateFn, serializedJson, serializedJson2 }
