import ContainerProject from "../components/ContainerProject.tsx";
import ContainerProjectMobil from "../components/ContainerProjectMobil.tsx";
import ContainerProjectWeb from "../components/ContainerProjectWeb.tsx";

export default function Projects() {
    return (
        <>
            <section
                className="flex flex-col md:flex-row gap-6 items-center justify-center md:w-5/6 lg:w-11/12 mx-auto mt-24">
                <div className="flex w-5/6 lg:flex-[3] bg-white h-96 rounded-2xl px-8 py-12">
                    <h1 className="text-3xl">I've been helping</h1>
                </div>

                <div className="flex w-5/6 lg:flex-[2] bg-black h-96 rounded-2xl px-4 py-12">
                    <h1 className="text-3xl text-white">Interface Design</h1>
                </div>
            </section>

            <ContainerProject>
                <ContainerProjectMobil>
                    <div className="flex flex-shrink-0 min-h-24 h-24">

                    </div>
                    <div className="flex flex-1 bg-yellow-50 rounded-2xl overflow-hidden">
                        <div className="flex w-8/12 mx-auto my-auto py-5">
                            <img className="rounded-2xl" src="/img/Respikar-Index.jpeg" alt="Image"/>
                        </div>
                    </div>
                </ContainerProjectMobil>

                <ContainerProjectWeb>
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

                    <div className="flex flex-1 bg-red-50 mt-4 rounded-2xl">
                        <div className="flex mx-auto my-auto w-10/12 lg:w-11/12 py-5 px-5">
                            <img className="hidden lg:flex rounded-2xl" src="/img/Residuos-Ambientales-720p.jpeg"
                                 alt="Residuos Ambientales"/>
                            <img className="lg:hidden rounded-2xl" src="/img/Residuos-Ambientales-Mobil.jpeg"
                                 alt="Residuos Ambientales"/>
                        </div>
                    </div>
                </ContainerProjectWeb>
            </ContainerProject>

            <ContainerProject>
                <ContainerProjectWeb>
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
                </ContainerProjectWeb>

                <ContainerProjectMobil>
                    <div className="flex flex-shrink-0 min-h-24 h-24">

                    </div>
                    <div className="flex flex-1 bg-blue-50 rounded-2xl overflow-hidden">
                        <div className="flex w-8/12 mx-auto my-auto py-5">
                            <img className="rounded-2xl" src="/img/Respikar-Home.jpeg" alt="Image"/>
                        </div>
                    </div>
                </ContainerProjectMobil>
            </ContainerProject>

            <ContainerProject>
                <ContainerProjectMobil>
                    <div className="flex flex-shrink-0 min-h-24 h-24">

                    </div>
                    <div className="flex flex-1 bg-yellow-50 rounded-2xl overflow-hidden">
                        <div className="flex w-8/12 mx-auto my-auto py-5">
                            <img className="rounded-2xl" src="/img/User.jpeg" alt="Image"/>
                        </div>
                    </div>
                </ContainerProjectMobil>

                <ContainerProjectWeb>
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
                </ContainerProjectWeb>
            </ContainerProject>

            <section
                className="flex flex-col md:flex-row gap-6 items-center justify-center w-5/6 lg:w-11/12 mx-auto mt-6">
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