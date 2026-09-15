import React from "react";
import {Link} from "react-router";

import Styles from './HomeSection.module.css'

type Variant = "Article" | "Course" | "Youtube" | "Patreon"

type Props = {
    id: string,
    title: string,
    subtitle: string,
    variant: Variant,
    classNameTitle?: string,
    classNameSubtitle?: string,
    children: React.ReactNode,
    buttonStyle: {
        to: string,
        title: string,
        reverse?: "true",
    }
}

const getClassNameSection = (variant: Variant) => {
    switch (variant) {
        case "Article":
            return Styles.White
        case "Course":
            return Styles.Blue
        case "Youtube":
            return Styles.Red
        case "Patreon":
            return Styles.Orange
        default:
            return ""
    }
}

export function HomeSection(props: Props) {
    return (
        <section
            aria-labelledby={props.id}
            className={`${Styles.HomeSection} ${getClassNameSection(props.variant)}`}>
            <div className="container flow">
                <header>
                    <h2 id={props.id} className={props.classNameTitle || ''}>{props.title}</h2>
                    <p className={props.classNameSubtitle || ''}>{props.subtitle}</p>
                </header>
                {props.children}
                <div className="pt:1.5rem pb:1rem"/>
                <Link
                    className="button"
                    to={props.buttonStyle.to}
                    data-reverse={props.buttonStyle.reverse}>
                    {props.buttonStyle.title}
                </Link>
            </div>
        </section>
    )
}