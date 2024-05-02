'use client'

import React, { useEffect, useRef, useState } from 'react';

import data from '../data';

export default function SkillsRadar () {
   const skillgraph = useRef(null);
   const [sunburstLoaded, setSunburstLoaded] = useState(false);

   function test_sunburst () {
    if((window as any).Sunburst){
      setSunburstLoaded(true);  // Used to trigger a rerender
    } else{
      setSunburstLoaded(false);
    }
  }

   useEffect(() => {
      if ((window as any).Sunburst) {
          const skills_div = skillgraph.current;
          if (skills_div) {
            (window as any).Sunburst()
                .data(data)
                .size('size')
                .width(400)
                .height(400)
                .excludeRoot(true)
                .tooltipContent(
                    (_: any, node: any) => {
                        return node.data.text;
                    }
                )
                .labelOrientation('angular')
                .tooltipTitle((_: any, node: any) => {return node.data.name})
                .color('color')
                (skills_div);
          }
          return () => {
            if (skills_div) {
                (skills_div as any).innerHTML = '';
            }
          }
      } else {
        setSunburstLoaded(false);
        setTimeout(test_sunburst, 300);
      }
  } , [skillgraph, sunburstLoaded]);

  return <div className='w-600' ref={skillgraph} />;
}