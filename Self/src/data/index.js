import {
  stock,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Supply Chain Intern",
    company_name: "Freewire Technologies",
    date: "June 2023 - August 2023",
    details: [
      "Created interactive KPI dashboard with Supply Chain data using Power BI",
    ],
  },
  {
    title: "Business Economics",
    company_name: "UC San Diego",
    date: "Graduated June 2023",
    details: [
      "Earned <span style='color: white;'> Provost Honors </span> and was awarded the DOOR Scholarship for academic excellence.",
      "Completed advanced coursework in Data Analytics, Customer Analytics, Applied Market Research, Econometrics, Data Structures & Algorithms",
    ],
  },
  {
    title: "Google Data Analytics Professional Certificate",
    company_name: "By Coursera",
    date: "December 2023",
    details: [
      "Understand how to clean and organize data for analysis, and complete analysis and calculations using <span style='color: white;'> spreadsheets, SQL and R programming </span>",
      "Learn key analytical skills <span style='color: white;'> (data cleaning, analysis, & visualization) </span> and <span style='color: white;'> tools (spreadsheets, SQL, R programming, Tableau) </span>",
    ],
  },
];

const portfolio = [
  {
    name: "Stock Price Predictor",
    description:
      "Built a sequential LSTM neural network model in Python to forecast Nvidia stock prices using news sentiment analysis.",
    image: stock,
  },
  {
    name: "Customer Analytics - UCSD MGT100",
    description:
      "Forecast Product Adoption for New Smart Home Device using Bass Diffusion Modeling and A/B Testing",
    //image
  },
  {
    name: "Product Marketing & Management - UCSD MGT103",
    description:
      "Developed a Market Entry Strategy for a New Tech Product using Segmentation, Targeting, and A/B Testing",
    //image
  },
  {
    name: "Data Analytics/Social Science - UCSD POLI5",
    description:
      "Analyzed the impact of socioeconomic status (e.g. income level, parental education, access to resources) on education outcomes",
    //image
  },
  {
    name: "Business Process & Operations Management - UCSD MGT71",
    description:
      "Optimize inventory management system focusing on reducing excess inventory, minimizing stockouts, and improving turnover. Applying lean operations and continous improvement principles to streamline inventory process",
    //image
  },
  {
    name: "Applied Market Research - UCSD MGT108",
    description:
      "Conduct comprehensive market research project to determine customer needs and preferences for a new service. Project involves qualitative and quantitative methods, including interviews and surveys using Qualtrics and Sawtooth software, to inform brand positioning and identify high-priority features."
  }
];

export { experiences, portfolio };

