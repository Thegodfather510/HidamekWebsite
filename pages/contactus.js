import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

function Contact() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  };
  const [state, setState] = useState(initialState);
  const { firstName, lastName, email, number, message } = state;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .send(
        "service_0g73t2h",
        "template_586653v",
        { firstName, message, lastName, email },
        "user_ePaySA52D13cMK2Q1Z68I"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  const changeHandler = (e) => {
    const { name, value } = e.currentTarget;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="relative z-50">
        <Navbar page="products" />
      </div>
      <div className="w-full h-screen py-16 bg-gray-100">
        <div className="relative h-2/3 lg:h-4/5">
          <div className="absolute inset-x-0 z-20 w-full text-6xl font-extrabold text-center text-white top-1/4">
            <p className="pt-16 text-7xl">CONTACT US</p>
          </div>
          <img
            src="/static/images/ProjectImg/image1.jpg"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="bg-gray-100">
          <div className="max-w-screen-xl mx-auto">
            <Grid col="2" row="1">
              <div className="block w-full bg-gray-100 h-96">
                <form onSubmit={submitHandler}>
                  <h1 className="text-3xl font-bold text-center">
                    FORMULAIRE DE CONTACT
                  </h1>
                  <label htmlFor="Nom" className="text-base font-semibold ">
                    Votre nom
                  </label>
                  <div className="flex w-full bg-gray-100">
                    <div className="w-1/2 pr-10">
                      <input
                        name="lastName"
                        type="text"
                        onChange={changeHandler}
                        placeholder="Prenom"
                        alue={lastName}
                        className="block w-full h-10 pl-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        name="firstName"
                        value={firstName}
                        type="text"
                        onChange={changeHandler}
                        placeholder="Nom"
                        className="block w-full h-10 pl-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <label htmlFor="email" className="text-base font-semibold">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={email}
                      onChange={changeHandler}
                      placeholder="Email Adress"
                      className="block w-full h-10 pl-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="pt-4">
                    <label htmlFor="number" className="text-base font-semibold">
                      Numero
                    </label>
                    <input
                      name="number"
                      type="text"
                      value={number}
                      onChange={changeHandler}
                      placeholder="Numero Telephone"
                      className="block w-1/2 h-10 pl-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                    />
                  </div>
                  <div className="pt-4">
                    <label
                      htmlFor="message"
                      className="text-base font-semibold"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      onChange={changeHandler}
                      rows="3"
                      value={message}
                      placeholder="Message"
                      className="block w-full pt-1 pl-3 border-gray-300 rounded-md shadow-sm resize-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="pt-4 text-right bg-gray-100 sm:px-6">
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
              <div className="block w-full bg-gray-100 h-96">
                <h1 className="text-3xl font-bold text-center">HIDAMEK</h1>
                <div className="flex flex-col items-start justify-center pt-2 pl-12">
                  <div>
                    <h1 className="text-base font-semibold">Adresse</h1>
                    <p>Société HIDAMEK SARL, Ave Moulay Ismail, Meknes.</p>
                  </div>
                  <div className="pt-8">
                    <h1 className="text-base font-semibold">Email us</h1>
                    <p>stehidamek@gmail.com</p>
                  </div>
                  <div className="pt-8">
                    <h1 className="text-base font-semibold">Call us</h1>
                    <p>05354-01069</p>
                  </div>
                </div>
              </div>
            </Grid>
          </div>

          <div className="pt-16">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
