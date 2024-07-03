import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, ModalFooter } from "react-bootstrap";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [savedName, setSavedName] = useState('');
  const [savedEmail, setSavedEmail] = useState('');

  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { name, email, message };

    if (!name || !email || !message) {
      setShowModal(true);
      setModalMessage('All fields are required');
      setIsSuccessful(false);
      return;
    }


    try {
      const response = await axios.post('http://localhost:8080/api/newsletter/save', user);
      // Set Modal to display with a message
      setShowModal(true);
      setModalMessage(`Hey ${name}! 🌟 Thanks a bunch for reaching out! Your feedback is like a ray of sunshine to us. 😊 We'll get back to you soon. Want to stay in the loop? Hit subscribe!`);
      setIsSuccessful(true);

      // save name and email before clearing the fields
      setSavedName(name);
      setSavedEmail(email);

      // Set input fields to '' after data is saved
      setName('');
      setEmail('');
      setMessage('');
      // catches error for smooth webflow
    } catch (error) {
      setModalMessage('Oops! Something went wrong. Please try again later.');
      setShowModal(true);
      console.log('There was an error creating the user!', error.message);
    }
  };

  const subUser = async () => {
    try {
      const subscriber = { name: savedName, email: savedEmail };
      const sub = await axios.post('http://localhost:8080/api/subscriber/save', subscriber);
      // setShowModal(true);
      setModalMessage(`Yay! 🎉 You've subscribed successfully, ${name}! Get ready for awesome updates and goodies straight to your inbox. 📨`);
      setIsSuccessful(false);
    } catch (error) {
      setModalMessage('Oops! Something went wrong. Please try again later.')
      console.log(error.message);
    }
  }





  return (
    <div className="mt-[2rem] px-[.5rem] dark:text-gray-100 dark:bg-slate-900">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mt-[1.5rem]"
        data-aos="fade-up"
      >
        <div className="mb-[1rem]">
          <label htmlFor="name" className="block text-left font-bold">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Miles"
            name="name"
            id="name"
            aria-label="name"
            className="text-black w-full py-[.8rem] px-[.5rem] leading-tight focus:outline-none bg-[#ddd] mt-[.5rem]"
          />
        </div>

        <div className="mb-[1rem]">
          <label htmlFor="email" className="block text-left font-bold">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            name="email"
            id="email"
            aria-label="email-address"
            className="text-black w-full py-[.8rem] px-[.5rem] leading-tight focus:outline-none bg-[#ddd] mt-[.5rem]"
          />
        </div>

        <div className="mb-[1rem]">
          <label htmlFor="message" className="block text-left font-bold">
            Message
          </label>
          <textarea
            placeholder="How can we help?"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            aria-label="message"
            className="text-black w-full py-[.8rem] px-[.5rem] leading-tight focus:outline-none bg-[#ddd] mt-[.5rem]gt"
          />
        </div>

        <div className="mb-[1.5rem]">
          <button
            type="submit"
            className=" mb-5 text-[.9rem] dark:text-white rounded-[.2rem] border-[.8px] border-[purple] bg-[green] text-black py-[.7rem] px-[1.6rem] font-[100]"
          >
            Send Message
          </button>
        </div>
      </form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-gradient-to-r from-purple-600 to-green-600 text-white">
          <h5 className="mx-auto">R.O.O.T.S</h5>
        </Modal.Header>
        <Modal.Body className="bg-slate-900 text-white py-6 px-8 rounded-lg shadow-lg">
          {modalMessage}
        </Modal.Body>
        <Modal.Footer className="bg-slate-900 flex justify-end">
          <Button variant="secondary" className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {isSuccessful && (
            <Button variant="primary" className="bg-green-500 hover:bg-green-500 text-white py-2 px-4 ml-3 rounded" onClick={subUser}>
              Subscribe
            </Button>
          )}
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Form;
