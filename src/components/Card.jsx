import React from 'react'
import { motion } from "framer-motion";

 
export default function Card() {
  return (
    <>
    <div class="grid grid-cols-4 gap-4">
        <div>
        <Kard
       title={"Portfolio Website"}
       summary="A professional portfolio website using Next JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive.
" 
       />
        </div>
    </div>
    </>
  )
}
