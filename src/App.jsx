import team1 from './assets/images/team1.jpg';
import team2 from './assets/images/team2.jpeg';
import './App.css'
import Home from './pages/home-page';
import Team from './pages/team';
import SocialMedia from './pages/social-media';
import TopReviews from './components/top-reviews';
import Contact from './pages/contact';

function App() {
 

  return (
    <>
     <Home />
     <Team />
     <div className='mt-[3rem] md:flex  md:px-[1rem]'>
       <img src={team1} alt="" className='w-full h-[300px] sm:h-[400px] md:w-[800px]' />
       <div className='relative'>
      <img src={team2} alt="" className='w-full h-[300px] sm:h-[400px] md:w-[800px]' />
    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white z-30'>
    <div className='text-left p-4'>
      <p className='text-[.8rem] sm:text-[1.1rem]'>
        ARE YOU READY TO EMBARK ON A JOURNEY WHERE YOUR PASSION MEETS PURPOSE? LOOK NO FURTHER! WE'RE EXCITED TO ANNOUNCE THAT ROOTS IS ON THE LOOKOUT FOR TALENTED INDIVIDUALS LIKE YOU TO JOIN OUR DYNAMIC TEAM.
      </p>
      <button className='rounded-[.2rem] py-[.6rem] px-[.9rem] border-[#2eb435] border-[.5px] text-white text-[.8rem] mt-[1.5rem]'>Contact Us</button>
    </div>
   </div>
  </div>

       
     </div>
     {/* <SocialMedia /> */}
     <TopReviews />
     <Contact />
   
  

    </>
  )
}

export default App
