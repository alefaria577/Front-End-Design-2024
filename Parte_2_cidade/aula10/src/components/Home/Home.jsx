
const Home = ()=>{

return(

    <>
    <div className="bg-gradient-to-l from-cyan-200 to-blue-500">
    <h1 className="text-3xl font-bold underline text-blue-800 text-center">HOME</h1>
    </div>

    <div className="relative-w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">
        <div className="flex h-28 bg-blue-900 rounded-xl items-center justify-center">
            <h1 className="absolute mx-auto text-center right text-2xl text-white">
                Aperte o botão
            </h1>
        </div>

        <div className="p-2 border-b-2">
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit culpa quidem, nisi tempore labore dignissimos dolorem! Autem exercitationem necessitatibus aliquid saepe at laboriosam neque obcaecati nam quo, beatae voluptatem?
            </h6>

            <div className="flex flex-wrap items-center m-2">
                <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1 hover:bg-violet-600 hover:text-white">#HTML</span>
                <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1 hover:bg-black hover:text-white">#React</span>
                <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1 hover:bg-green-900 hover:text-white">#Javascript</span>
            </div>

            <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
                <button className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 px-2 m-2">
                    Meus projetos
                </button>
                <button className="border-2 border-blue-600 rounded-2xl text-blue shadow-sm p-1 px-2 m-2">
                    Github
                </button>

            </div>


        </div>


    </div>


    </>

)

}
export default Home