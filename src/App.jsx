import team1 from "./assets/images/team1.jpg";
import team2 from "./assets/images/team2.jpeg";
import "./App.css";
import Home from "./pages/home-page";
import Team from "./pages/team";
import SocialMedia from "./pages/social-media";
import TopReviews from "./components/top-reviews";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import About from "./pages/about";
import Services from "./pages/services";
import Preloader from "./components/preloader";


function App() {
  return (
    <div>
      {/* <Preloader /> */}
      <Home />
      <About />
      <Services />
      <Team />
      <div className=" sm:flex dark:text-gray-100 dark:bg-slate-900">
        {/* First Image */}
        <div className="md:w-1/2 ">
          <img
            src={team1}
            alt=""
            className="w-full h-64 sm:h-80 object-cover"
            data-aos="fade-left"
          />
        </div>

        {/* Second Image with Overlay */}
        <div className="relative md:w-1/2" data-aos="fade-left">
          <img
            src={team2}
            alt=""
            className="w-full h-64 sm:h-80 object-cover"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white z-30">
            <div className="text-left p-4">
              <p className="text-sm sm:text-lg">
                ARE YOU READY TO EMBARK ON A JOURNEY WHERE YOUR PASSION MEETS
                PURPOSE? LOOK NO FURTHER! WE'RE EXCITED TO ANNOUNCE THAT ROOTS
                IS ON THE LOOKOUT FOR TALENTED INDIVIDUALS LIKE YOU TO JOIN OUR
                DYNAMIC TEAM.
              </p>
              <button className="rounded-[.2rem] py-2 px-3 border-[.7px] border-[#228b22] text-white text-sm mt-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
      <TopReviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
