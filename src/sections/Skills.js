import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="snap-start min-h-screen bg-black text-white p-10 md:p-20">
      <h2 className="text-3xl font-bold mb-12 text-left text-[#d4af37]">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-300">Languages & Tools</h3>
          <ul className="space-y-2 text-base text-gray-400">
            <li>Python</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Postman</li>
            <li>Jira</li>
            <li>Android SDK</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-300">ML & NLP</h3>
          <ul className="space-y-2 text-base text-gray-400">
            <li>TensorFlow, PyTorch, Keras</li>
            <li>Scikit-learn, spaCy, NLTK</li>
            <li>OCR, LangChain, LangGraph</li>
            <li>HuggingFace</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-300">Data Analysis & Viz</h3>
          <ul className="space-y-2 text-base text-gray-400">
            <li>Pandas, NumPy</li>
            <li>Matplotlib, Seaborn</li>
            <li>Tableau, Power BI</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-300">Databases & Big Data</h3>
          <ul className="space-y-2 text-base text-gray-400">
            <li>MySQL, PostgreSQL</li>
            <li>Apache Spark, Hadoop</li>
            <li>Databricks</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-300">Cloud & APIs</h3>
          <ul className="space-y-2 text-base text-gray-400">
            <li>AWS (basic familiarity)</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-300">Concepts</h3>
          <ul className="space-y-2 text-base text-gray-400">
            <li>Natural Language Processing (NLP)</li>
            <li>Predictive Modelling</li>
            <li>Clustering</li>
            <li>Data Visualisation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}