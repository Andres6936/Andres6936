import {Fragment} from "react";

import {Navigator} from "./sections/Navigator.tsx";
import {Footer} from "./sections/Footer.tsx";
import {ProjectsContent} from "./sections/ProjectsContent.tsx";

export default function Projects() {
    return (
        <Fragment>
            <Navigator/>
            <ProjectsContent/>
            <Footer/>
        </Fragment>
    )
}
