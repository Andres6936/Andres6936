export default function Footer() {
    return (
        <section
            className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between bg-white rounded-2xl w-5/6 lg:w-3/4 mx-auto mt-24 p-8">
            <div>
                <p className="font-semibold text-zinc-400 mb-1">Work with us</p>
                <p>andres6936@live.com</p>
            </div>

            <hr className="lg:hidden"/>

            <div>
                <p className="font-semibold text-zinc-400 mb-1">Follow us</p>
                <div className="flex flex-row gap-4">
                    <p>Github</p>
                    <p>Dribble</p>
                    <p>LinkedIn</p>
                </div>
            </div>

            <hr className="lg:hidden"/>

            <div className="flex flex-row gap-3 items-center justify-end lg:justify-start">
                <div className="w-10 bg-yellow-300 aspect-square rounded-full">

                </div>
                <div>
                    <p className="font-semibold text-zinc-400 mb-1">Portfolio</p>
                    <p>Atlantis Template</p>
                </div>
            </div>
        </section>
    )
}