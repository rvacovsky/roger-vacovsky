import React from 'react';
import runBuddy from "../../assets/portfolio/run buddy.jpg";
import horiseon from "../../assets/portfolio/horiseon.jpg";
import gatorNewsletter from "../../assets/portfolio/gator newsletter.jpg";
import hisscussions from "../../assets/portfolio/Hisscussions.JPG";

function Portfolio() {
    return(
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={runBuddy} className="my-2" style={{ width: "100%" }} alt="cover" />
            <img src={horiseon} className="my-2" style={{ width: "100%" }} alt="cover" />
            <img src={gatorNewsletter} className="my-2" style={{ width: "100%" }} alt="cover" />
            <img src={hisscussions} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
            </div>
        </section>
    )
}

export default Portfolio;