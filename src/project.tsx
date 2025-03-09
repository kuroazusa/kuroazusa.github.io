import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './content.css'
import ArrowRight from "./assets/arrowright";
import { useState } from "preact/hooks";

export function MyProjects() {
    const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });
    
    const [pj1, setPj1] = useState(false);
    const [pj2, setPj2] = useState(false);
    const [pj3, setPj3] = useState(false);
    return (
        <div style={{minHeight: "45vh", alignContent: "center"}} id="project">
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
                My Projects
            </motion.h2>
            <motion.div 
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                class="cardcon"
            >
                <motion.div 
                    className="card"
                    onHoverStart={() => setPj1(true)}
                    onHoverEnd={() => setPj1(false)}
                >
                    <div className="cardcontent">
                        <h3>hugo-theme-myhue</h3>
                        <p>A Material You Style Hugo Theme</p>
                    </div>
                    <ArrowRight show={pj1}/>
                </motion.div>
                <motion.div 
                    className="card"
                    onHoverStart={() => setPj2(true)}
                    onHoverEnd={() => setPj2(false)}
                >
                    <div className="cardcontent">
                        <h3>SDSZ Space</h3>
                        <p>ESBNU Fourm and Class Space</p>
                    </div>
                    <ArrowRight show={pj2}/>
                </motion.div>
                <motion.div 
                    className="card"
                    onHoverStart={() => setPj3(true)}
                    onHoverEnd={() => setPj3(false)}
                >
                    <div className="cardcontent">
                        <h3>MCJETouch</h3>
                        <p>Minecraft Java Edition Touch Support</p>
                    </div>
                    <ArrowRight show={pj3}/>
                </motion.div>
            </motion.div>
            Developing more......
        </div>
    );
}