import React from "react";
import Back from "../common/back/Back";
import "./contact.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="right r-full row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Okhla New Delhi</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> Arbabkhan4u.ak.ak@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +917836947520</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
