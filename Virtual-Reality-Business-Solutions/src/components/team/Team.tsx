import "./team.css";
import { teamData } from "../../data/team-data";
import skype from "../../assets/images/skype.svg";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";

const Team = () => {
  return (
    <section className="team">
      <h3 className="team-title">Met Our Team</h3>
      <p className="team-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </p>
      <div className="team-card-wrapper">
        {teamData.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.img} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
            <div className="team-social">
              <img src={skype} alt="skype" />
              <img src={linkedin} alt="linkedin" />
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;
