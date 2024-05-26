import TypingAnimation from "../components/TypingAnimation.tsx";

export default function Welcome() {
    return (
        <>
            <section className="container text-center my-24 mx-auto">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <TypingAnimation text={"Hey, I'm Joan"}/>
                    <h2 className="select-none font-display text-3xl md:text-6xl font-semibold">a web developer
                        with</h2>
                    <p className="text-lg w-3/4 mt-8">
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it,
                        simply because it is pain..."
                    </p>
                </div>
            </section>

            <section
                className="select-none flex flex-col md:flex-row gap-6 items-center justify-center text-center bg-white rounded-2xl w-5/6 lg:w-fit mx-auto px-12 py-6">
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