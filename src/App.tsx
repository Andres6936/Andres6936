import DotPattern from "./DotPattern.tsx";

export default function App() {
    return (
        <main className="relative p-12">
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={"[mask-image:linear-gradient(to_bottom_right,white,#C5C5C5,#C5C5C5)] bg-zinc-100"}
            />

            <section
                className="flex flex-row justify-between items-center bg-white px-4 py-4 rounded-full w-3/4 2xl:w-3/5 z-10 mx-auto">
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

            <section className="container text-center my-24 mx-auto">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <h1 className="text-7xl font-semibold bg-yellow-300 w-fit px-6 py-4 rounded-2xl">Hey, I'm Joan</h1>
                    <h2 className="text-6xl font-semibold">a web developer with</h2>
                    <p className="text-lg w-3/4 mt-8">
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it,
                        simply because it is pain..."
                    </p>
                </div>
            </section>

            <section
                className="flex flex-row gap-6 items-center justify-center text-center bg-white rounded-2xl w-fit mx-auto px-12 py-6">
                <div>
                    <p className="text-3xl font-semibold">%70</p>
                    <p>Job achievements</p>
                </div>

                <div>
                    <p className="text-3xl font-semibold">$8.4M</p>
                    <p>Job achievements</p>
                </div>

                <div>
                    <p className="text-3xl font-semibold">1.6K</p>
                    <p>Job achievements</p>
                </div>

                <div>
                    <p className="text-3xl font-semibold">+24</p>
                    <p>Job achievements</p>
                </div>
            </section>

            <section className="flex flex-row gap-6 items-center justify-center w-3/4 mx-auto mt-24">
                <div className="flex flex-[3] bg-white h-96 rounded-2xl px-8 py-12">
                    <h1 className="text-3xl">I've been helping</h1>
                </div>

                <div className="flex flex-[2] bg-black h-96 rounded-2xl px-4 py-12">
                    <h1 className="text-3xl text-white">Interface Design</h1>
                </div>
            </section>

            <section className="flex flex-row gap-6 items-center justify-center w-3/4 mx-auto mt-6">
                <div className="flex flex-[2] bg-white h-96 rounded-2xl">

                </div>

                <div className="flex flex-col flex-[3] bg-white h-96 rounded-2xl px-4 pt-8 pb-4">
                    <div className="flex flex-row justify-between items-center px-6">
                        <div className="flex flex-col flex-1">
                            <h1 className="text-3xl">Lemon Template</h1>
                            <p className="mt-2">An template from Flowbase</p>
                        </div>

                        <div>
                            <div className="w-12 aspect-square bg-zinc-100 border rounded-full">

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 bg-zinc-100 mt-4 rounded-2xl">

                    </div>
                </div>
            </section>

            <section className="flex flex-row gap-6 items-center justify-center w-3/4 mx-auto mt-6">
                <div className="flex flex-col flex-[3] bg-white h-96 rounded-2xl px-4 pt-8 pb-4">
                    <div className="flex flex-row justify-between items-center px-6">
                        <div className="flex flex-col flex-1">
                            <h1 className="text-3xl">Sanctuary Template</h1>
                            <p className="mt-2">An template from Flowbase</p>
                        </div>

                        <div>
                            <div className="w-12 aspect-square bg-zinc-100 border rounded-full">

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 bg-zinc-100 mt-4 rounded-2xl">

                    </div>
                </div>

                <div className="flex flex-[2] bg-white h-96 rounded-2xl">

                </div>
            </section>

            <section className="flex flex-row gap-6 items-center justify-center w-3/4 mx-auto mt-6">
                <div className="flex flex-[2] bg-white h-96 rounded-2xl">

                </div>

                <div className="flex flex-col flex-[3] bg-white h-96 rounded-2xl px-4 pt-8 pb-4">
                    <div className="flex flex-row justify-between items-center px-6">
                        <div className="flex flex-col flex-1">
                            <h1 className="text-3xl">Quillow Template</h1>
                            <p className="mt-2">An template from Flowbase</p>
                        </div>

                        <div>
                            <div className="w-12 aspect-square bg-zinc-100 border rounded-full">

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 bg-zinc-100 mt-4 rounded-2xl">

                    </div>
                </div>
            </section>

            <section className="flex flex-row gap-6 items-center justify-center w-3/4 mx-auto mt-6">
                <div
                    className="flex flex-[2] items-center justify-center bg-white p-4 rounded-full border-zinc-300 border">
                    <p>Contact Me</p>
                </div>

                <div className="flex flex-[3] items-center justify-center bg-black text-white p-4 rounded-full">
                    <p>See All - Template</p>
                </div>
            </section>

            <section className="flex flex-col bg-white rounded-2xl w-3/4 mx-auto mt-24 p-8">
                <h1 className="text-4xl text-center">Frequently Asked Questions</h1>
                <p className="text-center my-6 w-3/4 mx-auto">Our design team helps client achieve their marketing and
                    business goals through user-friendly</p>

                <div className="flex flex-col gap-4">
                    <div className="border p-4 rounded-2xl">
                        <p>Brand Design & Direction</p>
                    </div>

                    <div className="border p-4 rounded-2xl">
                        <p>Brand Design & Direction</p>
                    </div>

                    <div className="border p-4 rounded-2xl">
                        <p>Brand Design & Direction</p>
                    </div>
                </div>

                <button className="text-white bg-black rounded-full px-8 py-4 w-fit mx-auto mt-8">
                    Contact Me - it's free
                </button>
            </section>

            <section className="flex flex-col bg-white rounded-2xl w-3/4 mx-auto mt-24 p-8 py-16">
                <div className="border border-zinc-300 p-2 w-3/6 mx-auto rounded-full">
                    <h1 className="text-5xl font-semibold text-center ">Want to start</h1>
                </div>
                <h1 className="text-5xl font-semibold text-center w-3/6 mx-auto">a project?</h1>

                <button
                    className="flex flex-row gap-8 justify-around items-center bg-yellow-300 rounded-full px-1 py-1 w-fit mx-auto mt-12">
                    <p className="px-4 font-semibold">Let's Talk</p>
                    <div
                        className="flex items-center justify-center w-12 aspect-square bg-white rounded-full shadow-lg">
                        <div className="w-3 bg-black rounded-full aspect-square">

                        </div>
                    </div>
                </button>
            </section>

            <section className="flex flex-row justify-between bg-white rounded-2xl w-3/4 mx-auto mt-24 p-8">
                <div>
                    <p className="font-semibold text-zinc-400 mb-1">Work with us</p>
                    <p>andres6936@live.com</p>
                </div>

                <div>
                    <p className="font-semibold text-zinc-400 mb-1">Follow us</p>
                    <div className="flex flex-row gap-4">
                        <p>Github</p>
                        <p>Dribble</p>
                        <p>LinkedIn</p>
                    </div>
                </div>

                <div className="flex flex-row gap-3 items-center">
                    <div className="w-10 bg-yellow-300 aspect-square rounded-full">

                    </div>
                    <div>
                        <p className="font-semibold text-zinc-400 mb-1">Portfolio</p>
                        <p>Atlantis Template</p>
                    </div>
                </div>
            </section>

            <p className="text-center my-12 text-zinc-500">Design by Batuhan Kara made by Joan Andrés</p>
        </main>
    )
}
