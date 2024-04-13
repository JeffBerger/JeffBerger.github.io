'use client'

import { useEffect } from "react";

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
    const isInview = useInView(scope, { once: true });

    useEffect(() => {
      // window is accessible here.
      if(typeof window?.MathJax !== "undefined"){
        let eq = window.MathJax.tex2svg(props.equation).children[0];
        let scale = props.scale || 1;
        let height = eq.getAttribute("height");
        let width = eq.getAttribute("width");
        eq.setAttribute("width", `${scale * parseFloat(width)}ex`);
        eq.setAttribute("height", `${scale * parseFloat(height)}ex`);

        scope.current?.appendChild(eq);
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
        return() => {scope.current?.removeChild(eq);}
      }else{
        console.log("MathJax not loaded")
      }
    }, [isInview]);
    

    return <span ref={scope}/>;
};
