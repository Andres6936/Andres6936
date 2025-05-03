import {Fragment} from "react";

import {Navigator} from "../layout/Navigator.tsx";
import {HomeContent} from "../sections/HomeContent.tsx";
import {Footer} from "../layout/Footer.tsx";

export default function Home() {
    return (
        <Fragment>
            <Navigator/>
            <HomeContent/>
            <Footer/>
        </Fragment>
    )
}
