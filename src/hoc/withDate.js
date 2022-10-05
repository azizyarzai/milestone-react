const withDate = (Comp) => {
    return (props) =>  (
        <div>
            {new Date().toDateString()}
            <Comp {...props}/>
        </div>
    )
}

export default withDate