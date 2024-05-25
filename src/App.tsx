export default function App() {
    return (
        <main className="bg-zinc-100 p-12">
            <section className="flex flex-row justify-between items-center bg-white px-12 py-6 rounded-full">
                <div className="flex flex-row gap-4 justify-between">
                    <p>About</p>
                    <p>Works</p>
                    <p>Twitter</p>
                    <p>Dribble</p>
                    <p>LinkedIn</p>
                </div>
                <p>Pricing ~ it's free</p>
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

            <section className="flex flex-row gap-6 items-center justify-center w-3/4 mx-auto my-24">
                <div className="flex flex-[3] bg-white h-96 rounded-2xl">

                </div>

                <div className="flex flex-[2] bg-black h-96 rounded-2xl">

                </div>
            </section>
        </main>
    )
}
