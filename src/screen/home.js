import React, { Component } from "react";
import "../style/hm.css";

import serImg1 from "../asset/img_ser_1.svg";
import serImg2 from "../asset/img_ser_2.svg";
import serImg3 from "../asset/img_ser_3.svg";
import serImg4 from "../asset/img_ser_4.svg";
import serImg5 from "../asset/img_ser_5.svg";
import serImg6 from "../asset/img_ser_6.svg";

import stackImg1 from "../asset/img_stack_1.svg";
import stackImg2 from "../asset/img_stack_2.svg";
import stackImg3 from "../asset/img_stack_3.svg";
import stackImg4 from "../asset/img_stack_4.svg";
import stackImg5 from "../asset/img_stack_5.svg";
import stackImg6 from "../asset/img_stack_6.svg";
import stackImg7 from "../asset/img_stack_7.svg";
import stackImg8 from "../asset/img_stack_8.svg";
import stackImg9 from "../asset/img_stack_9.svg";

import clImg1 from "../asset/img_cl_1.png";
import clImg2 from "../asset/img_cl_2.png";
import clImg3 from "../asset/img_cl_3.png";
import clImg4 from "../asset/img_cl_4.png";
import clImg5 from "../asset/img_cl_5.png";
import clImg6 from "../asset/img_cl_6.png";

export default class HomeScreen extends Component {
  set = [
    { title: "Tech Transformation", src: serImg1 },
    { title: "Team Building", src: serImg2 },
    { title: "Talent On Demand", src: serImg3 },
    { title: "Product Management", src: serImg4 },
    { title: "Discovery Workshop", src: serImg5 },
    { title: "Latest Technology Training", src: serImg6 },
  ];

  tech = [
    stackImg1,
    stackImg2,
    stackImg3,
    stackImg4,
    stackImg5,
    stackImg6,
    stackImg7,
    stackImg8,
    stackImg9,
  ];

