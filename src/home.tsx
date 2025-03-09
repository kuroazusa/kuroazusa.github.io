import { useState } from 'preact/hooks';
import ArrowRight from './assets/arrowright';
import { motion } from 'framer-motion';

export function Home(){
    const scrollTo = (id: string) => {
        const aboutSection = document.getElementById(id);
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动
        }
    };
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, 
            },
        },
    };
    const [hd1, setHd1] = useState(false);
    const [hd2, setHd2] = useState(false);
    const [hd3, setHd3] = useState(false);
    return (
        <>
            <div style={{ fontFamily: 'Arial, sans-serif', overflow: 'scroll', minHeight: '90vh', alignContent: 'center' }}>
                <section>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="hero"
                    >
                        🐾Welcome to Crepvéant's World 🌍🐾
                    </motion.h1>
                </section>

                <motion.div 
                    className="cardcon"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="card"
                        onHoverStart={() => setHd1(true)}
                        onHoverEnd={() => setHd1(false)}
                        onClick={() => scrollTo("about")}
                    >
                        <div className="cardcontent">
                            <h2>About Me</h2>
                            <p>Learn about myself and my journey so far. 🧐</p>
                        </div>
                        <ArrowRight show={hd1} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="card"
                        onHoverStart={() => setHd2(true)}
                        onHoverEnd={() => setHd2(false)}
                        onClick={() => scrollTo("project")}
                    >
                        <div className="cardcontent">
                            <h2>My Projects</h2>
                            <p>Check out my latest work in development or music. 🚀</p>
                        </div>
                        <ArrowRight show={hd2} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="card"
                        onHoverStart={() => setHd3(true)}
                        onHoverEnd={() => setHd3(false)}
                        onClick={() => scrollTo("blog")}
                    >
                        <div className="cardcontent">
                            <h2>Blog</h2>
                            <p>Read my thoughts on tech and personal growth. ✍️</p>
                        </div>
                        <ArrowRight show={hd3} />
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}