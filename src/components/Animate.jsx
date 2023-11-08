import { useInView } from "framer-motion";
import { useRef } from "react";
import "./Animate.css";

function Section ({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    return (
        <section ref={ref}>
            <span 
                style={{
                    transform:isInView ? "none" : "translateY(40px)",
                    opacity: isInView ? 1 : 0,
                    transition:"all ease-in 0.6s"
                }}>
                    {children}
                </span>
        </section>
    )
}

export default Section;