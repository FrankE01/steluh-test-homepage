import Button from "./components/Button";
import development from "./images/development.svg";
import scholarship from "./images/scholarship.svg";
import education from "./images/education.svg";
import empowerment from "./images/empowerment.svg";
import NavBar from "./components/NavBar";
import { FadeIn } from "react-slide-fade-in";

import "./index.css";

function App() {
  return (
    <div>
      <FadeIn
        from="bottom"
        positionOffset={0}
        triggerOffset={0}
        delayInMilliseconds={0}
      >
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
            <div className="flex flex-col gap-5 items-center w-[95%] my-[20px]">
              <div
                className="text-[30px] text-[#ffffff] text-center font-bold font-mono"
                style={{ fontFamily: "Times New Roman" }}
              >
                Enroll in the university, college, or professional program in
                Africa or its diaspora?
              </div>
              <Button>Apply Here</Button>
            </div>
          </div>
        </div>

        {/*Code for the sponsors. Base code for the past clients in about page */}
        {/* <div id="sponsors" className="flex justify-center">
        <div className="pt-8 mx-8 bg-[#fffffe] flex flex-col w-[80%]"> 
          <div className="text-center text-2xl font-semibold text-[#333300]">
            Sponsors
          </div>

          <div className="flex justify-evenly">
            <img width={140} src={samsung} alt="samsung" />
            <img width={140} src={google} alt="google" />
            <img width={140} src={ebay} alt="ebay" />
            <img width={140} src={visa} alt="visa" />
            <img width={140} src={intel} alt="intel" />
          </div>
        </div>
      </div> */}
        <div id="competency-frameworks" className="flex justify-center my-6">
          <div className="mx-8 flex flex-row w-[80%] justify-evenly gap-16">
            <div className="text-5xl font-bold flex flex-col justify-between">
              Competency <br /> Frameworks
              <a href="about-program" className="text-xl">
                <Button className="flex flex-row items-center">
                  Discover More <span className="text-2xl">&#8250;&#8250;</span>
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row text-2xl font-bold items-center gap-3">
                  <span>
                    <img width={30} src={development} alt="development" />
                  </span>
                  Development
                </div>
                <div className="text-md text-[#333300]">
                  By supporting and encouraging students to discover their
                  potential, learn new skills, and improve their talents on a
                  personal and professional level. We seek to assist students in
                  building a solid foundation that will serve them well in their
                  academic path and future career ambitions through our thorough
                  supervision and assistance.
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-row text-2xl font-bold items-center gap-3">
                  <span>
                    <img width={30} src={scholarship} alt="scholarship" />
                  </span>
                  Scholarship
                </div>
                <div className="text-md text-[#333300]">
                  We are aware of how crucial financial aid is for higher
                  education. We offer helpful information and direction to
                  assist students in completing the scholarship application
                  process, ensuring they have access to the financial aid they
                  require to realize their aspirations of attending tertiary.
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row text-2xl font-bold items-center gap-3">
                  <span>
                    <img width={30} src={education} alt="education" />
                  </span>
                  Education
                </div>
                <div className="text-md text-[#333300]">
                  Education is the foundation for both individual and society
                  development. We provide in-depth advice on picking the best
                  schools or universities, appropriate programs, and entrance
                  criteria. Our goal is to arm students with the information and
                  resources they require to fully benefit from their educational
                  prospects.
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row text-2xl font-bold items-center gap-3">
                  <span>
                    <img width={30} src={empowerment} alt="empowerment" />
                  </span>
                  Empowerment
                </div>
                <div className="text-md text-[#333300]">
                  As steadfast advocates of giving students the tools they need
                  to develop into self-reliant, self-assured adults who can
                  successfully negotiate the complexity of the college and
                  university admission process. We provide you with the tools
                  needed to succeed in life, including effective communication,
                  critical thinking, and self-advocacy.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Footer code.  */}
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
            <div className="text-md text-[#333300] w-[300px]">
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
              <div className="flex flex-col text-md text-[#333300]">
                <FooterLink>Mentor</FooterLink>
                <FooterLink>Advisor</FooterLink>
                <FooterLink>FAQs</FooterLink>
                <FooterLink>Contact Us</FooterLink>
              </div>
            </div>
            <div>
              <div className="text-2xl text-[#ffffff]">Company</div>
              <div className="flex flex-col text-md text-[#333300]">
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
        <hr style={{ color: "#333300", height: "0.2px" }} />
        <div className="text-[#333300] text-md text-center pt-2">
          All Rights Reserved <br />
          steluh &copy; 2017
        </div>
      </div> */}
        <hr style={{ color: "#333300", height: "0.2px" }} />
        <div className="text-[#333300] text-md text-center pt-2">
          All Rights Reserved <br />
          steluh &copy; 2017
        </div>
      </FadeIn>
    </div>
  );
}

export default App;
