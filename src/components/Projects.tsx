import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="card-container">
        <div className="card">
          <h3>Stock Price Predictor</h3>
          <p>Sequential LSTM neural network model via Python, TensorFlow, Scikit-Learn, BeautifulSoup <br></br>
          Forecast stock price using news API for sentiment analysis
          </p>
        </div>
        <div className="card">
          <h3>Customer Analytics - UCSD MGT100 </h3>
          <p>Forecast product adoption for new smart home device using Bass Diffusion Modeling and A/B Testing.</p>
        </div>
        <div className="card">
          <h3>Data Analytics for Social Science - UCSD POLI5</h3>
          <p>Analyzed the impact of socioeconomic status (e.g. income level, parental education, access to resources) on education outcomes.</p>
        </div>
        <div className="card">
          <h3>Product Marketing & Management - UCSD MGT103</h3>
          <p>Developed a market entry strategy for new techn products using segmentation, targeting, and A/B testing.</p>
        </div>
        <div className="card">
          <h3>Applied Market Research - UCSD MGT108</h3>
          <p>Conducted market research project to determine customer needs and preferences for a new service. <br></br>
          Utilized Qualtrics and Sawtooth software to conduct interviews and surveys to inform brand positioning and identify high priority features.
          </p>
        </div>
        <div className="card">
          <h3>Business Process & Operations Management - UCSD MGT71</h3>
          <p>Optimized inventory management system bu reducing excess inventory, minimizing stockouts, and improving turnover. Applying lean operations and continous improvement principles to streamline inventory process.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;