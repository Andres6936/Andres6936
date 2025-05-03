import {Fragment} from "react";

import {Navigator} from "./sections/Navigator.tsx";
import {Footer} from "./sections/Footer.tsx";
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
