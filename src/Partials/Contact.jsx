import React, { useState } from 'react';

export default function Contact() {
  // State define karein for each input field
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Handle change function to update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 className="fs-2 ms-2 text-center  mb-2 text-danger text-uppercase " style={{textDecoration:"underLine",}}>Contact</h3>
              <h2 className="display-5 mb-4 mb-md-5 mb-xl-8">
                We're always on the lookout to work with new clients. Please get in touch in one of the following ways.
              </h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
            <div className="col-12 col-lg-6">
              <div className="border overflow-hidden">
                <form action="#!">
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <img src="img/email.svg" alt="icon" />
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <div className="input-group">
                        <img src="img/phone.svg" alt="icon" />

                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">Subject <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
                      </div>
                    </div>


                  </div>
                </form>

              </div>
            </div>
            <div className="col-md-6 col-12 ">

              <img src="img/contact.avif" height={530} width={520} alt="image" />
            </div>
            <div className="div">
              <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28221.48689354752!2d77.6882152776941!3d29.475124107124998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2z4KSu4KWB4KSc4KS84KSr4KS84KWN4KSr4KS84KSwIOCkqOCkl-CksCwg4KSJ4KSk4KWN4KSk4KSwIOCkquCljeCksOCkpuClh-Cktg!5e1!3m2!1shi!2sin!4v1728665209222!5m2!1shi!2sin"
                width="100%" height="350" style={{ border: "2", marginTop: "10px", }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}
