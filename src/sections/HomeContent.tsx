import {Hero} from "../components/Hero.tsx";
import {Red} from "../components/Red.tsx";
import {Blue} from "../components/Blue.tsx";
import {Yellow} from "../components/Yellow.tsx";
import {Orange} from "../components/Orange.tsx";

export function HomeContent() {
    return (
        <main id="main-content">
            <Hero/>
            <Red/>
            <Blue/>
            <Yellow/>
            <Orange/>
        </main>
    )
}