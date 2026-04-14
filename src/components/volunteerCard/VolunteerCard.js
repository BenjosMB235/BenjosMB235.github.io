import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./VolunteerCard.scss";

export default function VolunteerCard({volunteer}) {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="volunteer-item">
      <div className={isDark ? "dark-mode volunteer-dot" : "volunteer-dot"}></div>
      <Fade left duration={1000}>
        <div className={isDark ? "dark-mode volunteer-card" : "volunteer-card"}>

          <div className="volunteer-card-header">
            <p className={isDark ? "dark-mode volunteer-role" : "volunteer-role"}>
              {volunteer.role}
            </p>
            <span className={isDark ? "dark-mode volunteer-date" : "volunteer-date"}>
              {volunteer.date}
            </span>
          </div>

          <p className="volunteer-org">
            {volunteer.organization}
            {volunteer.location && ` — ${volunteer.location}`}
          </p>

          <p className={isDark ? "dark-mode volunteer-desc" : "volunteer-desc"}>
            {volunteer.desc}
          </p>

          {volunteer.descBullets && (
            <ul className="volunteer-bullets">
              {volunteer.descBullets.map((bullet, i) => (
                <li
                  key={i}
                  className={isDark ? "dark-mode volunteer-bullet-item" : "volunteer-bullet-item"}
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {volunteer.tags && (
            <div className="volunteer-tags">
              {volunteer.tags.map((tag, i) => (
                <span key={i} className="volunteer-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </Fade>
    </div>
  );
}