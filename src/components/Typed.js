import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "a fullstack engineer",
                    "with a focus on risk and security.",
                    "a problem solver",
                    "a MERN Stack Developer",
                    "a trier"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
            }}
        />
    );
}

export default Type;
