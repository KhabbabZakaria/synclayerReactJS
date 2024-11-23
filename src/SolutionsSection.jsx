import Icon4 from './assets/icon4.png';
import Icon5 from './assets/icon5.png';
import Icon6 from './assets/icon6.png';
import Icon7 from './assets/icon7.png';
import Icon8 from './assets/icon8.png';
import Icon9 from './assets/icon9.png';

function SolutionsSection() {
    return (
        <section className="solutions-section">
            <h2>Solutions</h2>
            <div className="solutions-container">
                <div className="solution-box">
                    <img src={Icon4} alt="Scalability Icon" />
                    <h3>Scalability</h3>
                    <p>AI-powered optimization for efficient resource allocation</p>
                </div>
                <div className="solution-box">
                    <img src={Icon5} alt="Latency Icon" />
                    <h3>Latency & Congestion</h3>
                    <p>Smart traffic management and routing</p>
                </div>
                <div className="solution-box">
                    <img src={Icon6} alt="Security Icon" />
                    <h3>Security</h3>
                    <p>Enhanced encryption, access controls, and threat detection</p>
                </div>
                <div className="solution-box">
                    <img src={Icon7} alt="Resource Icon" />
                    <h3>Resource Optimization</h3>
                    <p>Efficient use of resources, reducing energy consumption and costs</p>
                </div>
                <div className="solution-box">
                    <img src={Icon8} alt="Device Optimization Icon" />
                    <h3>Device Optimization</h3>
                    <p>To enhance data collection, processing, and transmission</p>
                </div>
                <div className="solution-box">
                    <img src={Icon9} alt="Interoperability Icon" />
                    <h3>Interoperability</h3>
                    <p>Seamless integration with other networks and systems</p>
                </div>
            </div>
        </section>
    );
}

export default SolutionsSection;