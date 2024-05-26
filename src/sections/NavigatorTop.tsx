export default function NavigatorTop() {
    return (
        <section
            className="hidden md:flex flex-row justify-between items-center bg-white px-4 py-4 rounded-full w-3/4 2xl:w-3/5 z-10 mx-auto">
            <div className="flex flex-row gap-6 items-center justify-between">
                <div className="w-12 aspect-square bg-yellow-300 rounded-full">

                </div>
                <p>About</p>
                <p>Works</p>
                <p className="text-slate-200">|</p>
                <p>Github</p>
                <p>Dribble</p>
                <p>LinkedIn</p>
            </div>
            <button className="bg-yellow-300 py-2 px-5 rounded-full">Pricing ~ it's free</button>
        </section>
    )
}