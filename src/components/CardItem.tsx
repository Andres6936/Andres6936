import React from "react";
import {merge} from "../lib/utility";

import Styles from './CardItem.module.css'

function Root(props: React.ComponentPropsWithRef<'div'>) {
    return (
        <div {...props} className={merge(Styles.CourseCard, "flow")}/>
    )
}

type TitleProps = {
    to: string,
    title: string,
}

function Title(props: TitleProps) {
    return (
        <h2 className="course-title">
            <a href={props.to}>{props.title}</a>
        </h2>
    )
}

type LabelsProps = {
    labels: string[],
}

function Labels(props: LabelsProps) {
    return props.labels.map((label, index) => (
        <p key={index} className="label">
            {label}
        </p>
    ))
}

function Description(props: React.ComponentPropsWithRef<'div'>) {
    return (
        <div {...props} className={merge("course-description flow")}/>
    )
}

function Button(props: React.ComponentPropsWithRef<'a'>) {
    return (
        <a {...props} className={merge("button")}/>
    )
}

export {
    Root,
    Title,
    Labels,
    Description,
    Button,
}