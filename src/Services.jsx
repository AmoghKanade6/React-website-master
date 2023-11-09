import React from "react";
import ae from "../src/images/after-effects-cc.svg";
import ps from "../src/images/photoshop-cc-4.svg";
import pr from "../src/images/premiere-cc.svg";
import au from "../src/images/au.png";
import ServiceCard from "./ServiceCard";
import b from "../src/images/b.svg";
import dr from "../src/images/dr.svg";
import xd from "../src/images/xd.svg";
import bgm from "../src/images/bgm.svg";

const Services = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center desc mt-5">Our Services</h1>
            <div className="row gy-3">
              <ServiceCard
                serviceimg={ae}
                title="ANIMATION"
                desc="All Kinds of Animations are made including 3D, 2D, Character and motion poster please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={pr}
                title="VIDEO EDITING"
                desc="All Kinds of video editing are made including vfx and color grading please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={ps}
                title="LOGO DESIGNS"
                desc="All Kinds of designs are made including logos, vectors and custom templates please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={au}
                title="SONG KARAOKES"
                desc="All Music Karaokes are made with best Beats, less noice and 100% vocal removal please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={xd}
                title="UI/UX DESIGNS"
                desc="All UI and UX Designs are made for frontend web development with high quality please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={b}
                title="3D CHARACTERS"
                desc="All 3D Character Animations, 3D Scenes are made with Best Quality Effects please feel free to Mail Here"
                className="pt-3 pb-4"
              />
              <ServiceCard
                serviceimg={bgm}
                title="MOVIE BGMS"
                desc="All Movie BGMS are made with good quality beats and no disturbance in music please feel free to Mail Here"
              />
              <ServiceCard
                serviceimg={dr}
                title="FILM MAKING"
                desc="All Videos are edited with visual effects, color correction and audio post production please feel free to Mail Here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
