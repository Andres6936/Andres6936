export default function NavigatorTop() {
    return (
        <section
            className="hidden md:flex flex-row justify-between items-center bg-white px-4 py-4 rounded-full md:w-full lg:w-3/4 2xl:w-3/5 z-10 mx-auto">
            <div className="flex flex-row gap-6 items-center justify-between">
                <div className="w-12 aspect-square bg-yellow-300 rounded-full">

                </div>
                <p className="hover:font-semibold">About</p>
                <p className="hover:font-semibold">Works</p>
                <p className="text-slate-200">|</p>
                <p className="hover:font-semibold">Github</p>
                <p className="hover:font-semibold">Dribble</p>
                <p className="hover:font-semibold">LinkedIn</p>
            </div>
            <button className="bg-yellow-300 py-2 px-5 rounded-full font-semibold hover:bg-yellow-400">Pricing ~ it's
                free
            </button>
        </section>
    )
}