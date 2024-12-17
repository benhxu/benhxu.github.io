import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="card-container">
        {/* First Job */}
        <div className="card">
          <h3>Freewire Technologies</h3>
          <p><strong>Supply Chain Intern</strong></p>
          <p><strong>June 2023 - September 2023</strong></p>
          <p><strong>Responsibilities:</strong></p>
          <ul>
            <li>Spearheaded the development and visualization of supply chain KPIs via Power BI</li>
            <li>Supported enterprise data initiatives by collecting, cleansing, and analyzing supply chain datasets from Netsuite ERP, Excel, and external sources via SQL</li>
            <li>Researched alternative materials to reduce cost without compromising quality</li>
            <li>Coordinated with 3PL to implement cost-minizing shipment routes</li>
          </ul>
        </div>
        {/* Second Job */}
        <div className="card">
          <h3>University of California, San Diego</h3>
          <p><strong>B.S. Business Economics</strong></p>
          <p><strong>Graduated: June 2023</strong></p>
          <p><strong>Awards</strong></p>
            <li>Provost Honors</li>
            <li>DOOR Scholarship</li>
          <p><strong>Relevant Coursework:</strong><br></br> Microeconomics, Macroeconomics, Econometrics, Statistics, Multivariate Calculus, Customer Analytics, Data Analytics, Product Marketing & Management, Business & Operations Management, Business & Organizational Leadership, Business Finance, Principles of Accounting, Negotiations, Applied Market Research, Data Structures & Algorithms (C++)</p>
        </div>
        {/* Third Job */}
        <div className="card">
          <h3>Coursera Google Data Analytics Professional Certificate</h3>
          <p><strong>Completed: December 2023</strong></p>
          <ul>
            <li>Data Cleaning, Analysis, Visualization</li>
            <li>Tools: Spreadsheets, SQL, R, Tableau</li>
          </ul>
        </div>
        {/* Add more cards here if applicable */}
      </div>
    </section>
  );
};

export default Experience;