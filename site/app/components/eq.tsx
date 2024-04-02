'use client'

import { useEffect, useRef } from "react";
import anime from 'animejs';

interface equationProps {
    equation: string;
    className?: string;
    scale?: number;
    start_color: string;
    end_color: string;
    draw_ms: number;
    delay_ms?: number;
}


function createFillAnimatorTeX(
    svg_obj: HTMLElement,
    timeDuration: number,
    delayDuration: string | number,
    start_color: string,
    end_color: string
  ) {
    var myTimeline = anime.timeline();
    const g = svg_obj.querySelectorAll('g');
    const use = svg_obj.querySelectorAll('use');
    
    // TODO pick apart this behavior and document it
    g[0].setAttribute('stroke', end_color);
    g[0].setAttribute('stroke-width', "10");
    g[0].setAttribute('fill', end_color);
    svg_obj.setAttribute('fill', end_color);

    let p: any[] = [];
    use.forEach(
      (
        element: { getAttribute: (arg0: string) => any },
        index: number
      ) => {
        p[index] = svg_obj.querySelectorAll(
          element.getAttribute('xlink:href')
        );
      }
    );
  
    myTimeline.add(
        {
          targets: [
            svg_obj.querySelectorAll('path'),
            svg_obj.querySelectorAll('rect')
          ],
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeOutSine',
          duration: timeDuration
        },
        delayDuration
      ).add(
        {
          targets: [use, g],
          fill: [start_color, end_color],
          easing: 'easeInOutQuad',
          duration: timeDuration
        },
        delayDuration
      );
  }

export default function Equation(props: equationProps){
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
      // window is accessible here.
      if(typeof window?.MathJax !== "undefined"){
        let eq = window.MathJax.tex2svg(props.equation).children[0];
        let scale = props.scale || 1;
        let height = eq.getAttribute("height");
        let width = eq.getAttribute("width");
        eq.setAttribute("width", `${scale * parseFloat(width)}ex`);
        eq.setAttribute("height", `${scale * parseFloat(height)}ex`);
        ref.current?.appendChild(eq);
        createFillAnimatorTeX(
          eq,
          props.draw_ms,
          props.delay_ms || 0,
          props.start_color,
          props.end_color
        );
        return() => {
            ref.current?.removeChild(eq);
        }
      }else{
        console.log("MathJax not loaded")
      }
    }, []);
    
    return <span ref={ref}></span>;
};
