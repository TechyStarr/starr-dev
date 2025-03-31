import React, { useState } from "react";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Project from "../components/Projects"
import Article from "../components/Articles";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingFinish = () => {
    setIsLoading(false); // Stop rendering the Loading component once lift-off completes
  };

  return (
    <div className="mx-16 relative bg-primaryDark space-y-10">
      {/* Render both Loading and Hero simultaneously */}
      <Hero />
      {isLoading && <Loading onFinish={handleLoadingFinish} />}
      <div className="space-y-6">
        <div className=" text-primaryBg justify-between gap-4 items-center">
          <div className="text-[18px] p-8 mx-auto w-[650px] text-primaryBg space-y-12">
            <div className="space-y-2">
            <p className="italic text-[32px] text-center">Here's what I think...</p>    
            <p className="">I believe software development is about more than just writing code; 
              it's about building intuitive experiences that feel natural and seamless. Like a well-crafted 
              story, a good interface should guide the user without them even realizing it. I've learned to 
              move beyond fleeting design trends, focusing instead on creating solutions that prioritize user 
              connection and simplify complexity.
            </p>              
            </div>

           <div className="space-y-2">
           <p className="italic text-[32px] text-center">Are you still reading? There's more...</p>    
        <p className="">This drive to create extends beyond the screen. I find fulfillment in 
            hands-on crafts like crocheting, painting, and beading, where I can see an idea materialize from 
            start to finish. These hobbies reinforce my understanding of design principles and the importance 
            of meticulous attention to detail. Just as I appreciate a well-told story in a film or a book, I 
            value the journey of learning and discovery, always seeking to expand my creative horizons.
          </p>            
           </div>
            
          </div>

        </div>
        <section className="font-hkgrotesk px-16 mx-40 space-y-16 py-16 mt-6 align-center animate-fade-in">
          <h1 className=" text-[48px] text-center text-[#f2f2f2] font-bold">
            My Stack
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-4">
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/python-fill.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">Python</p>
				</div>
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/bubble.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">Bubble</p>
				</div>
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/github-fill.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">GitHub</p>
				</div>
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/react-outline.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">React</p>
				</div>
  
            <div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
              <img src="/icons/vue.svg" alt="Python" className="h-10 w-auto" />
              <p className="text-[14px] hover:text-[#] mt-2">Vue js</p>
            </div>
            <div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
              <img src="/icons/postgresql.svg" alt="Python" className="h-10 w-auto" />
              <p className="text-[14px] hover:text-[#] mt-2">PostgreSQL</p>
            </div>  
            
                      <div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
              <img src="/icons/draw-io.svg" alt="Python" className="h-10 w-auto" />
              <p className="text-[14px] hover:text-[#] mt-2">Draw.io</p>
            </div>
          </div>
        </section>        
      </div>

      <Project />
      <Article />
      <ContactForm />

    </div>
  );
}

export default Home;
