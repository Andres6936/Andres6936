import {ReactNode} from "react";

export default function ContainerProject({children}: { children: ReactNode }) {
    return (
        <section
            className="flex flex-col lg:flex-row gap-6 items-center justify-center md:w-5/6 lg:w-11/12 mx-auto mt-6">
            {children}
        </section>
    )
}