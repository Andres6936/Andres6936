export default function Contact() {
    return (
        <section className="flex flex-col bg-white rounded-2xl w-5/6 lg:w-3/4 xl:w-3/6 mx-auto mt-24 p-8">
            <h1 className="text-4xl text-center">Frequently Asked Questions</h1>
            <p className="text-center my-6 w-full lg:w-3/4 mx-auto">Our design team helps client achieve their marketing
                and
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

            <button className="text-white bg-black hover:bg-zinc-800 rounded-full px-8 py-4 w-fit mx-auto mt-8">
                Contact Me - it's free
            </button>
        </section>
    )
}