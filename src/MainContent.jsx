import IconImage from './assets/icon-removebg-preview.png';

function MainContent() {
    return (
        <main className="main-content">
            <div className="text-section">
                <h1>Optimization to Unlock Full Potential</h1>
                <p>
                    Sync Layer’s AI-powered optimization enables edge computing capabilities for Depin networks.
                    <br />
                    We optimize Depin networks to enhance performance, security, and trust in decentralized data, 
                    so enterprises can confidently leverage its value.
                </p>
                {/* Uncomment the following block if you want to include the "Get Started" button */}
                {/* <p>
                    <a href="#" className="get-started-btn">Get Started</a>
                </p> */}
            </div>
            <div className="image-section">
                <img
                    src={IconImage}
                    alt="Icon"
                />
            </div>
        </main>
    );
}

export default MainContent;