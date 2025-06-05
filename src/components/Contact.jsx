function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Placeholder functionality)');
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="mailto: koomsonvictoria50@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope" />
        </a>
        <a href="tel: +1 (573) 801-5614" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-phone" />
        </a>
        <a href="https://www.linkedin.com/in/victoria-koomson-712255215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
         <i className="fab fa-linkedin" /> 
        </a>
        <a href="https://x.com/_efuah?s=21" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.instagram.com/_efuah?igsh=MXAwYXBiY2VyYnYwaw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" /> 
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-researchgate" /> 
        </a>
      </div>
    </section>
  );
}

export default Contact;