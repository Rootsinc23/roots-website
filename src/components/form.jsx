import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { name, email, message };

    try {
      const response = await axios.post('http://localhost:8080/api/newsletter/save', user);
      console.log(response.data);
    } catch (error) {
      console.log('There was an error creating the user!', error);
    }
  };

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
            className="text-black w-full py-[1.3rem] px-[.5rem] focus:outline-none bg-[#ddd] mt-[.5rem]"
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
    </div>
  );
};

export default Form;
