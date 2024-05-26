export default function WantStart() {
    return (
        <section className="flex flex-col bg-white rounded-2xl w-5/6 lg:w-3/4 xl:w-3/6 mx-auto mt-24 p-8 py-16">
            <div className="border border-zinc-300 p-2 lg:px-6 w-full md:w-3/6 lg:w-fit mx-auto rounded-full">
                <h1 className="whitespace-nowrap text-4xl lg:text-5xl font-semibold text-center">Want to start</h1>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-center w-full lg:w-3/6 mx-auto">a project?</h1>

            <button
                className="flex flex-row gap-8 justify-around items-center bg-yellow-300 hover:bg-yellow-400 rounded-full px-1 py-1 w-fit mx-auto mt-12">
                <p className="px-4 font-semibold">Let's Talk</p>
                <div
                    className="flex items-center justify-center w-12 aspect-square bg-white rounded-full shadow-lg">
                    <div className="w-3 bg-black rounded-full aspect-square">

                    </div>
                </div>
            </button>
        </section>
    )
}