const ShimmerUI =(props)=>{
    const string="LOADING..................."
    const words=[...string];

    return(
        <>
        {
        Array(10).fill('').map((e)=>{
            return(
            <li key={Math.random(0.1)} className="p-8">
            <div className="p-1 animate-pulse m-1">
                <a href="#" className="flex flex-wrap flex-col-2 bg-white border border-blue-100 rounded-lg shadow  w-52 hover:bg-blue-100 dark:border-gray-300 dark:bg-blue-200 h-16 dark:hover:bg-blue-100">
                    <img className="object-cover w-18 rounded-t-lg h-16 p-2 md:rounded-none md:rounded-l-lg"/>
                        <div className="flex flex-col justify-between p-1 leading-normal">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 "></h5>
                            <p className="mb-3 font-normal text-black "></p>
                     </div>
                </a>
            </div>
            </li>
        
            )
        })
    }

    </>
    )
}
export default ShimmerUI;