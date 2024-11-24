import Icon2 from "./assets/icon2.png";
import Icon3 from "./assets/icon3.png";
import Grid from "@mui/material/Grid2";

import "./textStyle.css";

function FeaturesSection() {
  return (
    <div className="features-section" style={{ overflow: "hidden" }}>
      <h2 className="headerFont">What We Do</h2>
      <div className="subtitle">
        Unlock the Power of AI and Edge Computing with
        <span style={{ display: "block" }}>DEPIN NETWORKS</span>
      </div>

      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ paddingLeft: "2%", paddingRight: "2%" }}
      >
        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
          <div className="feature-box">
            <img src={Icon2} alt="AI Powered Icon" />
            <h3 className="subtitle">
              Depin networks can customize our AI-powered optimization to unlock
              their full potential
            </h3>
          </div>
        </Grid>

        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
          <div className="feature-box">
            <img src={Icon3} alt="Hardware Icon" />
            <h3 className="subtitle">
              Enabling edge computing capabilities to hardware and physical
              devices
            </h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FeaturesSection;
