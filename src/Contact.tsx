import {Fragment} from "react";

import {Navigator} from "./layout/Navigator.tsx";
import {Footer} from "./layout/Footer.tsx";
import {ContactContent} from "./sections/ContactContent.tsx";

export default function Contact() {
    return (
        <Fragment>
            <Navigator/>
            <ContactContent/>
            <Footer/>
        </Fragment>
    )
}
