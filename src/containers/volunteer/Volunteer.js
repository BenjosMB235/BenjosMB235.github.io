import React, {useContext} from "react";
import "./Volunteer.scss";
import VolunteerCard from "../../components/volunteerCard/VolunteerCard";
import {volunteerSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Volunteer() {
  const {isDark} = useContext(StyleContext);

  if (!volunteerSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="volunteer">
        <div className="volunteer-main-div">
          <div className="volunteer-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading volunteer-heading"
                  : "heading volunteer-heading"
              }
            >
              {volunteerSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle volunteer-subtitle"
                  : "subTitle volunteer-subtitle"
              }
            >
              {volunteerSection.subtitle}
            </p>
          </div>
          <div className="volunteer-timeline">
            <div className="volunteer-timeline-line"></div>
            {volunteerSection.volunteering.map((vol, index) => (
              <VolunteerCard key={index} isDark={isDark} volunteer={vol} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}