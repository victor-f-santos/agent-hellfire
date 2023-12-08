export default function Contact() {
  return (
    <>
      <h2 id="contact">Contact</h2>
      <section class="contact">
        <p>
          For booking, requests, or if you're just bored and wanna waste your
          time and ours, be free to write us an e-mail so we properly ignore it.
        </p>
        <form className="contact--form" action="">
          <label for="form-name">Name:</label>
          <input type="text" name="name" id="form-name" minlength="1" />
          <label for="form-email">E-mail:</label>
          <input type="email" name="e-mail" id="form-email" minlength="1" />
          <label for="form-subject">Subject:</label>
          <input type="text" name="Subject" id="form-subject" minlength="1" />
          <label for="form-message">Message</label>
          <textarea
            name="message"
            id="form-message"
            cols="30"
            rows="10"
            minlength="1"
            maxlength="1000"
          ></textarea>
          <input type="button" name="submit" value="Send" />
        </form>
      </section>
    </>
  );
}
