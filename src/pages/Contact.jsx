

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form id="contactForm">
        <div id="formName">
          <label htmlFor="name" id="nameLabel">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div id="formEmail">
          <label htmlFor="email" id="emailLabel">Email address:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div id="formMessage">
          <label htmlFor="message" id="messageLabel">Message:</label>
          <textarea id="message" name="message" />
        </div>
        <button type="submit" id="contactSubmit">Submit</button>
      </form>
    </section>
  );
}