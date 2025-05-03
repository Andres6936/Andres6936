import {Fragment} from "react";

import {Navigator} from "../layout/Navigator.tsx";
import {MainContent} from "../sections/MainContent.tsx";
import {Footer} from "../layout/Footer.tsx";

export default function App() {
    return (
        <Fragment>
            <Navigator/>
            <MainContent/>
            <Footer/>
        </Fragment>
    )
}
