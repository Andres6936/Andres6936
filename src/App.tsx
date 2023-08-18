function App() {
    return (
        <main className={"w-screen h-screen home-gradient-screen"}>
            <section className={"h-full flex flex-row justify-center items-center gap-8 container mx-auto my-auto"}>
                <article className={"flex flex-col gap-8"}>
                    <div className={"flex flex-row gap-8"}>
                        <div className={"flex flex-col items-end w-[6rem]"}>
                            <div className={"flex flex-row justify-center items-center flex-1 w-[5rem]"}>
                                <span
                                    className={"text-xs rotate-[270deg] mx-2 w-[1rem] translate-y-12 uppercase whitespace-nowrap"}>Latest News & Insight</span>
                                <span
                                    className={"text-sm rotate-[270deg] w-[1rem] translate-y-12 font-medium whitespace-nowrap"}>AI Adoption lessons</span>
                                <span
                                    className={"text-sm rotate-[270deg] w-[1rem] translate-y-12 font-medium whitespace-nowrap"}>from real life.</span>
                            </div>

                            <div className={"flex justify-center items-center rounded-full bg-black w-[5rem] h-[5rem]"}>
                                <span className={"text-white rotate-[270deg] font-bold text-3xl"}>J</span>
                            </div>
                        </div>

                        <div className={"flex flex-col gap-8 w-[14rem] bg-white rounded-2xl px-5 pt-5"}>
                            <div className={"flex flex-row gap-4"}>
                                <h6 className={"text-5xl font-bold"}>
                                    50
                                    <span className={"text-lg"}>+</span>
                                </h6>
                                <p>Companies join every month</p>
                            </div>

                            <div className={"flex flex-row items-end gap-4"}>
                                <div className={"flex flex-1 h-[8rem] bg-neutral-500"}></div>

                                <div className={"flex flex-1 h-[9rem] bg-neutral-500"}></div>

                                <div className={"flex flex-1 h-[11rem] bg-neutral-500"}></div>

                                <div className={"flex flex-1 h-[10rem] bg-neutral-500"}></div>
                            </div>
                        </div>
                    </div>

                    <div className={"ml-4 p-4 flex flex-col gap-8 w-[21rem] bg-white rounded-2xl"}>
                        <div className={"flex flex-row"}>
                            <h3 className={"text-2xl mr-12 font-medium uppercase tracking-tighter leading-6"}>Creation
                                of a Personal System and Analytics</h3>
                            <div>
                                <div
                                    className={"flex justify-center items-center w-[2rem] h-[2rem] rounded-full bg-black"}>
                                    <span className={"text-white font-bold"}>J</span>
                                </div>
                            </div>
                        </div>

                        <p className={"text-xs font-medium pr-[6rem]"}>Make insight-driven decisions faster and easier
                            with the
                            intelligent data and analytics
                            platform for marketing</p>

                        <div className={"bg-blue-300 w-[19rem] h-[12.5rem] rounded-2xl"}>

                        </div>
                    </div>
                </article>

                <article className={"flex flex-col gap-8"}>
                    <div className={"flex flex-row flex-grow"}>
                        <div className={"flex flex-col gap-1 justify-end items-center bg-black rounded-2xl p-4"}>
                            <div className={"h-[1px] bg-white w-[2rem]"}></div>
                            <div className={"h-[3px] bg-white w-[2rem]"}></div>
                            <div className={"h-[2px] bg-white w-[2rem]"}></div>
                            <div className={"h-[1px] bg-white w-[2rem]"}></div>
                            <div className={"h-[1px] bg-white w-[2rem]"}></div>
                            <div className={"h-[2px] bg-white w-[2rem]"}></div>
                            <div className={"h-[2px] bg-white w-[2rem]"}></div>
                            <div className={"h-[1px] bg-white w-[2rem]"}></div>
                            <div className={"h-[3px] bg-white w-[2rem]"}></div>
                            <div className={"h-[2px] bg-white w-[2rem]"}></div>
                            <div className={"h-[1px] bg-white w-[2rem]"}></div>
                            <div className={"h-[1px] bg-white w-[2rem]"}></div>
                        </div>
                        <div className={"flex flex-row gap-4 bg-white rounded-2xl px-8"}>
                            <div className={"flex flex-col w-[6rem] gap-12 py-7"}>
                                <div>
                                    <div
                                        className={"flex justify-center items-center w-[2rem] h-[2rem] rounded-full bg-black"}>
                                        <span className={"text-white font-bold"}>J</span>
                                    </div>
                                </div>

                                <div className={"flex flex-col"}>
                                    <span className={"text-xs uppercase"}>When</span>
                                    <span className={"text-xs uppercase font-bold"}>04.07.2023</span>
                                </div>
                            </div>

                            <div className={"flex flex-col w-[15rem] py-7 mr-8"}>
                                <span className={"text-xs uppercase font-bold"}>Guy Hawkins</span>
                                <span className={"text-xs uppercase mb-12"}>CEO & Founder</span>
                                <h2 className={"text-3xl font-medium uppercase tracking-tighter leading-7"}>Is the
                                    agency model evolving again?</h2>

                                <p className={"mt-8 mr-6 text-xs tracking-tighter"}>Just a few years ago, marketing
                                    analytics was considered a signal of innovation, and
                                    an optional addition to the agency's toolbox.</p>
                            </div>

                            <div className={"flex w-[7rem] h-full bg-gray-600"}></div>
                        </div>
                    </div>

                    <div className={"flex flex-row gap-12"}>
                        <div className={"flex flex-col gap-12 w-[14rem]"}>
                            <span className={"text-xs uppercase"}>Media Center</span>

                            <p className={"text-xs uppercase font-medium tracking-tighter"}>Databest Expands Executive
                                Team Amidst Rapid Growth</p>

                            <div className={"w-[14rem] h-[7rem] bg-black rounded-2xl"}></div>

                            <div className={"w-[14rem] h-[7rem] bg-white rounded-2xl"}></div>
                        </div>

                        <div className={"flex justify-center items-center rounded-2xl w-[23rem] bg-white"}>
                            <h1 className={"text-4xl uppercase font-bold text-center tracking-tighter px-[6rem]"}>Your
                                Best Marketing & Data Analyser</h1>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default App
