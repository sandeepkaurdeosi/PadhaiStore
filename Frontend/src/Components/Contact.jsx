import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, such as sending the data to a server.

    // After sending the message, navigate to the home page.
    navigate('/');
    toast.success("Message Sent")
  };

  return (
    <section id="contact" className="bg-white  dark:bg-slate-900 dark:text-white py-16 relative  m-10">
      {/* Close Button */}
      <button
        className="absolute top-32 right-10 text-gray-600  dark:bg-slate-900 dark:text-white hover:text-gray-900"
        onClick={() => navigate("/")} // Navigate back to the previous page
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center  dark:bg-slate-900 dark:text-white  text-gray-800 mb-12">Contact Us</h2>

        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Contact Form */}
          <div className="lg:w-1/2 w-full mb-12 lg:mb-0 lg:pr-8">
            <h3 className="text-2xl font-semibold  dark:bg-slate-900 dark:text-white text-gray-700 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block  dark:bg-slate-900 dark:text-white text-gray-600 text-sm mb-2" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border  dark:bg-slate-900 dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block  dark:bg-slate-900 dark:text-white text-gray-600 text-sm mb-2" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border  dark:bg-slate-900 dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block  dark:bg-slate-900 dark:text-white text-gray-600 text-sm mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border  dark:bg-slate-900 dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600  text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Store Information */}
          <div className="lg:w-1/2 w-full lg:pl-8">
            <h3 className="text-2xl font-semibold  dark:bg-slate-900 dark:text-white text-gray-700 mb-6">Our Store</h3>
            <div className="mb-6  dark:bg-slate-900 dark:text-white">
              <p className="text-gray-600 text-lg  dark:bg-slate-900 dark:text-white ">123 Booklover's Lane, Suite 100</p>
              <p className="text-gray-600 text-lg  dark:bg-slate-900 dark:text-white">Booktown, BK 12345</p>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 text-lg  dark:bg-slate-900 dark:text-white">Phone: (123) 456-7890</p>
              <p className="text-gray-600 text-lg  dark:bg-slate-900 dark:text-white" >Email: padhaiStore@gmail.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Store Hours</h4>
              <p className="text-gray-600 text-lg  dark:bg-slate-900 dark:text-white">Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-600 text-lg  dark:bg-slate-900 dark:text-white">Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-gray-600 text-lg  dark:bg-slate-900 dark:text-white">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


