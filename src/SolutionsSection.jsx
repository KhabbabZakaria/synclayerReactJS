import Icon4 from "./assets/icon4.png";
import Icon5 from "./assets/icon5.png";
import Icon6 from "./assets/icon6.png";
import Icon7 from "./assets/icon7.png";
import Icon8 from "./assets/icon8.png";
import Icon9 from "./assets/icon9.png";

import Grid from "@mui/material/Grid2";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "@mui/material";

function SolutionsSection() {
  const isXsScreen = useMediaQuery("(max-width:600px)");

  const solutions = [
    {
      icon: Icon4,
      title: "Scalability",
      description: "AI-powered optimization for efficient resource allocation",
    },
    {
      icon: Icon5,
      title: "Latency & Congestion",
      description: "Smart traffic management and routing",
    },
    {
      icon: Icon6,
      title: "Security",
      description: "Enhanced encryption, access controls, and threat detection",
    },
    {
      icon: Icon7,
      title: "Resource Optimization",
      description:
        "Efficient use of resources, reducing energy consumption and costs",
    },
    {
      icon: Icon8,
      title: "Device Optimization",
      description: "To enhance data collection, processing, and transmission",
    },
    {
      icon: Icon9,
      title: "Interoperability",
      description: "Seamless integration with other networks and systems",
    },
  ];

  return (
    <section className="solutions-section">
      <h2 className="headerFont">Solutions</h2>
      {isXsScreen ? (
        <Marquee pauseOnHover gradient={false} speed={50}>
          {solutions.map((solution, index) => (
            <div key={index} className="marquee-item">
              <div className="solution-box">
                <img src={solution.icon} alt={`${solution.title} Icon`} />
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </div>
          ))}
        </Marquee>
      ) : (
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {solutions.map((solution, index) => (
            <Grid key={index} item size={{ xs: 12, sm: 6, md: 3 }}>
              <div className="solution-box">
                <img src={solution.icon} alt={`${solution.title} Icon`} />
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </section>
  );
}

export default SolutionsSection;
