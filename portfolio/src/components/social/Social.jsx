import React from "react";
import './social.css'
import linkedin from "../icons/linkedin.svg"
import github from "../icons/github.svg"
import instagram from "../icons/instagram.svg"
import discord from "../icons/discord.svg"
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";



gsap.registerPlugin(CSSRulePlugin);

function Social(){
    const soc = useRef();
    const s=gsap.utils.selector(soc)
    const tl = gsap.timeline();
    
     useEffect(()=>{

        tl.to(s(".icon"), {
            duration: 1,
            clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
          }),"-=1";
     })
    

    return(
        <div className="outerIcon" ref={soc}>
            <div  ><a href="https://www.linkedin.com/in/madhur-vatsal/"><img src={linkedin}  className="icon" alt="" /></a></div>
            <div  ><a href="https://github.com/Vatsalmadhur"><img src={github}  className="icon" alt="" /></a></div>
            <div  ><a href="https://www.instagram.com/madhur_vatsal/"><img src={instagram}   className="icon" alt="" /></a></div>
            <div  ><a href="https://discordapp.com/users/697446013996105768"><img src={discord}  className="icon" alt="" /></a></div>
        </div>
    )
}
export default Social;