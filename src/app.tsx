import { useState, useEffect } from 'preact/hooks';
import { Home } from './home';
import "./app.css"
import { AboutMe } from './aboutme';
import { MyProjects } from './project';
import { Blog } from './blog';

export function App(){
    const [waveStyle, setWaveStyle] = useState({});

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = e;
        setWaveStyle({
            left: `${clientX}px`,
            top: `${clientY}px`,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        <>
            <Home />
            <AboutMe />
            <MyProjects />
            <Blog />
            <div style={{overflow: "clip"}}>
                <div className="wave" style={waveStyle} />
            </div>
        </>
    );
};