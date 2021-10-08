function ImageFormatter({src, height}) {
    return <img
        src={src}
        style={{maxHeight: height}}
        alt="hi"
    />
}

export default ImageFormatter;