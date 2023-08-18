function App() {
    return (
        <main className={"w-screen h-screen bg-neutral-600"}>
            <section className={"h-full flex flex-row justify-center items-center gap-8 container mx-auto my-auto"}>
                <article className={"flex flex-col gap-8"}>
                    <div className={"flex flex-row gap-8"}>
                        <div className={"flex w-[6rem] bg-white"}>
                            01
                        </div>

                        <div className={"flex flex-col gap-8 w-[14rem] bg-white rounded-2xl px-4 pt-4"}>
                            <div className={"flex flex-row gap-4"}>
                                <h6 className={"text-3xl font-bold"}>
                                    50
                                    <span className={"text-lg"}>+</span>
                                </h6>
                                <p>Companies join every month</p>
                            </div>

                            <div className={"flex flex-row items-end gap-4"}>
                                <div className={"flex flex-1 h-[4rem] bg-neutral-500"}></div>

                                <div className={"flex flex-1 h-[5rem] bg-neutral-500"}></div>

                                <div className={"flex flex-1 h-[7rem] bg-neutral-500"}></div>

                                <div className={"flex flex-1 h-[6rem] bg-neutral-500"}></div>
                            </div>
                        </div>
                    </div>

                    <div className={"flex flex-grow bg-white"}>
                        01
                    </div>
                </article>

                <article className={"flex flex-col gap-8"}>
                    <div className={"flex flex-col flex-grow"}>
                        <div className={"flex flex-col bg-black rounded-2xl"}>

                        </div>
                        <div className={"flex flex-row bg-white rounded-2xl px-4"}>
                            <div className={"flex flex-col py-4"}>
                                <span className={"text-xs uppercase font-bold"}>Guy Hawkins</span>
                                <span className={"text-xs uppercase mb-12"}>CEO & Founder</span>
                                <h2 className={"text-3xl font-medium uppercase tracking-tighter leading-7"}>Is the
                                    agency model evolving again?</h2>
                            </div>
                        </div>
                    </div>

                    <div className={"flex flex-row gap-8"}>
                        <div className={"flex w-[10rem] bg-white"}>
                            02
                        </div>

                        <div className={"flex w-[16rem] bg-white"}>
                            03
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default App
