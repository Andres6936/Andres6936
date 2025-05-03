import {Fragment} from "react";

import {Navigator} from "./layout/Navigator.tsx";
import {Footer} from "./layout/Footer.tsx";
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
