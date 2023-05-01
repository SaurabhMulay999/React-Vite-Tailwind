const ShimmerUI =()=>{
    const string="LOADING..."
    const words=[...string];

    return(
        <>
        <div className="m-9 p-9">
        {words.map((words)=><h1 className=" bg-blue-100 text-2xl p-2 m-2 inline-flex animate-bounce">{words}</h1>)}
        </div>
        </>
    )
}

export default ShimmerUI;