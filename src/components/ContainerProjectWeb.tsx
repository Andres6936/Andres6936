import {ReactNode} from "react";

export default function ContainerProjectWeb({children}: { children: ReactNode }) {
    return (
        <div
            className="flex flex-col w-5/6 md:flex-[4] order-1 lg:order-none bg-white h-[42rem] xl:h-[40rem] 2xl:h-[50rem] rounded-2xl px-4 pt-8 pb-4">
            {children}
        </div>
    )
}