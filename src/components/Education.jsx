function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>PhD in Biochemistry</h3>
          <p className="instituition">University of Missouri, Expected 2029</p>
          <ul>
            <li><p className="detail">Research Focus: My Research focuses on Molecular Chaperones in Protein Quality Control</p></li>
          </ul>
        </div>
        <div className="education-item">
          <h3>BSc in Biochemistry, Cell and Molecular Biology</h3>
          <p className="instituition">University Of Ghana, Legon, 2020</p>
          <p className="detail">
            Graduated with a Distinction. <br /> 
            Served as Deputy Welfare Secretary, advocating for student welfare and organizing community-building initiatives. <br />
            My Research focused on the Efficacy of Entomopathathogenic Fungi on Chemical Insecticide Resitant against Fall Armyworm 
          </p>
        </div>
        <div className="education-item">
          <h3>High School Diploma</h3>
          <p className="instituition">St. Mary's Senior High School, Accra, 2016</p>
          <p className="detail">General Science</p>
          <p className="detail">Graduated with Distinction. <br /> Served as Dining Hall Prefect, managing dining operations and fostering a positive student environment. <br />Integral member of the Science and Maths Club, contributing to projects and competitions that deepened my passion for scientific discovery.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;