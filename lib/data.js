export const personalInfo = {
  name: "Ashika Panchal",
  email: "ashikapanchal54@gmail.com",
  phone: "6266155337",
  location: "Ratlam, India",
  profileImage: "/images/profile.jpg",
  github: "https://github.com/ashikapl",
  gfg: "https://www.geeksforgeeks.org/user/ashikapaxkkv/",
  leetcode: "https://leetcode.com/u/ashikapanchal54/",
  codechef: "https://www.codechef.com/users/alert_sand_60",
  resumeLink: "/resume.pdf",
  bio: "I'm a Computer Application student passionate about developing data-driven solutions and machine learning applications. With experience in creating prediction models and data visualization tools, I enjoy solving algorithmic problems and exploring new technologies in the AI and data science realm."
};

export const education = [
  {
    institution: "Royal Institute Of Technology and Advanced Studies",
    degree: "Bachelor of Computer Application",
    location: "Ratlam, India",
    duration: "August 2023 – May 2026",
    status: "Ongoing"
  },
  {
    institution: "Bhartiya Vidhyapeeth Higher Secondary School",
    degree: "12th",
    location: "Nagda, India",
    duration: "June 2022 – March 2023",
    gpa: "8.0/10.0"
  }
];

export const projects = [
  {
    id: "covid-visualization",
    title: "COVID-19 Data Analysis and Visualization",
    date: "November 2024",
    image: "/images/projects/covid.jpg",
    technologies: ["Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/ashikapl/Python-Experiments/blob/main/covid19.py",
    description: "A comprehensive COVID-19 data analysis project utilizing Python's data science libraries to extract meaningful insights from pandemic data.",
    details: [
      "Analyzed and visualized COVID-19 data trends to identify patterns and correlations in infection rates, recovery, and mortality across different regions",
      "Implemented thorough data preprocessing techniques to handle missing values and standardize date formats across disparate datasets",
      "Created intuitive visualizations including line charts for temporal analysis, bar graphs for regional comparisons, and heatmaps for correlation studies",
      "Generated actionable insights from the data, helping to understand outbreak patterns and effectiveness of containment measures"
    ]
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Disease Prediction App",
    date: "December 2024",
    image: "/images/projects/diabetes.jpg",
    technologies: ["NumPy", "Pandas", "Scikit-learn"],
    github: "https://github.com/ashikapl/Python-Experiments/blob/main/diabetesPrePro.py",
    description: "A machine learning application that predicts diabetes risk based on health metrics, providing early detection capabilities.",
    details: [
      "Developed a predictive model using machine learning algorithms to analyze patient health metrics and determine diabetes likelihood",
      "Engineered a user-friendly interface allowing patients to input their health parameters including glucose levels, BMI, age, and family history",
      "Implemented probability scoring to provide users with confidence levels for predictions, enhancing transparency of results",
      "Optimized the model through cross-validation and hyperparameter tuning to achieve high accuracy in diabetes risk assessment"
    ]
  },
  {
    id: "fake-news",
    title: "Fake News Prediction using Logistic Regression",
    date: "January 2025",
    image: "/images/projects/fake-news.jpg",
    technologies: ["NumPy", "Pandas", "Scikit-learn"],
    github: "https://github.com/ashikapl/Python-Experiments/blob/main/fakeNewsPredict.py",
    description: "A machine learning solution to combat misinformation by classifying news articles as real or fake using NLP techniques.",
    details: [
      "Created a robust classification system that distinguishes between legitimate and fabricated news articles using Logistic Regression",
      "Applied natural language processing techniques including stopword removal and stemming to preprocess textual data",
      "Utilized TF-IDF Vectorization to convert text data into numerical features suitable for model training",
      "Developed and trained a Logistic Regression classifier with high accuracy metrics to identify potential misinformation in news content"
    ]
  },
  {
    id: "calories-prediction",
    title: "Calories Burnt Prediction",
    date: "February 2025",
    image: "/images/projects/calories.jpg",
    technologies: ["NumPy", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/ashikapl/Python-Experiments/blob/main/caloriesPredict.py",
    description: "An advanced prediction system that estimates calories burned during exercise based on multiple physical and environmental factors.",
    details: [
      "Engineered a predictive model using XGBoost Regressor to estimate calories burned during physical activities",
      "Integrated multiple factors including gender, age, height, weight, exercise duration, heart rate, and ambient temperature into the prediction model",
      "Performed extensive data preprocessing including encoding categorical variables, feature selection, and distribution analysis",
      "Developed an interactive Streamlit-based UI enabling users to input their personal metrics and receive real-time calorie burn estimations"
    ]
  }
];

export const skills = {
  languages: ["Python", "C++", "HTML/CSS", "MySQL"],
  devTools: ["VS Code", "Jupyter Notebook", "Docker"],
  technologies: ["Git/GitHub", "Bootstrap", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  coursework: ["Data Structures and Algorithms", "Operating System", "Database Management System", "Computer Networking", "Machine Learning"]
};

export const interests = [
  "Algorithmic Problem Solving",
  "AI Research",
  "Data Science Trends",
  "Exploring and learning new skills"
];