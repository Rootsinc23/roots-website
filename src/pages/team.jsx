import React from 'react';
import TEAM from '../team';

const Team = () => {
  return (
    <section className='mt-[2rem] px-[1rem]'>
      <h2 className='text-center text-[2rem]'>Our Team</h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] mt-[2rem] mb-[1rem]'>
        {TEAM.map((member) => (
          <div key={member.name} className='border-[1px] rounded-[.3rem]'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='p-4'>
              <p>{member.name}</p>
              <p>{member.track}</p>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
