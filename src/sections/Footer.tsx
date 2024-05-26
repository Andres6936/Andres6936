export default function Footer() {
    return (
        <section
            className="flex flex-col flex-wrap md:flex-row gap-4 lg:gap-0 justify-between bg-white rounded-2xl w-5/6 lg:w-3/4 mx-auto mt-24 p-8">
            <div>
                <p className="font-semibold text-zinc-400 mb-1">Work with us</p>
                <p className="hover:font-semibold">andres6936@live.com</p>
            </div>

            <hr className="md:hidden"/>

            <div>
                <p className="font-semibold text-zinc-400 mb-1">Follow us</p>
                <div className="flex flex-row gap-4">
                    <p className="hover:font-semibold">Github</p>
                    <p className="hover:font-semibold">Dribble</p>
                    <p className="hover:font-semibold">LinkedIn</p>
                </div>
            </div>

            <hr className="md:hidden"/>

            <div
                className="md:min-w-full lg:min-w-0 flex flex-row gap-3 items-center justify-end md:justify-center lg:justify-start md:border-t lg:border-0 md:pt-3 lg:pt-0">
                <div className="w-10 bg-yellow-300 aspect-square rounded-full">

                </div>
                <div>
                    <p className="font-semibold text-zinc-400 mb-1">Portfolio</p>
                    <p className="hover:font-semibold">Atlantis Template</p>
                </div>
            </div>
        </section>
    )
}