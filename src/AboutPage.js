import React from "react";
import Button from "./components/Button";
import NavLink from "./components/NavLink";
import logo from "./images/logo.png";
import DonateButton from "./components/DonateButton";

const AboutPage = () => {
  return (
    <div>
      <div
        id="header"
        className="bg-[#061237]"
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
        //     url(${hero})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
      >
        <div id="nav" className="py-4 mx-8 flex justify-between">
          <a href="/">
            <div className="flex items-center gap-2">
              <img src={logo} width={20} alt="logo" />
              <span
                className="text-3xl font-semibold text-[#ffffff]"
                style={{ fontFamily: "Arial" }}
              >
                steluh
              </span>
            </div>
          </a>
          <div className="flex gap-10 items-center">
            <DonateButton />
            <a href="/about-us">
              <NavLink>About Us</NavLink>
            </a>
            <NavLink>Mentor</NavLink>
            <NavLink>Advisor</NavLink>
            <NavLink>FAQs</NavLink>
          </div>
        </div>
      </div>
      <div id="about-us" className="flex justify-center py-28 bg-[#fafafa]">
        <div className="mx-8 flex flex-row w-[80%] justify-evenly gap-16">
          <div className="flex items-center rounded-lg w-[2500px] overflow-hidden">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/BIpUzT4ozXs?list=TLGGwW_2bTbJH4UzMDA2MjAyMw"
              title="AUCAS.org"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="text-md text-[#aaaaaa] flex flex-col gap-10">
            <div className="text-6xl font-bold text-[#000000]">About Us</div>
            Operating for more than four generations, having been there for a
            while, and having a rich legacy, we are known across the world for
            affecting transformation and have a long history of empowering
            people. When we became official in June 2017, we underwent a key
            turning point or reorganization to broaden or refocus our purpose
            and objectives.
            <br />
            <br />
            We have a physical presence in Accra, Ghana, and a connection to the
            neighborhood. We have actively participated in the region's growth
            and empowerment by supporting its development and progress. We are
            known all over the world for our knowledge and influence as "a
            world-leading entity dedicated to empowering individuals and
            communities."
          </div>
        </div>
      </div>

      {/*code for the footer. Might be useful later*/}
      {/* <div id="footer" className="pb-2 pt-8 bg-[#061237]">
        <div className="flex flex-row mx-40 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={logo} width={20} alt="logo" />
              <span
                className="text-3xl font-semibold text-[#ffffff]"
                style={{ fontFamily: "Arial" }}
              >
                steluh
              </span>
            </div>
            <div className="text-md text-[#aaaaaa] w-[300px]">
              Enroll in the university, college, or professional program in
              Africa or its diaspora?
            </div>
            <div className="flex flex-row justify-between">
              <img
                className="cursor-pointer"
                src={whatsapp}
                width={30}
                alt="whatsapp"
              />
              <img
                className="cursor-pointer"
                src={linkedin}
                width={20}
                alt="linkedin"
              />
              <img
                className="cursor-pointer"
                src={twitter}
                width={25}
                alt="twitter"
              />
              <img
                className="cursor-pointer"
                src={instagram}
                width={30}
                alt="instagram"
              />
              <img
                className="cursor-pointer"
                src={facebook}
                width={20}
                alt="facebook"
              />
              <img
                className="cursor-pointer"
                src={youtube}
                width={30}
                alt="youtube"
              />
            </div>
          </div>
          <div className="flex flex-row gap-20">
            <div>
              <div className="text-2xl text-[#ffffff]">Quick Links</div>
              <div className="flex flex-col text-md text-[#aaaaaa]">
                <FooterLink>Mentor</FooterLink>
                <FooterLink>Advisor</FooterLink>
                <FooterLink>FAQs</FooterLink>
                <FooterLink>Contact Us</FooterLink>
              </div>
            </div>
            <div>
              <div className="text-2xl text-[#ffffff]">Company</div>
              <div className="flex flex-col text-md text-[#aaaaaa]">
                <FooterLink>About Us</FooterLink>
                <FooterLink>Team</FooterLink>
                <FooterLink>Services</FooterLink>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="text-2xl text-[#ffffff]">
                Subscribe to our newsletter
              </div>
              <div className="flex flex-row">
                <input
                  className="bg-[#061237] text-[#ffffff] focus:outline-none w-[95%]"
                  type="email"
                  placeholder="Email"
                />
                <img width={20} src={arrow} alt="arrow" />
              </div>
              <hr />
            </div>
          </div>
        </div>
        <br />
        <hr style={{ color: "#aaaaaa", height: "0.2px" }} />
        <div className="text-[#aaaaaa] text-md text-center pt-2">
          All Rights Reserved <br />
          steluh &copy; 2017
        </div>
      </div> */}
      <hr style={{ color: "#aaaaaa", height: "0.2px" }} />
      <div className="text-[#aaaaaa] text-md text-center pt-2">
        All Rights Reserved <br />
        steluh &copy; 2017
      </div>
    </div>
  );
};

export default AboutPage;
