const About=()=>{
    let str="About Us";
    let arr=[...str];
    let string_1="Animal welfare";
    let StrArr=[...string_1];
    return(
        <>
        <div className="grid grid-cols-1 grid-row-4">
        <div className="w-full h-96 border bg-blue-100 flex animate-pulse">
            <div>
            {
                arr.map((ele)=><h2 className="inline-flex m-3 p-2 font-extrabold text-4xl hover:animate-bounce text-center text-black border-separate">{ele}</h2>)
            }
            </div>
            <div className="m-24 p-10">
            <div className=" border-blue-100 w-full h-46  flex-auto border text-center flex  p-12">
                <h3 className="text-xl p-1 w-96 font-bold text-gray-900">
                    {
                        StrArr.map((ele)=><h4 className="inline-flex">{ele}</h4>)
                    }
                </h3>
                <p className="text-xs font-serif text-gray-800">Cruelty to animals has become a nationwide problem nowadays. The government has already imposed a few laws and a few more are needed. Along with that, social awareness is also required. Students should learn how to treat animals in schools. Parents should also treat their pets well and teach their children. Our planet Earth is a very beautiful place. Here, all the living organisms are dependent on each other and live together. We, humans, are considered the most intelligent species on Earth. But, we sometimes become very insensitive to the creatures who cannot express themselves, especially the animals. We harm them just to fulfil our needs.</p>

            </div>
            </div>
        </div>
       

        <div className="w-full h-56 bg-red-100 flex">

        </div>
        </div>
        </>
    )
}
export default About;