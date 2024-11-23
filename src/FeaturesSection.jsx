import Icon2 from './assets/icon2.png';
import Icon3 from './assets/icon3.png';

function FeaturesSection() {
    return (
        <section className="features-section">
            <h2>What We Do</h2>
            <div className="subtitle">
                Unlock the Power of AI and Edge Computing with <span>DEPIN NETWORKS</span>
            </div>
            <div className="features-container">
                <div className="feature-box">
                    <img src={Icon2} alt="AI Powered Icon" />
                    <h3>
                        Depin networks can customize our AI-powered optimization to unlock their full potential
                    </h3>
                </div>
                <div className="feature-box">
                    <img src={Icon3} alt="Hardware Icon" />
                    <h3>Enabling edge computing capabilities to hardware and physical devices</h3>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;