import ProfilePic from '../assets/Profile.jpg';
function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={ProfilePic} alt="Profile" className="profile-img" />
        <h1>Hi, I am Victoria</h1>
        <p>
          I am a PhD student in Biochemistry, passionate about unraveling the mysteries of life at the molecular level. I seek to understand the Structure of Biomolecules and how it affects life. My research focuses on the intricacies of protein folding, Molecular Chaperones in Protein Quality Control, enzymatic pathways, and I am dedicated to advancing scientific discovery through rigorous experimentation and collaboration.
        </p>
      </div>
    </section>
  );
}

export default About;