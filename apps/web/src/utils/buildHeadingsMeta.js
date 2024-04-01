// TODO Dive deep in this ! or delete it!
export default function extractHeaders(children, depth, out) {
    for (const child of Children.toArray(children)) {
        let header
        header = {
            url: '#' + child.props.id,
            depth:
                (child.type && parseInt(child.type.replace('h', ''), 0)) ?? 0,
            text: child.props.children,
        }
        out.push(header)
        if (child.children && depth > 0) {
            extractHeaders(child.children, depth - 1, out)
        }
    }
}


