const ShimmerUI =(props)=>{
    const string="LOADING...................."
    const words=[...string];

    return(
        <>
        <div className="m-9 p-9">
        {words.map((words)=><h1 key={Math.random(0.1)} className=" bg-blue-100 text-4xl p-2 m-1 border text-slate-950  inline-flex animate-bounce">{words}</h1>)}
        </div>
        </>
    )
}

export default ShimmerUI;