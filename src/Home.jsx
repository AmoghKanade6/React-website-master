/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { NavLink } from "react-router-dom";
import ae from "../src/images/after-effects-cc.svg";
import ps from "../src/images/photoshop-cc-4.svg";
import pr from "../src/images/premiere-cc.svg";
import HomeService from "./HomeService";
import data from "./data";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row ">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="desc">
                    All Motion Graphics <br /> Designs And
                    <br />
                    <strong className="brand-name"> After Effects </strong>
                    Templates
                  </h1>
                  <h4 className="my-3 desc">
                    Logo Design and Animation , Title Animation , Cinematic
                    Intros and lot more!
                  </h4>
                  <div className="mt-3">
                    <NavLink to="/templates" className="btn-get-started">
                      More Info
                    </NavLink>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-4 order-2 order-lg-2 header-img">
                  <img src={ae} className="img-fluid animated" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1 className="text-center desc mt-5">OUR SERVICES</h1>
              <div className="row gy-3">
                <HomeService
                  serviceimg={ae}
                  title="ANIMATION"
                  desc="All Kinds of Animations are made including 3D, 2D, Character and motion poster please feel free to Mail Here"
                />
                <HomeService
                  serviceimg={pr}
                  title="VIDEO EDITING"
                  desc="All Kinds of video editing are made including vfx and color grading please feel free to Mail Here"
                />
                <HomeService
                  serviceimg={ps}
                  title="LOGO DESIGNS"
                  desc="All Kinds of designs are made including logos, vectors and custom templates please feel free to Mail Here"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="top-templates">
        <h1 className="text-center desc mt-5">TOP TEMPLATES</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-3 mt-2">
                {data.slice(0, 3).map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      desc={val.desc}
                      download={val.download}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
