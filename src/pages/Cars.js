import React from 'react';
import { Typewriter } from "react-simple-typewriter";



export default function Cars() {
    return (
        <>
            <div className="hero">
                <span>&nbsp; &nbsp;•</span>
                <Typewriter
                    words={[
                        "SAMARTH PROPERTIES AND TOURISM",
                    ]}
                    loop={0}
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={2000}
                />
                <span>&nbsp; &nbsp;•</span>
            </div>

        </>
    );
}