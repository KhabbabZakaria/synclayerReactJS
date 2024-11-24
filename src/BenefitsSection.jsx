import "./textStyle.css";

function BenefitsSection() {
  return (
    <section className="benefits-section">
      <h2 className="headerFont">Benefits</h2>
      <div className="benefits-heading">
        <h3>
          Sync Layer <span className="highlighted">delivers optimization</span>{" "}
          and analytics for Depin networks
        </h3>
      </div>
      <div className="benefits-list">
        <div className="benefit-item">
          <div className="icon"></div>
          <p className="textFont">Increased operational efficiency.</p>
        </div>
        <div className="benefit-item">
          <div className="icon"></div>
          <p className="textFont">Improved security protocols.</p>
        </div>
        <div className="benefit-item">
          <div className="icon"></div>
          <p className="textFont">Data analytics for better insights.</p>
        </div>
        <div className="benefit-item">
          <div className="icon"></div>
          <p className="textFont">Edge computing scalability.</p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
