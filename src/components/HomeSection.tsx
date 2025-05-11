import React from "react";
import {Link} from "react-router";

import Styles from './HomeSection.module.css'

type Variant = "Article" | "Course" | "Youtube" | "Patreon"

type Props = {
    to: string,
    id: string,
    title: string,
    subtitle: string,
    titleButton: string,
    dataReverseButton?: "true",
    variant: Variant,
    classNameTitle?: string,
    classNameSubtitle?: string,
    children: React.ReactNode,
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
        <section aria-labelledby={props.id} className={`${Styles.HomeSection} ${getClassNameSection(props.variant)}`}>
            <div className="container flow">
                <header>
                    <h2 id={props.id} className={"section__title " + (props.classNameTitle || '')}>{props.title}</h2>
                    <p className={"section__subtitle " + (props.classNameSubtitle || '')}>{props.subtitle}</p>
                </header>
                {props.children}
                <Link to={props.to} className="button" data-reverse={props.dataReverseButton}>{props.titleButton}</Link>
            </div>
        </section>
    )
}