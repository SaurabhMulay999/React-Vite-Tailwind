const Footer=()=>{
    return(
    <>
    <h1 className="bg-blue-300 border text-2xl"></h1>
    <div>
        <div className="bg-blue-200  text-center p-2 m-2  ">
            <h4 className="text-black hover:text-xl">Thanks for Your Contribution</h4>
            <br/>
            <h5 className="bg-blue-100">“Many animal rescue organizations hit with a hard-core, heartbreaking message. Their videos and stories can become difficult for average people to watch. By taking a more positive, heartwarming approach to animal rescue, I’ve been able to engage people and keep them engaged for years. Instead of selling the agony and misery – and sadly, there is no shortage of that – I start with the happy endings. I work backwards so the first message they get is joy and success due to their involvement. Opening the mind with humor and joy gets the rescue message in that much deeper.” — Elayne Boosler</h5>
        </div>
        <div>
            
        </div>
    </div>
    
    </>
    )
}
export const Footer1 =()=>{
    const str="Let's keep in touch!";
    const arr=[...str];
    const usefulLinks="Useful Links";
    const useFul=[...usefulLinks];
    
    return (
        <>
        <footer className="relative bg-blueGray-500 border pt-8 pb-6">
        <div className="container bg-blue-100 mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full border lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-blueGray-700">{arr.map((arr)=><h4 key={arr+Math.random(0.3)} className="hover:animate-bounce p-1 inline-flex bg-gray-100" >{arr}</h4>)}</h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"/>
                    <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"/>
                   <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"/>
                   <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"/>
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">{useFul.map((u)=><h4 key={u+Math.random(0.5)} className="hover:animate-bounce p-1 inline-flex bg-gray-100" >{u}</h4>)}</span>
                    <ul className="list-unstyled">
                    <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About Us</a>
                    </li>
                    <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Blog</a>
                    </li>
                    <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" onClick={()=>{window.open("https://github.com/SaurabhMulay999")}}>Github</a>
                    </li>
                    <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Free Products</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <hr className="my-6 border-gray-100"/>
        </div>
        </footer>
        </>
)
}

export default Footer;