import {useId} from "react";

interface DotPatternProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cr?: number;
    className?: string;

    [key: string]: unknown;
}

// Reference from: https://magicui.design/docs/components/dot-pattern
export default function DotPattern({
                                       width = 16,
                                       height = 16,
                                       x = 0,
                                       y = 0,
                                       cr = 1,
                                       className,
                                       ...props
                                   }: DotPatternProps) {
    const id = useId();

    return (
        <svg
            aria-hidden="true"
            className={"pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80 -z-10 " + className}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <circle id="pattern-circle" cx={width / 2} cy={height / 2} r={cr}/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`}/>
        </svg>
    );
}
