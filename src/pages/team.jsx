import React, { useEffect, useState } from "react";
import TEAM from "../team";
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="p-[5%] dark:text-gray-100 dark:bg-slate-900" id="team">
      <h2 className="text-center text-[2rem]">Our Team</h2>
      <div className="w-[120px] h-[2px] bg-[purple] mx-auto mt-[.3rem]"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] mt-[2rem] mb-[1rem]">
        {TEAM.map((member, index) => (
          <div
            key={member.id}
            className={`border-[1px] group border-[#228b22] rounded-[.3rem] group text-center transform transition-transform duration-300 ${
              !showAll && index >= 4 && window.innerWidth < 640
                ? "hidden lg:block"
                : ""
            }
            ${!showAll && index >= 6 && window.innerWidth >= 640 ? "hidden lg:block" : ""}
            `}
            data-aos="fade-right"
          >
            <div className="group-hover:scale-110 transform transition-transform duration-300 hover:scale-110">
              <img
                src={member.img}
                alt=""
                className="w-[100px] h-[100px] object-cover rounded-full mx-auto mt-[1.5rem]"
              />
            </div>
            <div className="p-4 text-left ">
              <p>Name: {member.name}</p>
              <p>Track: {member.track}</p>
              <p>Role: {member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {!showAll ? (
        <button
          className="dark:text-white dark:bg-green-600 border-[.8px] border-[purple] text-white py-[.5rem] px-4 rounded-[.2rem] mt-4 mx-auto block focus:outline-0 lg:hidden transition duration-300 ease-in-out transform hover:scale-105"
          onClick={toggleShowAll}
        >
          See More
        </button>
      ) : (
        <button
          className="dark:text-white dark:bg-green-600 border-[.8px] border-[purple] text-white py-[.5rem] px-4 rounded-[.2rem] mt-4 mx-auto block focus:outline-0 lg:hidden transition duration-300 ease-in-out transform hover:scale-105"
          onClick={toggleShowAll}
        >
          See Less
        </button>
      )}
    </section>
  );
};

export default Team;
