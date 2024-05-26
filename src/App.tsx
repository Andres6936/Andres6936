import DotPattern from "./DotPattern.tsx";
import NavigatorTop from "./sections/NavigatorTop.tsx";
import Welcome from "./sections/Welcome.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import WantStart from "./sections/WantStart.tsx";
import Footer from "./sections/Footer.tsx";
import DesignBy from "./sections/DesignBy.tsx";

export default function App() {
    return (
        <main className="relative p-4 lg:p-12">
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={"[mask-image:linear-gradient(to_bottom_right,white,#C5C5C5,#C5C5C5)] bg-zinc-100"}
            />

            <div className="xl:container mx-auto">
                <NavigatorTop/>
                <Welcome/>
                <Projects/>
                <Contact/>
                <WantStart/>
                <Footer/>
            </div>

            <DesignBy/>
        </main>
    )
}
