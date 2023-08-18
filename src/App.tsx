function App() {
    return (
        <main className={"w-screen h-screen bg-neutral-600"}>
            <section className={"h-full flex flex-col justify-center items-center gap-8 container mx-auto my-auto"}>
                <article className={"flex flex-row gap-8"}>
                    <div className={"flex w-[6rem] bg-white"}>
                        01
                    </div>

                    <div className={"flex w-[14rem] bg-white"}>
                        02
                    </div>

                    <div className={"flex w-[26rem] bg-white"}>
                        02
                    </div>
                </article>

                <article className={"flex flex-row gap-8"}>
                    <div className={"flex w-[20rem] bg-white"}>
                        01
                    </div>

                    <div className={"flex w-[6rem] bg-white"}>
                        02
                    </div>

                    <div className={"flex w-[20rem] bg-white"}>
                        03
                    </div>
                </article>
            </section>
        </main>
    )
}

export default App
