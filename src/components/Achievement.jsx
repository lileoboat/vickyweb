
import { useEffect, useRef, useState } from 'react';

function Achievements() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const sections = [
    {
      title: 'Activities and Hobbies',
      content: [
        'Lead Singer at Church.',
        'I love to learn new things',
        'Travel and see new places',
      ],
    },
    {
      title: 'Undergraduate Internship',
      content: [
        'Noguchi Memorial Institute for Medical Research - Experimental learning: PBMC isolation using density gradient centrifugation, ce;; counting and sorting using Flow cytometry, protein-protein interactions using ELISA, blood group testing, sickling typing and light microscopy.',
        'Amanfro Polyclinic Laboratory - Performed sample testing and diagnosis in an accurate and efficient manner, Prepared medical solutions and buffer as well as taking responsibilities for sterilizing lab equipment, Performed urine routine examination, malaria blood film test, serology testing and sickling type testing.  ',
        'West Africa Center for Cell Biology of Infectious Pathogens - Performed routine laboratory protocols such as PCR, agarose and polyacrylamide electrophoresis, microscopy and western blotting Cultured and maintained malaria parasites for In-vitro drug susceptibility assay ',
      ],
    },
    {
      title: 'Volunteering Activities / Student Leaderships',
      content: [
        'Deputy Welfare Secretary, Ghana Biochemistry Student Association for the 2018/2019 academic year, organized wellness events for 200+ students.',
        'Dining Hall Prefect, St. Mary Senior High School, 2016, managed dining operations for 500+ students.',
        'Volunteer Member for the, West African Center for Cell Biology of Infectious Pathogens(WACCBIP), as a member of the Breast Cancer Awareness and Screening Program, Covid-19 Exposure Testing and Awareness Program and a member of HIV-AIDS Awareness Program',
      ],
    },
    {
      title: 'Seminars',
      content: [
        'Building Sustainable Research Capacity in Africa: Lessons from the pandemic in 2021',  
        'Building Partnerships towards Healthcare Innovations for Africa in 2019',
        'Biochemistry: A peak into the future.. in 2019',
        'Uncovering the potential of young biochemists in Ghana and the world at large, 2018.',
      ],
    },
    {
      title: 'Trainings and Certifications',
      content: [
        'Training on Current Good Manufacturing Practices Promoting the Quality of Medicines Plus (PQM+ West Africa), USAID, 2022.',
        'Training on Stability Studies of pharmaceutical drug products, USP, Impurity testing, USP , 2023.',
        'Training on Introduction to Pharmacovigilance and Adverse Drug Reporting WACCBIP Research Conferences',
      ],
    },
    {
      title: 'Accomplishments',
      content: [
        'Outstanding contestant National Science and Math Quiz in 2016 st. Mary"s Senior High School.',
        'Winner of inter hall PREPCON quiz for final year students, 2020.',
        'Awarded [Grant/Scholarship Name] for [purpose], 20XX.',
      ],
    },
    {
      title: 'Areas of Expertise',
      content: [
        'Microbiology and Microscopy',
        'Malaria Parasite culturing and Maintenance',
        'In vitro drug susceptibility assay',
        'ELISA',
        'Isolation of PBMCs',
        'Western Blotting',
        'Agarose and Polyacrylamide Gel electrophoresis',
        'Graph Pad Prism',
        'Microsoft Word/ Excel',
        'DNA and RNA extraction',
        'Polymerase Chain Reaction'
      ],
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - containerWidth;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0; // Reset to start
      } else {
        scrollContainer.scrollLeft += containerWidth; // Scroll to next section
      }
    };

    const interval = setInterval(scroll, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = () => {
    setIsPaused(true); // Pause auto-scroll on manual scroll
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => setIsPaused(false), 3000); // Resume after 3s
  };

  return (
    <section id="achievements" className="achievements">
      <h2>Achievements & More</h2>
      <div
        className="scroll-container"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onScroll={handleScroll}
      >
        <div className="scroll-content">
          {sections.map((section, index) => (
            <div key={index} className="scroll-item">
              <h3>{section.title}</h3>
              <ul>
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
