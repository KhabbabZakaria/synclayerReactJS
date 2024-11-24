import IconImage from "./assets/icon-removebg-preview.png";
import Grid from "@mui/material/Grid2";

import "./textStyle.css";

function MainContent() {
  return (
    <div style={{ paddingBottom: "2%", overflow: "hidden" }}>
      <Grid container spacing={3} alignItems="center">
        <Grid
          item
          size={{ xs: 12, sm: 12, md: 7 }}
          style={{
            textAlign: "left",
            padding: "0 2%",
          }}
        >
          <h1 className="headerFont">Optimization to Unlock Full Potential</h1>
          <p className="textFont">
            Sync Layer’s AI-powered optimization enables edge computing
            capabilities for Depin networks.
            <br />
            <br />
            We optimize Depin networks to enhance performance, security, and
            trust in decentralized data, so enterprises can confidently leverage
            its value.
          </p>
        </Grid>

        <Grid
          item
          size={{ xs: 12, sm: 12, md: 4 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={IconImage}
            alt="Icon"
            className="responsive-image"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
