import {useEffect, useState} from "react";

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
}

// Reference from: https://magicui.design/docs/components/typing-animation
export default function TypingAnimation({
                                            text,
                                            duration = 200,
                                            className,
                                        }: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [i, setI] = useState<number>(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prevState) => prevState + text.charAt(i));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [duration, i]);

    return (
        <h1
            className={'select-none text-center font-display text-4xl bg-yellow-300 px-6 py-4 rounded-2xl font-semibold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] ' + className}>
            {displayedText ? displayedText : text}
        </h1>
    );
}
