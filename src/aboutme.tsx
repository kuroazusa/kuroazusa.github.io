import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './content.css'
import './assets/socialmedia.css'
import crepveant from "./assets/crepveant.jpg"
import azusa from "./assets/kurokawaazusa.png"
import { GitHubIcon } from "./assets/github";
import { YouTubeIcon } from "./assets/youtube";
import { RedditIcon } from "./assets/reddit";
import { ZhihuIcon } from "./assets/zhihu";
import { BilibiliIcon } from "./assets/bilibili";
import { MastodonIcon } from "./assets/mastodon";
import { DiscordIcon } from "./assets/discord";

export function AboutMe() {
  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });

  return (
    <div style={{minHeight: "90vh", alignContent: "center"}} id="about">
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
        About Me
        </motion.h2>
        <motion.div 
            class="content"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
        >
            <p>
                Hi, I'm Crepvéant, a middle school student passionate about freedom, music, and programming. Exploring the infinite possibilities of the world. 
            </p>
            <p>
                I go by many internet identities—some are secret, but here's what I can share 😈:
            </p>
            <ul>
                <li><b>Crepvéant Zeng</b>: My English name in real life. <i>Fun fact—my parents once called me “Wynn” since a trip to Macau, but I’m not a fan of casinos, so I decided to stick with Crepvéant.</i></li>
                <li><b>Kurokawa Azusa (黒川 梓)</b>: My Japanese name, which I use for my private GitHub account.</li>
            </ul>
            <p>
                Born and raised in <b>Beijing</b>. That said, please follow the UTC+8 normal human routine when contacting me—I do need my sleep! 💤
            </p>
            <p>
                I have a soft spot for warm, fluffy, and cute things, which is why I believe that <del><i><a href="https://www.mihoyo.com/en/">TECH OTAKUS SAVE THE WORLD!</a></i></del> technology will make life even cozier. 🐾
            </p>
            <p>
                Fanatic (and slightly extreme) Apple fan, currently use iPhone Xs Max & MacBook Pro Early 2013.
            </p>
            <p>
                Preparing for the CHSEE (China High School Entrance Exam) and working <b>LAZY</b> to get into the International Department right now. 
            </p>
        </motion.div>
        <div style={{display: "flex", overflowY: "auto", gap: "48px", justifyContent: "center"}}>
            <img src={crepveant} className="avatar" alt="red panda (Crepvéant)"/>
            <img src={azusa} className="avatar" alt="SDSZ uniform catboy (Kurokawa Azusa)"/>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            <div className="socialcontainer">
                <GitHubIcon path="https://github.com/Crepveant"/>
                <GitHubIcon path="https://github.com/kuroazusa"/>
                <RedditIcon />
                <ZhihuIcon />
                <YouTubeIcon />
                <BilibiliIcon />
                <MastodonIcon />
                <DiscordIcon />
            </div>
        </div>
    </div>
  );
}