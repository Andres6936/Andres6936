import {Fragment} from "react";

import {Navigator} from "./sections/Navigator.tsx";
import {MainContent} from "./sections/MainContent.tsx";
import {Footer} from "./sections/Footer.tsx";

export default function App() {
    return (
        <Fragment>
            <Navigator/>
            <MainContent/>
            <Footer/>
        </Fragment>
    )
}
