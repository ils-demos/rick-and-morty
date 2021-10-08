function CharacterDetailBody({column, children}) {
    return (
        <div className={
            "mb-3 "
            + "p-3 "
            + "d-flex "
            + (column ? "flex-column " : "")
            + "border"
            }>
            {children}
        </div>
    )
}

export default CharacterDetailBody;