import {ReactNode} from "react";

export default function ContainerProject({children}: { children: ReactNode }) {
    return (
        <section className="flex flex-col md:flex-row gap-6 items-center justify-center md:w-5/6 lg:w-3/4 mx-auto mt-6">
            {children}
        </section>
    )
}