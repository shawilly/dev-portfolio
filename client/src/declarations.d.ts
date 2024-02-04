declare module '*.svg' {
    const content: string | HTMLImageElement | File;
    export default content;
}

declare module '*.png' {
    const value: string | HTMLImageElement | File;
    export default value;
}
