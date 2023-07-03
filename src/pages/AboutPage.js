import React from "react";
import NavBar from "../components/NavBar";
import dash from "../images/dash.svg";
import prosper2 from "../images/prosper2.PNG";
import ruby2 from "../images/ruby2.PNG";
import prosperandemmanuel from "../images/prosper and emmanuel.jpeg";
import christopherandprosper from "../images/christopher and prosper.jpeg";
import prosper from "../images/prosper.jpeg";
import ruby from "../images/ruby.jpeg";
import louis from "../images/louis.jpeg";
import elliot from "../images/elliot.jpeg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter-full.svg";
import facebook from "../images/facebook.svg";
import { FadeIn } from "react-slide-fade-in";

const AboutPage = () => {
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
                About Us
              </div>
            </div>
          </div>
        </div>
        <div id="about-us" className="flex justify-center py-10 bg-[#fafafa]">
          <div className="mx-8 flex flex-col w-[80%] justify-evenly gap-16">
            <div className="flex justify-center items-center rounded-lg overflow-hidden">
              <div>
                <div className="flex justify-center">
                  <span
                    className="text-9xl font-serif"
                    style={{ fontFamily: "Times New Roman" }}
                  >
                    AUCAS
                  </span>
                  <span className="items-start">
                    <p className="rounded-full border border-black border-2 w-7 h-7 justify-center flex">
                      R
                    </p>
                  </span>
                </div>
                <div
                  className="text-center text-[28px] text-[#aaaaaa] font-medium"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  Africa Universities &amp; Colleges Application System
                </div>
              </div>
            </div>

            <div className="text-md text-[#333300] flex flex-col gap-10">
              <div className="text-6xl font-bold text-[#000000]">
                AUCAS Educational Consult Enterprise
              </div>
              Operating for many generations and having a rich legacy. we are
              known across the world for affecting transformation and have a
              long history or empowering people. When we became official in
              2017, underwent a key turning point or reorganisation to broaden
              or refocus our purpose and objectives.
              <br />
              <br />
              AUCAS, an abbreviation for Africa Universities & Colleges
              Application System- a youth ministry that promotes growth,
              education, empowerment, and scholarships. Operating for many
              generations, and having a rich legacy, we are known across the
              world for affecting transformation and have a long history of
              empowering people.
              <br />
              <br />
              We underwent a significant turning point or restructuring to
              extend or refocus our purpose and aims, steluh being one of them,
              when we became official in June 2017.
              <br />
              <br />
              steluh is a centralized online application system that makes it
              easier to apply to multiple schools in Africa or its diaspora for
              admission to universities, colleges, and professional programs.
            </div>
          </div>
        </div>

        <div id="PO-message" className="flex justify-center py-10">
          <div className="mx-8 flex flex-col w-[80%]">
            <div className="flex flex-row justify-between gap-28">
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplate: "1fr / 1fr",
                    placeItems: "center",
                  }}
                >
                  <div
                    className="flex items-end"
                    style={{
                      gridColumn: "1 / 1",
                      gridRow: "1 / 1",
                      width: "400px",
                      height: "470px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#0cd2dc55",
                        width: "400px",
                        height: "350px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "130px",
                      }}
                    ></div>
                  </div>
                  <img
                    style={{ gridColumn: "1 / 1", gridRow: "1 / 1" }}
                    width={400}
                    src={prosper2}
                    alt="prosper"
                  />
                </div>
                <div>
                  <div className="py-2 text-xl font-semibold flex flex-row justify-between">
                    Prosper Okai Mensah
                    <div className="flex flex-row gap-3">
                      <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                        <img width={20} src={linkedin} alt="linkedin" />
                      </div>
                      <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                        <img width={20} src={twitter} alt="twitter" />
                      </div>
                      <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                        <img width={20} src={facebook} alt="facebook" />
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold text-[#000033aa]">
                    Principal Officer
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold my-3">
                  Message from the Principal Officer
                </div>
                <div className="text-md text-[#333300] flex flex-col">
                  Welcoming you to steluh at AUCAS is a huge source of delight
                  and excitement for me. Each and every one of you joining us
                  today makes us really happy. <br />
                  <br /> Prior to anything else, I want to thank God for
                  bringing us together. We are a group of young people who have
                  gathered here by divine providence in an effort to deepen our
                  faith and have a good influence on the world. <br />
                  <br />
                  You are the lifeblood of our mission to our youth. We honor
                  your special abilities, interests, and potential today. We
                  think that everyone of you has a divine purpose that God has
                  put there, and we are certain that God has a great plan for
                  each and every one of you, and we want to travel this amazing
                  path of faith with you. <br />
                  <br /> Thank you for giving us the opportunity to raise and
                  guide your kids, parents, guardians, and families who support
                  our youngsters. We promise to working with you to jointly
                  provide a secure, caring, and enriching environment for their
                  growth because we realize the significance of your
                  contribution to their spiritual formation. <br />
                  <br />
                  Our goal as a youth ministry open to all is to empower and
                  prepare the next generation to be agents of change in their
                  homes, neighborhoods, and beyond.
                  <br />
                  <br /> We work hard to provide a place where you may deepen
                  your friendships with others, discover your special abilities,
                  and have the confidence to go out in faith.
                  <br />
                  <br /> We've got a jam-packed schedule of events planned for
                  this journey. Our expectation is that you will be a moment of
                  change, inspiration, and rejuvenation. We want you to live
                  motivated and prepared to change the world in your areas of
                  influence.
                  <br />
                  <br /> Last but not least, I want to exhort everyone to
                  embrace one another with an open heart and mind. Let's
                  celebrate the variety of viewpoints, experiences, and
                  backgrounds represented in this world. Together, we may share
                  knowledge, encourage one another through life's ups and downs,
                  and create a neighborhood that exemplifies the kindness and
                  grace of AUCAS Educational Consult. <br />
                  <br />
                  I'd want to once more send a hearty greeting to everyone. May
                  we all be full of smiles, personal development, and memorable
                  experiences. Open your hearts to everything that God has in
                  store for you and me. <br />
                  <br />
                  Wish you all then best as you set off on this amazing steluh
                  trip. And to my darling nephew Emmanuel, whose struggles in
                  life have served as a reflection of our endeavor, who has
                  received our prayers and well wishes. I would also want to
                  express my gratitude to my older brother, Christopher a.k.a
                  Sakawa. I'm appreciative to my family, friends, and
                  well-wishers. And we wish you a long, prosperous, purposeful,
                  and luscious life
                </div>
              </div>
            </div>
            <div className="my-10 flex flex-col gap-2 text-2xl text-center font-semibold">
              Thank You
              <div className="my-3 flex flex-row justify-around items-end">
                <div className="text-lg text-[#000033aa]">
                  <img
                    className="rounded-xl"
                    width={300}
                    src={prosperandemmanuel}
                    alt="prosperandemmanuel"
                  />
                  Prosper and Emmanuel
                </div>
                <div className="text-lg text-[#000033aa]">
                  <img
                    className="rounded-lg"
                    style={{ objectFit: "cover" }}
                    width={500}
                    src={christopherandprosper}
                    alt="christopherandprosper"
                  />
                  Christopher and Prosper
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="OO-message" className="flex justify-center py-10">
          <div className="mx-8 flex flex-col w-[80%]">
            <div className="flex flex-row-reverse justify-between gap-28">
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplate: "1fr / 1fr",
                    placeItems: "center",
                  }}
                >
                  <div
                    className="flex items-end"
                    style={{
                      gridColumn: "1 / 1",
                      gridRow: "1 / 1",
                      width: "400px",
                      height: "610px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#0cd2dc55",
                        width: "400px",
                        height: "400px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "130px",
                      }}
                    ></div>
                  </div>
                  <img
                    style={{ gridColumn: "1 / 1", gridRow: "1 / 1" }}
                    width={400}
                    src={ruby2}
                    alt="ruby"
                  />
                </div>
                <div>
                  <div className="py-2 text-xl font-semibold flex flex-row justify-between">
                    Ruby Essilfie-Kumi
                    <div className="flex flex-row gap-3">
                      <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                        <img width={20} src={linkedin} alt="linkedin" />
                      </div>
                      <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                        <img width={20} src={twitter} alt="twitter" />
                      </div>
                      <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                        <img width={20} src={facebook} alt="facebook" />
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold text-[#000033aa]">
                    Operations Officer
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold my-3">
                  Message from the Operations Officer
                </div>
                <div className="text-md text-[#333300] flex flex-col">
                  Let's encourage one another, celebrate our individual paths,
                  and encourage one another to follow our interests and
                  aspirations with a solid basis in love and respect.
                  <br />
                  <br /> We appreciate your support and patronage, young men and
                  adults alike who are joining us. We value your interest in
                  steluh and your dedication to raising the future generation
                  with AUCAS. <br />
                  <br />
                  I appreciate your presence and wish you everyone a day filled
                  with love, empowerment, and progress. As we travel together on
                  this road, let's rely on God's power, Word, and the strength
                  of our oneness. <br />
                  <br /> This is your chance to shine, also, amazing young women
                  in our midst, as we acknowledge the special talents,
                  capacities, and potential that each of you possesses, our
                  hearts are overflowing with gratitude. We have faith in your
                  abilities to spread God's love and truth because you are
                  magnificently formed
                  <br />
                  <br />
                  We express our sincere thanks to the God, parents, guardians,
                  and relatives who have raised and helped these young people.
                  Their character have been greatly influenced by your support,
                  love, advice, and prayers. It is a joy for us to accompany
                  them as they continue to develop.
                  <br />
                  <br /> We work hard to establish a welcoming environment in
                  our ministry where everyone may develop their full potential.
                  We want to see you thrive as you recognize your value and
                  significance as mentioned our goal is to provide you with the
                  tools you need to become resilient, brave, and caring leaders
                  who contribute to their communities and beyond.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="meet-the-team" className="mx-8 flex py-10 justify-center">
          <div className="flex flex-col w-[80%] items-center">
            <div className="text-3xl font-semibold my-3">Meet the team</div>
            <div className="grid grid-cols-4 gap-16 place-items-stretch">
              <img style={{ objectFit: "cover" }} src={prosper} alt="prosper" />
              <img style={{ objectFit: "cover" }} src={ruby} alt="ruby" />
              <img style={{ objectFit: "cover" }} src={louis} alt="louis" />
              <img style={{ objectFit: "cover" }} src={elliot} alt="elliot" />
            </div>
            <div className="grid grid-cols-4 gap-16 place-items-center">
              <div>
                <div className="py-2 text-xl font-semibold flex flex-row w-[240px]">
                  Prosper Okai Mensah
                </div>
                <div className="font-semibold text-[#000033aa]">
                  Principal Officer
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={linkedin} alt="linkedin" />
                  </div>
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={twitter} alt="twitter" />
                  </div>
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={facebook} alt="facebook" />
                  </div>
                </div>
              </div>
              <div>
                <div className="py-2 text-xl font-semibold flex flex-row w-[240px]">
                  Ruby Essilfie-Kumi
                </div>
                <div className="font-semibold text-[#000033aa]">
                  Operations Officer
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={linkedin} alt="linkedin" />
                  </div>
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={twitter} alt="twitter" />
                  </div>
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={facebook} alt="facebook" />
                  </div>
                </div>
              </div>
              <div>
                <div className="py-2 text-xl font-semibold flex flex-row w-[240px]">
                  Elliot Agbenyega
                </div>
                <div className="font-semibold text-[#000033aa]">
                  steluh Program Officer
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={linkedin} alt="linkedin" />
                  </div>
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={twitter} alt="twitter" />
                  </div>
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={facebook} alt="facebook" />
                  </div>
                </div>
              </div>
              <div>
                <div className="py-2 text-xl font-semibold flex flex-row w-[240px]">
                  Luois Marie Ayariga
                </div>
                <div className="font-semibold text-[#000033aa]">Advisor</div>
                <div className="flex flex-row gap-3">
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={linkedin} alt="linkedin" />
                  </div>
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={twitter} alt="twitter" />
                  </div>
                  <div className="flex items-center justify-center cursor-pointer p-2 w-8 h-8 border border-1 rounded-full border-gray-300 bg-none hover:bg-[#0cd2dc55] hover:border-[#0cd2dc55] transition-all ease-out duration-300">
                    <img width={20} src={facebook} alt="facebook" />
                  </div>
                </div>
              </div>
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
      </div>
    </FadeIn>
  );
};

export default AboutPage;