  render() {
    return (
      <div className="hm">
        <div className="hm_">
          {/* //////////////////HEADER///////////////// */}
          {/* //////////////////HEADER///////////////// */}
          {/* //////////////////HEADER///////////////// */}
          {/* //////////////////HEADER///////////////// */}
          <div className="hmA">
            <div className="hmAa" />
            <div className="hmAb">
              <div className="hmAc">CONTACT US</div>
              <div className="hmAd" />
            </div>
          </div>
          {/* //////////////////TOP BODY///////////////// */}
          {/* //////////////////TOP BODY///////////////// */}
          {/* //////////////////TOP BODY///////////////// */}
          {/* //////////////////TOP BODY///////////////// */}
          <div className="hmB">
            <div className="hmBa">
              <div className="hmBb">
                <div className="hmBc">Design and Build your</div>
                <div className="hmBd">Technology Team</div>
                <div className="hmBe">with Perfectz Digital</div>
                <div className="hmBf">
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                  Porttitor in nulla posuere pellentesque posuere. Duis velscing
                  elit, scing.
                </div>
                <div className="hmAb">
                  <div className="hmAc">OUR SERVICES</div>
                  <div className="hmAd" />
                </div>
                <div className="hmBg">
                  <div className="hmBgA" />
                </div>
              </div>
              <div className="hmBh" />
            </div>
            <div className="hmBi">Our Services</div>
            <div className="hmBj">
              <div className="hmBjA" />
              <div className="hmBjB">
                <div className="hmBjC"></div>
                <div>
                  {this.set.map((item, k) => (
                    <div key={k} className="hmBjE">
                      <img className="hmBjEa" src={item.src} />
                      <div className="hmBjEb">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hmBk">
              <div className="hmBkA">
                <div className="hmBkB">hello.</div>
                <div className="hmBkC">Know more</div>
              </div>
              <div className="hmBkD">
                We work in partnership with our clients to build high
                performance teams
              </div>
              <div className="hmBkE"></div>
            </div>
          </div>
          {/* //////////////////// LATEST TECHNOLAGY //////////////////// */}
          {/* //////////////////// LATEST TECHNOLAGY //////////////////// */}
          {/* //////////////////// LATEST TECHNOLAGY //////////////////// */}
          {/* //////////////////// LATEST TECHNOLAGY //////////////////// */}
          <div className="hmC">
          <div className="hmC-bg1" />
            <div className="hmCa" />
            <div className="hmCb">
              <div className="hmCc">LATEST TECHNOLOGY</div>
              <div className="hmCd">TRAINING PROGRAM</div>
              <div className="hmCe">
                We continuously seek exceptional associates when recruiting new
                employees to us and we provide all sort of training programme to
                improve the inter-personal skills of each candidates we hire.
              </div>
              <div className="hmCf">
                {this.tech.map((item, k) => (
                  <img className="hmCg" key={k} src={item} />
                ))}
              </div>
              <div className="hmCh">DISCOVER MORE</div>
            </div>
          </div>
          {/* ////////////////////// TECH STACK ///////////////////// */}
          {/* ////////////////////// TECH STACK ///////////////////// */}
          {/* ////////////////////// TECH STACK ///////////////////// */}
          {/* ////////////////////// TECH STACK ///////////////////// */}
          <div className="hmD">
            <div className="hmDa">Technology Stack</div>
            <div className="hmDb">
              <div className="hmDc">
                All our engineers are expertise in latest mobile, web and
                backend technology stack
              </div>
              <div className="hmDd">
                <div className="hmDe">
                  <img className="hmDf" src={stackImg1} />
                  <img className="hmDf" src={stackImg2} />
                  <img className="hmDf" src={stackImg3} />
                </div>
                <div className="hmDg" />
                <div className="hmDe">
                  <img className="hmDf" src={stackImg4} />
                  <img className="hmDf" src={stackImg5} />
                  <img className="hmDf" src={stackImg6} />
                </div>
                <div className="hmDh" />
                <div className="hmDe">
                  <img className="hmDf" src={stackImg7} />
                  <img className="hmDf" src={stackImg8} />
                  <img className="hmDf" src={stackImg9} />
                </div>
              </div>
              <div className="hmDi" />
              <div className="hmDj" />
            </div>
          </div>
          {/* ////////////////////// TECH STACK ///////////////////// */}
          {/* ////////////////////// TECH STACK ///////////////////// */}
          {/* ////////////////////// TECH STACK ///////////////////// */}
          {/* ////////////////////// TECH STACK ///////////////////// */}
          <div className="hmE">
            <div className="hmEa"></div>
            <div className="hmEb">
              <div className="hmEc">
                We are here to provide Talents-on-Demand to create High
                Performance Teams
              </div>
              <div className="hmEd">LET’S WORK TOGETHER</div>
            </div>
          </div>
          {/* ////////////////////// REFRESH ///////////////////// */}
          {/* ////////////////////// REFRESH ///////////////////// */}
          {/* ////////////////////// REFRESH ///////////////////// */}
          {/* ////////////////////// REFRESH ///////////////////// */}
          <div className="hmF">
            <div className="hmFa" />
            <div className="hmFb">
              Refresh Your Brands’ with our World class designers
            </div>
            <div className="hmFc">
              We believe “Mobile first design” principle is the core of any
              product design.
            </div>
            <div className="hmFd">KNOW MORE</div>
          </div>
          {/* ////////////////////// CLINTS ///////////////////// */}
          {/* ////////////////////// CLINTS ///////////////////// */}
          {/* ////////////////////// CLINTS ///////////////////// */}
          {/* ////////////////////// CLINTS ///////////////////// */}
          <div className="hmG">
            <div className="hmGa">Our Clients</div>
            <div className="hmGb">
              Lorem Ipsum dolar sit amat der satone recoredsaw yetorsrtatew
              dresgrete utireds
            </div>
            <div className="hmGc">
              <img className="hmGd" alt="img" src={clImg1} />
              <div className="hmGe" />
              <img className="hmGd" alt="img" src={clImg2} />
              <div className="hmGe" />
              <img className="hmGd" alt="img" src={clImg3} />
            </div>
            <div className="hmGf" />
            <div className="hmGc">
              <img className="hmGd" alt="img" src={clImg4} />
              <div className="hmGe" />
              <img className="hmGd" alt="img" src={clImg5} />
              <div className="hmGe" />
              <img className="hmGd" alt="img" src={clImg6} />
            </div>
          </div>
          {/* ////////////////////// CONTACT ///////////////////// */}
          {/* ////////////////////// CONTACT ///////////////////// */}
          {/* ////////////////////// CONTACT ///////////////////// */}
          {/* ////////////////////// CONTACT ///////////////////// */}
          <div className="hmH">
            <div className="hmHa">
              <div className="hmHb">CONTACT US</div>
              <input className="hmHc" placeholder="Full Name" />
              <input className="hmHc" placeholder="Phone Number" />
              <input className="hmHc" placeholder="Phone Number" />
              <textarea className="hmHd" placeholder="Message" />
              <button className="hmHg">SEND ENQUIRY</button>
            </div>
            <div className="hmHh">
              <div>
                <div className="hmHi"></div>
                <div className="hmHj">
                  <div className="hmHk" />
                  <div className="hmHl">
                    <div className="hmHm" />
                    <div className="hmHn">
                      Sharjah Publishing City Free Zone,
                      <br />
                      P.O Box 73111, UAE
                    </div>
                  </div>
                  <div className="hmHl">
                    <div className="hmHm-2" />
                    <div className="hmHn">hello@perfectzdigital.com</div>
                  </div>
                  <div className="hmHo">
                    <div className="hmHoA">Follow Us</div>
                    <div className="hmHoB" />
                    <div className="hmHoC" />
                    <div className="hmHoD" />
                    <div className="hmHoE" />
                  </div>
                </div>
                <div className="hmHp">© Copyright 2022 | Perfectz Digital</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
