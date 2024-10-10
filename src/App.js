import Button from "./components/Button";
import NavLink from "./components/NavLink";
import logo from "./images/logo.png";
import samsung from "./images/samsung-256.png";
import google from "./images/google-256.png";
import ebay from "./images/ebay-256.png";
import visa from "./images/visa-256.png";
import intel from "./images/intel-256.png";
import development from "./images/development.svg";
import scholarship from "./images/scholarship.svg";
import education from "./images/education.svg";
import empowerment from "./images/empowerment.svg";
import hero from "./images/hero.jpg";
import banner from "./images/banner.jpg";
import arrow from "./images/arrow.svg";
import whatsapp from "./images/whatsapp.svg";
import linkedin from "./images/linkedin.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import youtube from "./images/youtube.svg";
import "./index.css";
import FooterLink from "./components/FooterLink";

function App() {
  return (
    <div>
      <div
        id="header"
        className="bg-[#061237]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
            url(${hero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div id="nav" className="pt-8 mx-8 flex justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} width={20} alt="logo" />
            <span className="text-3xl font-semibold text-[#ffffff]">
              Steluh
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <NavLink>Mentor</NavLink>
            <NavLink>Advisor</NavLink>
            <NavLink>FAQs</NavLink>
            <NavLink>Contact Us</NavLink>
            <Button>Sign In</Button>
          </div>
        </div>

        <div id="hero" className="mx-8 flex justify-center">
          <div className="flex flex-col gap-10 items-center w-[80%] my-[100px]">
            <div className="text-[50px] text-[#ffffff] text-center font-bold font-mono">
              Enroll in any university, college, or professional program in
              Africa or its diaspora.
            </div>
            <button className="w-fit py-4 px-16 bg-[#0cd2dc] hover:bg-[#08838a] text-white text-xl font-semibold border-none rounded-lg cursor-pointer transition-all ease-out duration-300">
              Apply Here
            </button>
          </div>
        </div>
      </div>

      <div id="sponsors" className="flex justify-center">
        <div className="pt-8 mx-8 bg-[#fffffe] flex flex-col w-[80%]">
          <div className="text-center text-2xl font-semibold text-[#aaaaaa]">
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
      </div>

      <div id="competency-frameworks" className="flex justify-center my-10">
        <div className="pt-8 mx-8 flex flex-row w-[80%] justify-evenly gap-16">
          <div className="text-6xl font-bold">
            Competency <br /> Frameworks
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row text-2xl font-bold items-center gap-3">
                <span>
                  <img width={30} src={development} alt="development" />
                </span>
                Development
              </div>
              <div className="text-md text-[#aaaaaa]">
                We believe in nurturing and fostering students to explore their
                potential, acquire new skills, and enhance their personal and
                professional capabilities. Through our comprehensive guidance
                and support, we aim to help students develop a strong foundation
                that will serve them well in their academic journey and future
                career endeavors.
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row text-2xl font-bold items-center gap-3">
                <span>
                  <img width={30} src={scholarship} alt="scholarship" />
                </span>
                Scholarship
              </div>
              <div className="text-md text-[#aaaaaa]">
                We understand the importance of financial assistance in pursuing
                higher education. We provide valuable resources and guidance to
                help students navigate through the scholarship application
                process, ensuring they have access to the financial support they
                need to make their educational dreams a reality.
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row text-2xl font-bold items-center gap-3">
                <span>
                  <img width={30} src={education} alt="education" />
                </span>
                Education
              </div>{" "}
              <div className="text-md text-[#aaaaaa]">
                Education is the cornerstone of personal and societal growth. We
                offer comprehensive guidance on choosing the right colleges or
                universities, selecting suitable programs, and understanding the
                admission requirements. Our aim is to provide students with the
                knowledge and tools they need to make the most of their
                educational opportunities.
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row text-2xl font-bold items-center gap-3">
                <span>
                  <img width={30} src={empowerment} alt="empowerment" />
                </span>
                Empowerment
              </div>
              <div className="text-md text-[#aaaaaa]">
                We strongly believe in empowering students to become
                independent, confident individuals who can navigate the
                complexities of the college and university application process.
                We equips students with essential life skills, such as effective
                communication, critical thinking, and self-advocacy.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about-us"
        className="flex justify-center my-10 py-28 bg-[#fafafa]"
      >
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

      <div id="banner" className="flex justify-center py-16">
        <div
          className="mx-8 w-[80%] flex flex-col items-center justify-center gap-16 bg-[#1D5BFE] py-16 rounded-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
            url(${banner})`,
          }}
        >
          <div className="text-4xl text-center font-bold text-[#ffffff] w-[80%]">
            Embark on a Journey of Knowledge: <br />
            Enroll in African Institutions and Beyond
          </div>
          <button className="w-fit py-4 px-16 bg-[#0cd2dc] hover:bg-[#08838a] text-white text-xl font-semibold border-none rounded-lg cursor-pointer transition-all ease-out duration-300">
            Get In Touch
          </button>
        </div>
      </div>

      <div id="footer" className="py-8 bg-[#061237]">
        <div className="flex flex-row mx-40 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={logo} width={20} alt="logo" />
              <span className="text-3xl font-semibold text-[#ffffff]">
                Steluh
              </span>
            </div>
            <div className="text-md text-[#aaaaaa] w-[300px]">
              Enroll in any university, college, or professional program in
              Africa or its diaspora.
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
      </div>
    </div>
  );
}

export default App;
