import React from "react";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./Laurels.css";

const Award = ({ award: { title, imgUrl, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <p className="p__cormorant" style={{ color: "#DCCA87" }}>
      {title}
    </p>
    <p className="p__opensans">{subtitle}</p>
  </div>
);
const Laurels = () => (
  <div className="app__wrapper flex__center section__padding app__bg ">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <Award award={award} title={award.title} subtitle={award.subtitle} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
