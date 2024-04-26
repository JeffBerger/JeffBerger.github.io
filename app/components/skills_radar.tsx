import React, { useEffect, useRef } from 'react';

import Sunburst from 'sunburst-chart';

import data from '../data';

export default function SkillsRadar () {
   const skillgraph = useRef(null);

   useEffect(() => {
      const skills_div = skillgraph.current;
      if (skills_div) {
        Sunburst()
            .data(data)
            .size('size')
            .width(600)
            .tooltipContent(
                (_, node: any) => {
                    return node.data.text;
                }
            )
            .labelOrientation('angular')
            .tooltipTitle((d, node: any) => {return node.data.name})
            .color('color')
            (skills_div);
      }
      return () => {
        const skills_div = skillgraph.current;
        if (skills_div) {
            skills_div.innerHTML = '';
        }
    }
  } , []);

  return <div className='w-600' ref={skillgraph} />;
}