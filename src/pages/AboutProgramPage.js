import React from "react";
import NavBar from "../components/NavBar";
import dash from "../images/dash.svg";
import Button from "../components/Button";
import { FadeIn } from "react-slide-fade-in";

const AboutProgramPage = () => {
  return (
    <FadeIn
      from="bottom"
      positionOffset={0}
      triggerOffset={0}
      delayInMilliseconds={0}
    >
      <div>
        <div
          id="header"
          className="bg-[#061237]"

          //code for the header image (hero image). To be reintroduced in v2
          // style={{
          //   backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
          //     url(${hero})`,
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          // }}
        >
          <NavBar />

          <div id="hero" className="mx-8 flex justify-center">
            <div className="flex flex-col gap-5 items-left w-[95%] my-[20px]">
              <div className="text-6xl text-[#ffffff] text-left font-bold flex flex-row gap-2 items-center">
                <img width={40} src={dash} alt="dash" />
                About the Program
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-10">
          <div className="text-md text-[#333300] w-[80%]">
            As an organisation, we adequaltely cultivate a staff that is
            knowledgeable and capable of tackling issues associated with
            providing basic services in ways that are both sustainable and
            beneficial to Ghana, Africa and beyond. To join us maintain an eye
            on our communication channels.
          </div>
        </div>

        <div id="our-purpose" className="flex justify-center my-20">
          <div className="mx-8 flex flex-col w-[80%] justify-evenly gap-10">
            <div className="text-5xl font-bold flex flex-col justify-between">
              Our Purpose
            </div>
            <div className="text-md text-[#333300]">
              Over the course of more than four decades, our organization has
              evolved and prospered, showcasing resilience and the capacity to
              negotiate shifting environments. <br />
              <br /> Our programs and projects are geared on enhancing the
              quality of life for both individuals and communities, whether via
              advocacy, socioeconomic development, or other strategies like
              education. <br />
              <br /> By providing our clients with exceptional customer service
              in student application systems all over the world, we aim to
              become the preferred trademark of student application system to
              tertiary institutions in Africa and its diaspora by the year 2030
              of operation. This will result in the creation of a single
              application platform for all tertiary institutions in Africa and
              its diaspora.
            </div>
          </div>
        </div>

        <div id="objectives" className="flex justify-center my-20">
          <div className="mx-8 flex flex-col w-[80%] justify-evenly gap-10">
            <div className="text-5xl font-bold flex flex-col justify-between">
              Objectives
            </div>
            <div className="text-md text-[#333300]">
              <ol className="list-decimal list-inside gap-10 flex flex-col">
                <li>
                  Enable economic opportunities that are accessible to every
                  member of the African workforce.
                </li>
                <li>
                  Empower the global workforce, enhancing their productivity and
                  success.
                </li>
                <li>
                  Equip young individuals in their educational development
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div id="program" className="flex justify-center my-20">
          <div className="mx-8 flex flex-col w-[80%] justify-evenly gap-10">
            <div className="text-5xl font-bold flex flex-col justify-between">
              Industry Job Training Program
            </div>
            <div className="text-md text-[#333300]">
              We believe that theoretical education and industry training should
              be together more responsive to real market needs. Yet we are still
              noticing a growing demand for job candidates to get appropriate
              business training and an excellent opportunity to be part of the
              business world, work on industry tasks and projects, and
              practically learn how things work in an ever-changing labour
              market. Because of that, we have decided to allow potential
              employees to have this valuable opportunity through this program.
              The program aims at enabling the participants to work on business
              projects, get proper guidance, and learn practical concepts.
              <div className="text-3xl mt-10 mb-5">
                What benefits will you gain?
              </div>
              <ul className="list-disc list-inside gap-3 flex flex-col">
                <li>
                  Priority to be selected for a fulltime, part-time or contract
                  position at one of our firm or the companies we work with (90%
                  of our recruitments are internal)
                </li>
                <li>A certificate from our company</li>
                <li>
                  Working on business cases based on current or past projects
                </li>
                <li>Lectures given by experienced industry professionals</li>
                <li>Close supervision and orientation from your mentor</li>
                <li>
                  Working an average of one to two hours per day with a flexible
                  schedule
                </li>
                <li>
                  Fully remote positions with access to online tools and
                  platforms
                </li>
                <li>
                  Unlocking your potentials and getting prepared for job/s
                </li>
                <li>
                  Professional business training, guidance, and experience
                </li>
                <li>Having your work criticized, assessed, and corrected</li>
                <li>Professional projects experience to put on your CV</li>
              </ul>
              <div className="my-3">
                The training program consists of four weeks, with four parts of
                a project. Each part will be introduced on Sunday and reviewed
                on Saturday and runs all year round. You can choose whether you
                want to be in <br /> Group A (starts at 12:30 p.m.) or <br />{" "}
                Group B (starts at 4 p.m. GMT).
              </div>
              <div className="text-3xl mt-10 mb-5">
                Throughout the program, you will find out about:
              </div>
              <ul className="list-inside list-image-[url(images/check.svg)] gap-3 flex flex-col">
                <li>
                  Being a leader, managing resources and roles in a profession
                  or office
                </li>
                <li>
                  Risk and stakeholders management goals, milestones, work
                  breakdown structure, top- down and bottom-up estimates
                </li>
                <li>
                  Starting a project from scratch and navigating the big picture
                  of basic job elements
                </li>
                <li>Developing a chart and creating project plan documents</li>
                <li>General industry concepts and standards</li>
                <li>The most common management tools and methodologies</li>
                <li>
                  General standards and methods of an industry and much more!
                </li>
              </ul>
              <div className="text-md mt-10 mb-5">
                Program Fee: <br />
                <span className="text-3xl text-[#061237]">Free</span>
              </div>
              <Button>APPLY</Button>
            </div>
          </div>
        </div>

        <hr style={{ color: "#333300", height: "0.2px" }} />
        <div className="text-[#333300] text-md text-center pt-2">
          All Rights Reserved <br />
          steluh &copy; 2017
        </div>
      </div>
    </FadeIn>
  );
};

export default AboutProgramPage;
