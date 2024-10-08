import "./_Experience.css";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Experience: React.FC = () => {
  return (
    <>
      <div className="experience">
        <div className="experience-sections">
          <div className="logo-container">
            <Image
              className="logo-style"
              src="/assets/mck-logo.jpeg"
              width={200}
              height={200}
              alt="mck-logo"
            />
            <div className="display-h4">McKinsey & Company</div>
            <div className="subtitle-h2">Dec, 2022 - Current</div>
          </div>
          <div className="exp-container">
            <div className="">
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <div className="display-h4 experience-text">Engineer - 2</div>
                  <div className="subtitle-h2 experience-text">July, 2024 - Current</div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>
                  <div className="display-h4 experience-text">Engineer - 1</div>
                  <div className="subtitle-h2 experience-text">Dec, 2022 - June, 2023</div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
        <Divider />
        <div className="experience-sections">
          <div className="logo-container">
            <Image
              className="logo-style"
              src="/assets/ssi-logo.png"
              width={200}
              height={200}
              alt="mck-logo"
            />
            <div className="display-h4">Sopra Steria</div>
            <div className="subtitle-h2">Jan, 2019 - Dec, 2022</div>
          </div>
          <div className="exp-container">
            <div className="">
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <div className="display-h4 experience-text">Senior Software Engineer</div>
                  <div className="subtitle-h2 experience-text">Jan, 2022 - Dec, 2022</div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>
                  <div className="display-h4 experience-text">Software Engineer</div>
                  <div className="subtitle-h2 experience-text">Aug, 2019 - Jan, 2022</div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>
                  <div className="display-h4 experience-text">Engineer Trainee</div>
                  <div className="subtitle-h2 experience-text">Jan, 2019 - Aug, 2019</div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
