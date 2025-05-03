import {Fragment} from "react";

import {Navigator} from "./sections/Navigator.tsx";
import {Footer} from "./sections/Footer.tsx";
import {AboutContent} from "./sections/AboutContent.tsx";

export default function About() {
    return (
        <Fragment>
            <Navigator/>
            <AboutContent/>
            <Footer/>
        </Fragment>
    )
}
