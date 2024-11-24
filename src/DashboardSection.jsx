import Icon10 from "./assets/icon10.png";
import Icon11 from "./assets/icon11.png";
import Icon12 from "./assets/icon12.png";

import Marquee from "react-fast-marquee";
import { useMediaQuery } from "@mui/material";

import "./textStyle.css";

function DashboardSection() {
  const isXsScreen = useMediaQuery("(max-width:600px)");

  const features = [
    {
      icon: Icon10,
      title: "In-Depth Analytics",
      description:
        "Dive into detailed metrics and KPIs to identify areas of improvement and optimize network & device performance.",
    },
    {
      icon: Icon11,
      title: "Customizable Visualizations",
      description:
        "Create personalized dashboards and reports to focus on the insights that matter most to your community.",
    },
    {
      icon: Icon12,
      title: "Real-Time Monitoring",
      description:
        "Get instant alerts and notifications to ensure prompt action and minimize downtime.",
    },
  ];

  return (
    <section className="dashboard-section">
      <p className="dashboard-title">Dashboard access for Depin networks</p>
      <p className="dashboard-description">
        Dive into detailed metrics and KPIs to identify areas of improvement and
        optimize network & device performance.
      </p>

      {isXsScreen ? (
        <Marquee pauseOnHover gradient={false} speed={50}>
          {features.map((feature, index) => (
            <div key={index} className="marquee-item">
              <div className="dashboard-feature">
                <img
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  className="dashboard-icon"
                />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </Marquee>
      ) : (
        <div className="dashboard-features">
          {features.map((feature, index) => (
            <div key={index} className="dashboard-feature">
              <img
                src={feature.icon}
                alt={`${feature.title} Icon`}
                className="dashboard-icon"
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default DashboardSection;
