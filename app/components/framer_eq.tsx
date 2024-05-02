'use client'

import React, { useEffect, useState } from "react";

import { useInView, useAnimate} from "framer-motion";

interface equationProps {
    equation: string;
    className?: string;
    scale?: number;
    start_color: string;
    end_color: string;
    draw_sec: number;
    delay_sec?: number;
    width?: number;
    height?: number;
}

export default function MotionEquation(props: equationProps){
    const [scope, animate] = useAnimate()
    const [mathjaxLoaded, setMathjaxLoaded] = useState(false);
    const isInview = useInView(scope, { once: true });

    const test_mathjax = () => {
      if((window as any).MathJax){
        setMathjaxLoaded(true);  // Used to trigger a rerender
      } else {
        setMathjaxLoaded(false);
      }
    }

    useEffect(() => {
      // window is accessible here.
      test_mathjax();
      if((window as any).MathJax){
        const eq = (window as any).MathJax.tex2svg(props.equation).children[0];
        const scale = props.scale || 1;
        if (props.height && props.width) {
            eq.setAttribute("width", `${props.width}px`);
            eq.setAttribute("height", `${props.height}px`);
        } else {
            const height = props.height || parseFloat(eq.getAttribute("height"));
            const width = props.width || parseFloat(eq.getAttribute("width"));
            eq.setAttribute("width", `${scale * width}ex`);
            eq.setAttribute("height", `${scale * height}ex`);
        }
        const scope_target = scope.current;

        scope_target.appendChild(eq);
        if (isInview) {
            animate(
                "path,rect",
                {
                    pathLength: [0, 1, 1],
                    strokeWidth: [5, 15, 5],
                    fill: [props.start_color, props.start_color, props.end_color],
                },
                {
                    duration: props.draw_sec,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: props.delay_sec || 0
                }
            )
        }
        return () => {scope_target.removeChild(eq);}
      }else{
        setTimeout(test_mathjax, 300);
      }
    }, [
        animate,
        mathjaxLoaded,
        isInview,
        scope,
        props.equation,
        props.start_color,
        props.end_color,
        props.draw_sec,
        props.delay_sec,
        props.scale,
        props.width,
        props.height
    ]);

    return <span ref={scope}/>;
};
