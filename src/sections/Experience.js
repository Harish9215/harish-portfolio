import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="snap-start min-h-screen bg-black text-white p-10 md:p-20">
      <h2 className="text-3xl font-bold mb-6 text-left text-[#d4af37]">Experience</h2>
      <div className="space-y-10 px-6 py-4">
        <div className="border-b border-gray-700 pb-6">
          <p className="text-gray-400 text-lg">Moxo</p>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Solution Architect</h3>
          <p className="text-gray-400 text-base mb-4">Jan 2021 – Aug 2023</p>
          <div className="text-gray-300 text-base leading-relaxed space-y-4">
            <p>
              At Moxo, I worked as a <span className="font-semibold">Solution Architect and Engineer</span>, partnering closely with clients in the banking and financial sectors, including Emirates Bank of Dubai and Raiffeisen Bank. My primary responsibility was to deeply understand their business goals and deliver tailored, end-to-end solutions using Moxo’s SDK.
            </p>
            <p>
              I designed scalable and efficient architectures that integrated seamlessly into client platforms, leveraging <span className="italic">REST APIs, Android SDK, and Postman</span>. I also contributed during the pre-sales stage by presenting demos and designing proof-of-concept workflows. Post-sale, I guided clients through onboarding, implementation, and optimization.
            </p>
            <p>
              I led a technical services team and collaborated with cross-functional groups to ensure smooth delivery. I created detailed documentation, integration guides, and architecture diagrams, while also facilitating training workshops to drive client success and long-term engagement.
            </p>
          </div>
        </div>
        <div className="pt-6">
          <p className="text-gray-400 text-lg">IKU</p>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Product Engineer</h3>
          <p className="text-gray-400 text-base mb-4">Sep 2019 – Dec 2020</p>
          <div className="text-gray-300 text-base leading-relaxed space-y-4">
            <p>
              At IKU, I worked as a <span className="font-semibold">Product Engineer with a focus on Mobile Application</span>, leading the development of a mobile app aimed at promoting environmental awareness and sustainability. I translated complex ideas into intuitive, user-friendly designs that encouraged users to adopt eco-friendly habits.
            </p>
            <p>
              My responsibilities included conducting user research to understand behavior and motivation, designing wireframes and interactive prototypes, and collaborating closely with developers to ensure seamless implementation. I prioritized clean navigation, impactful visuals, and an engaging experience aligned with the product’s sustainability goals.
            </p>
            <p>
              This role honed my skills in user-centric design, product thinking, and effective collaboration. I also utilized tools like <span className="italic">SQL</span> and <span className="italic">Tableau</span> to drive data-informed design decisions and product improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}