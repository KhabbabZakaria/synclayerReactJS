import Grid from "@mui/material/Grid2";

function DashboardSection2() {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid item size={{ xs: 10, md: 8 }}>
        <section className="dashboard-section2">
          <div className="dashboard-content">
            <h6 className="dashboard-title2">How We Do</h6>
            <p className="dashboard-description2">
              AI-Driven Scalable Optimization
            </p>
            <p className="dashboard-details">
              Our optimization solution is powered by Multimodal AI. It
              seamlessly combines Modular Architecture for scalable and custom
              integration with Depin networks, and leverages Reinforcement
              Learning Algorithms to continuously learn and enhance efficiency
              in real time.
            </p>
          </div>
        </section>
      </Grid>
    </Grid>
  );
}

export default DashboardSection2;
