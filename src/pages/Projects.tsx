import {Fragment} from "react";

import {Navigator} from "../layout/Navigator.tsx";
import {Footer} from "../layout/Footer.tsx";
import {ProjectsContent} from "../sections/ProjectsContent.tsx";

export default function Projects() {
    return (
        <Fragment>
            <Navigator/>
            <ProjectsContent/>
            <Footer/>
        </Fragment>
    )
}
