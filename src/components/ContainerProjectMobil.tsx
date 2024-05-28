import {ReactNode} from "react";

export default function ContainerProjectMobil({children}: { children: ReactNode }) {
    return (
        <div
            className="flex flex-col w-5/6 p-3 md:flex-[2] order-last md:order-none bg-white h-[38rem] xl:h-[40rem] 2xl:h-[50rem] rounded-2xl">
            {children}
        </div>
    )
}