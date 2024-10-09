'use client'

import "./_AboutMe.css";
import Image from "next/image";
import anime from 'animejs';
import { useEffect } from "react";
import Link from "next/link";


const AboutMe: React.FC = () => {
  useEffect(() => {
    anime({
      targets: '.wave-path-1',
      d: [
        { value: 'M0 100 Q360 150 720 100 T1440 100' },
        { value: 'M0 100 Q360 250 720 50 T1440 100' },
        { value: 'M0 100 Q360 100 720 150 T1440 100' },
        { value: 'M0 100 Q360 150 720 100 T1440 100' }
      ],
      easing: 'easeInOutSine',
      duration: 6000, // Slightly different duration for variation
      loop: true,
      direction: 'alternate',
    });

    // Animate the second wave with different timing
    anime({
      targets: '.wave-path-2',
      d: [
        { value: 'M0 200 Q360 250 720 200 T1440 200' },
        { value: 'M0 200 Q360 350 720 150 T1440 200' },
        { value: 'M0 200 Q360 200 720 250 T1440 200' },
        { value: 'M0 200 Q360 250 720 200 T1440 200' }
      ],
      easing: 'easeInOutSine',
      duration: 7000, // Different duration for this wave
      loop: true,
      direction: 'alternate',
    });

    // Animate the third wave separately as well
    anime({
      targets: '.wave-path-3',
      d: [
        { value: 'M0 300 Q360 350 720 300 T1440 300' },
        { value: 'M0 300 Q360 450 720 250 T1440 300' },
        { value: 'M0 300 Q360 300 720 350 T1440 300' },
        { value: 'M0 300 Q360 350 720 300 T1440 300' }
      ],
      easing: 'easeInOutSine',
      duration: 8000, // Another unique duration
      loop: true,
      direction: 'alternate',
    });

    anime({
      targets: '.svg-container',
      rotate: '1turn', // Full 360-degree rotation
      duration: 30000, // Slow rotation over 30 seconds
      easing: 'linear',
      loop: true,
    });

    anime({
      targets: '.line',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3000,
      delay: (el, i) => i * 250,
      loop: true,
      direction: 'alternate'
    });

    anime({
      targets: 'body', // target the body or any div
      backgroundColor: [
        '#e4eef0', 
        '#89CFF0', 
        '#B9D9EB', 
        '#D0F0C0',
        '#def4da'
      ],      easing: 'linear',
      duration: 10000, // total duration for the animation (5 seconds)
      loop: true,     // makes the animation loop infinitely
      direction: 'alternate' // alternate direction for smooth transitions
    });


    

  }, []);

  return (
    <>  
    <div className="svg-container">
      <svg width="100%" height="100%" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
        <path className="wave-path-1" d="M0 100 Q360 150 720 100 T1440 100" fill="transparent" stroke="#00308F" strokeWidth="3"/>
        <path className="wave-path-2" d="M0 200 Q360 250 720 200 T1440 200" fill="transparent" stroke="#0000FF" strokeWidth="2"/>
        <path className="wave-path-3" d="M0 300 Q360 350 720 300 T1440 300" fill="transparent" stroke="#002244" strokeWidth="1.5"/>
      </svg>
    </div>
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
              📚 A passionate Engineer who likes reading, science and geopolitics
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
