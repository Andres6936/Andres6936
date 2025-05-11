import React from "react";
import {Link} from "react-router";

type Variant = "Article"

type Props = {
    to: string,
    id: string,
    title: string,
    subtitle: string,
    titleButton: string,
    variant: Variant,
    children: React.ReactNode,
}

const getClassNameSection = (variant: Variant) => {
    switch (variant) {
        case "Article":
            return "article"
        default:
            return ""
    }
}

export function HomeSection(props: Props) {
    return (
        <section aria-labelledby={props.id} className={"home-section " + getClassNameSection(props.variant)}>
            <div className="container flow">
                <header>
                    <h2 id={props.id} className="section__title">{props.title}</h2>
                    <p className="section__subtitle">{props.subtitle}</p>
                </header>
                {props.children}
                <Link to={props.to} className="button">{props.titleButton}</Link>
            </div>
        </section>
    )
}