export declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any
    }
    type Element = string
}

type Factory<T> =
    (
        tag: T | string,
        attr: {
            [key: string]: any
            children?: T | string | (T | string)[]
        }
    ) => T | string

const jsx: Factory<(arg: any) => JSX.Element> =
    (tag, att) => {
        if (typeof tag == "function")
            return tag(att)

        if (typeof tag == "string") {
            let { children } = att
            if (!children) children = []
            if (!Array.isArray(children)) children = [children]
        
            return ``
                +`<${tag}>`
                +`${children.join("")}`
                +`<${tag}/>`
        }
        return ""
    }

export {
    jsx,
    jsx as jsxs,
    jsx as Fragment,
}