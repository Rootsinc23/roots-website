import React, { useEffect } from "react";

const Form = () => {
  const handleInputChange = (e) => {
    // input change handling logic goes here
  };

  return (
    <div className="mt-[2rem] px-[.5rem]">
      <form
        action=""
        method="POST"
        className="mt-[1.5rem]"
        data-aos="flip-left"
      >
        <div className="mb-[1rem]">
          <label htmlFor="name" className="block text-left font-bold">
            Name
          </label>
          <input
            type="text"
            placeholder="Jane Appleseed"
            name="name"
            id="name"
            aria-label="name"
            className="w-full py-[.8rem] px-[.5rem] leading-tight focus:outline-none bg-[#ddd] mt-[.5rem]"
          />
        </div>

        <div className="mb-[1rem]">
          <label htmlFor="email" className="block text-left font-bold">
            Email Address
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            name="email"
            id="email"
            aria-label="email-address"
            className="w-full py-[.8rem] px-[.5rem] leading-tight focus:outline-none bg-[#ddd] mt-[.5rem]"
          />
        </div>

        <div className="mb-[1rem]">
          <label htmlFor="message" className="block text-left font-bold">
            Message
          </label>
          <textarea
            placeholder="How can we help?"
            name="message"
            id="message"
            aria-label="message"
            onChange={handleInputChange}
            className="w-full py-[1.3rem] px-[.5rem] focus:outline-none bg-[#ddd] mt-[.5rem]"
          />
        </div>

        <div className="mt-[1.5rem]">
          <button
            type="submit"
            className="text-[.9rem] rounded-[.2rem] border-[.7px] border-[purple] text-black py-[.7rem] px-[1.6rem] font-[100]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
