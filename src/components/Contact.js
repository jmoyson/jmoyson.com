import React from "react";
import { navigate } from "gatsby-link";
import { useIntl } from "react-intl";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = () => {
  const intl = useIntl();
  function handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='content'>
          <h1>{intl.formatMessage({ id: "contact" })}</h1>
          <form
            name='contact'
            method='post'
            action='/contact/thanks/'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input
              aria-label='Form Name'
              type='hidden'
              name='form-name'
              value='contact'
            />
            <div hidden>
              <label>
                {intl.formatMessage({ id: "contact" })}
                {": "}
                <input
                  aria-label={intl.formatMessage({ id: "contact" })}
                  name='bot-field'
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='field'>
              <label className='label' htmlFor={"name"}>
                {intl.formatMessage({ id: "yourName" })}
              </label>
              <div className='control'>
                <input
                  aria-label={intl.formatMessage({ id: "yourName" })}
                  className='input'
                  type={"text"}
                  name={"name"}
                  onChange={handleChange}
                  id={"name"}
                  required={true}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label' htmlFor={"email"}>
                {intl.formatMessage({ id: "email" })}
              </label>
              <div className='control'>
                <input
                  aria-label={intl.formatMessage({ id: "yourEmail" })}
                  className='input'
                  type={"email"}
                  name={"email"}
                  onChange={handleChange}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label' htmlFor={"message"}>
                {intl.formatMessage({ id: "message" })}
              </label>
              <div className='control'>
                <textarea
                  aria-label={intl.formatMessage({ id: "yourMessage" })}
                  className='textarea'
                  name={"message"}
                  onChange={handleChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className='field'>
              <button className='button is-link' type='submit'>
                {intl.formatMessage({ id: "send" })}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
