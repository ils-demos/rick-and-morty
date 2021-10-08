function Loading({isLoading, children}){
    if( isLoading ) {
        return <div>isLoading</div>
    }
    return children 
}

export default Loading;