export default function Welcome() {
    return (
        <>
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

        </>
    )
}