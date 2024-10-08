'use client'

import "./_AboutMe.css";
import Image from "next/image";
import anime from 'animejs';
import { useEffect } from "react";
import Link from "next/link";


const AboutMe: React.FC = () => {
  useEffect(() => {
    anime({
      targets: 'body', // target the body or any div
      backgroundColor: [
        '#e4eef0', 
        '#89CFF0', 
        '#B9D9EB', 
        '#D0F0C0',
        '#def4da'
      ],
      easing: 'linear',
      duration: 10000, // total duration for the animation (5 seconds)
      loop: true,     // makes the animation loop infinitely
      direction: 'alternate' // alternate direction for smooth transitions
    });
  }, []);

  return (
    <>  
    <div className="about-me">
        <div className="center-container">
          <Image
            className="profile-picture-container"
            src="/assets/sanket-profile2.png"
            width={250}
            height={250}
            alt="Sanket Shivam"
          />
          <div>
            <div className="headline-h1">Sanket Shivam</div>
            <div className="subtitle-h1">🚀 SDE-2 at McKinsey & Company</div>
            <div className="subtitle-h1">
              📚 A passionate Engineer, likes reading science and geopolitics
            </div>
          </div>
          <div className="social-media-icons">
          <Link href="https://www.linkedin.com/in/sanket-shivam-82b03a103/" target="_blank" rel="noopener noreferrer">
          <Image
              src
      ="/assets/linkedInIcon.png"
              width={50}
              height={50}
              alt="Sanket Shivam"
            />
          </Link>
          <Link href="https://www.instagram.com/sanket.shivam?igsh=MWRxMWc5Y2hmeTE0dQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <Image
              src="/assets/instagramIcon.png"
              width={50}
              height={50}
              alt="Sanket Shivam"
            />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="about-text">
        <div className="intro headline-h1">
          <p>hey there! I am Sanket Shivam</p>
        </div>
        <div className="context-text">
          <p>
            I am an SDE 2 at McKinsey, where I focus on crafting scalable,
            data-driven innovations. My passion for engineering drives me to
            solve complex problems and develop data-intensive products that
            leverage the latest advancements in technology.
          </p>

          <p>
            I am dedicated to pushing the boundaries of what’s possible and am
            always eager to stay at the forefront of the tech landscape. I love
            connecting with fellow engineers, tech enthusiasts, and innovators
            to exchange ideas and share insights.
          </p>

          <p>
            If you’re interested in exploring new possibilities or discussing
            the latest trends in technology, feel free to reach out. Let's
            collaborate and innovate together!
          </p>
        </div>
      </div> */}
    </>
  );
};

export default AboutMe;
