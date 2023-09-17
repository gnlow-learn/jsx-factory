export declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any

        /** Hi */
        div: any
    }
}

type Factory<T> =
    (
        tag: T | string,
        attr: { [key: string]: any },
    ) => T

const jsx: Factory<string> =
    (tag: string, att: any) => {
        console.log(tag)
        console.log(att)
        return tag
    }

export {
    jsx,
    jsx as jsxs,
    jsx as Fragment,
}