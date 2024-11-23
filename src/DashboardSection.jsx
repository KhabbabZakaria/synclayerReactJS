import Icon10 from './assets/icon10.png';
import Icon11 from './assets/icon11.png';
import Icon12 from './assets/icon12.png';

function DashboardSection() {
    return (
        <section className="dashboard-section">
            <h2 className="dashboard-title">Dashboard access for Depin networks</h2>
            <p className="dashboard-description">
                Dive into detailed metrics and KPIs to identify areas of improvement and optimize network & device performance.
            </p>
            <div className="dashboard-features">
                <div className="dashboard-feature">
                    <img src={Icon10} alt="In-Depth Analytics Icon" className="dashboard-icon" />
                    <h3>In-Depth Analytics</h3>
                    <p>Dive into detailed metrics and KPIs to identify areas of improvement and optimize network & device performance.</p>
                </div>
                <div className="dashboard-feature">
                    <img src={Icon11} alt="Customizable Visualizations Icon" className="dashboard-icon" />
                    <h3>Customizable Visualizations</h3>
                    <p>Create personalized dashboards and reports to focus on the insights that matter most to your community.</p>
                </div>
                <div className="dashboard-feature">
                    <img src={Icon12} alt="Real-Time Monitoring Icon" className="dashboard-icon" />
                    <h3>Real-Time Monitoring</h3>
                    <p>Get instant alerts and notifications to ensure prompt action and minimize downtime.</p>
                </div>
            </div>
        </section>
    );
}

export default DashboardSection;