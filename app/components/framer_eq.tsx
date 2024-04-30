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
}

export default function MotionEquation(props: equationProps){
    const [scope, animate] = useAnimate()
    const [mathjaxLoaded, setMathjaxLoaded] = useState(false);
    const isInview = useInView(scope, { once: true });

    const test_mathjax = () => {
      if((window as any).MathJax){
        setMathjaxLoaded(true);  // Used to trigger a rerender
      }
    }

    useEffect(() => {
      // window is accessible here.
      test_mathjax();
      if((window as any).MathJax){
        const eq = (window as any).MathJax.tex2svg(props.equation).children[0];
        const scale = props.scale || 1;
        const height = eq.getAttribute("height");
        const width = eq.getAttribute("width");
        const scope_target = scope.current;
        eq.setAttribute("width", `${scale * parseFloat(width)}ex`);
        eq.setAttribute("height", `${scale * parseFloat(height)}ex`);

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
    });

    return <span ref={scope}/>;
};
