import profileImage from "../../assets/about/roger-vacovsky.JPG";
import React from 'react';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={profileImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
               <p>
               I'm making my entry into the world of web development as I have found a passion for problem
                solving on interesting projects through the use of code. <br /> <br />
                I have been a leader in the nonprofit, service, and healthcare industries for over a decade and have
                many years of database user experience that I bring to this new endeavor. <br /> <br />
                In my spare time I like to read, listen to music, and play the piano. Thanks for visiting! <br />
            </p>
            </div>
        </section>
    );
}

export default About;