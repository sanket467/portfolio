import "./_AboutMe.css";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="about-me">
        <div className="flex flex-row profile-picture-placeholder">
          <Image
            className="profile-picture-container"
            src="/assets/sanket-profile2.png"
            width={250}
            height={250}
            alt="Sanket Shivam"
          />
          <div className="social-media-icons">
            <Image
              src="/assets/instagramIcon.png"
              width={100}
              height={80}
              alt="Sanket Shivam"
            />
            <Image
              src="/assets/linkedInIcon.png"
              width={100}
              height={100}
              alt="Sanket Shivam"
            />
          </div>
        </div>
      </div>
      <div className="about-text">
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
      </div>
    </>
  );
};

export default AboutMe;
