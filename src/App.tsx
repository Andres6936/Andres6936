export default function App() {
    return (
        <main className="bg-zinc-100 p-12">
            <section className="flex flex-row justify-between items-center bg-white px-4 py-4 rounded-full">
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

            <section className="container text-center my-24">
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
        </main>
    )
}
