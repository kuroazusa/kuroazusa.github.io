import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './content.css'
import ArrowRight from "./assets/arrowright";
import { useState } from "preact/hooks";

export function Blog() {
    const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });
    const [ blogHo, setBlogHo ] = useState(false)
    return (
        <div style={{minHeight: "45vh", alignContent: "center", justifyItems: "center"}} id="blog">
            <motion.h2
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                class="subtitle"
            >
                Blogs
            </motion.h2>
            <motion.div 
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
            >
                <motion.h3>Recording my life, thoughts, and personal growth. </motion.h3>
                <div style={{display: "flex", position: "relative", justifyContent: "center"}}>
                    <motion.div 
                        className="button"
                        onHoverStart={() => setBlogHo(true)}
                        onHoverEnd={() => setBlogHo(false)}
                        onClick={() => window.open("https://kuroazusa.github.io/blog")}
                        >
                        <div className="buttoncontent">
                            <h3>Go to My Blog</h3>
                        </div>
                        <ArrowRight show={blogHo} />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}