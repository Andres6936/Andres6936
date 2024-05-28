export default function Projects() {
    return (
        <>
            <section
                className="flex flex-col md:flex-row gap-6 items-center justify-center md:w-5/6 lg:w-3/4 mx-auto mt-24">
                <div className="flex w-5/6 lg:flex-[3] bg-white h-96 rounded-2xl px-8 py-12">
                    <h1 className="text-3xl">I've been helping</h1>
                </div>

                <div className="flex w-5/6 lg:flex-[2] bg-black h-96 rounded-2xl px-4 py-12">
                    <h1 className="text-3xl text-white">Interface Design</h1>
                </div>
            </section>

            <section
                className="flex flex-col md:flex-row gap-6 items-center justify-center md:w-5/6 lg:w-3/4 mx-auto mt-6">
                <div
                    className="flex flex-col overflow-hidden w-5/6 p-3 md:flex-[2] order-last md:order-none bg-white h-[36rem] 2xl:h-[48rem] rounded-2xl">
                    <div className="flex flex-col flex-1 bg-zinc-100 rounded-2xl">
                        <div className="flex min-h-28 h-28 bg-white rounded-b-3xl">

                        </div>
                        <div className="flex w-7/12 mx-auto my-auto">
                            <img className="w-full rounded-2xl" src="/img/Respikar-Index.jpeg" alt="Image"/>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col w-5/6 md:flex-[3] order-1 md:order-none bg-white h-[36rem] 2xl:h-[48rem] rounded-2xl px-4 pt-8 pb-4">
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

            <section
                className="flex flex-col md:flex-row gap-6 items-center justify-center md:w-5/6 lg:w-3/4 mx-auto mt-6">
                <div
                    className="flex flex-col w-5/6 md:flex-[3] order-1 md:order-none bg-white h-96 rounded-2xl px-4 pt-8 pb-4">
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

                <div className="flex w-5/6 md:flex-[2] order-last md:order-none bg-white h-96 rounded-2xl">

                </div>
            </section>

            <section
                className="flex flex-col md:flex-row gap-6 items-center justify-center md:w-5/6 lg:w-3/4 mx-auto mt-6">
                <div className="flex w-5/6 md:flex-[2] order-last md:order-none bg-white h-96 rounded-2xl">

                </div>

                <div
                    className="flex flex-col w-5/6 md:flex-[3] order-1 md:order-none bg-white h-96 rounded-2xl px-4 pt-8 pb-4">
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

            <section
                className="flex flex-col md:flex-row gap-6 items-center justify-center w-5/6 lg:w-3/4 mx-auto mt-6">
                <button
                    className="flex w-full lg:w-auto flex-[3] items-center justify-center bg-black hover:bg-zinc-800 text-white p-4 rounded-full">
                    See All - Template
                </button>

                <button
                    className="flex w-full lg:w-auto flex-[2] items-center justify-center bg-white hover:bg-yellow-50 p-4 rounded-full border-zinc-300 border">
                    Contact Me
                </button>
            </section>
        </>
    )
}