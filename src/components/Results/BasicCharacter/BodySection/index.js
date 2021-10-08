function BodySection({children, columns, hideMobile, justifyEnd}) {
    return (
        <div className={
            "col "
            + "m-3 "
            + (hideMobile ? "d-sm-flex d-none " : "d-flex ")
            + (columns ? "flex-column " : "")
            + (justifyEnd ? "justify-content-end " : "")
            + "align-items-center "
            }>
            {children}
        </div>
    )
}

export default BodySection;