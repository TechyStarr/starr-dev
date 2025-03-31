import React from "react";

function Skill() {
	return (
		<section className="font-hkgrotesk px-16 mx-40 space-y-16 py-16 mt-6 align-center animate-fade-in">
			<h1 className=" text-[56px] text-center text-[#730AC6] font-bold">
				SKILLS
			</h1>
			<div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/python-fill.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">Python</p>
				</div>
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/logos_bubble.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">Bubble</p>
				</div>
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/github-fill.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">GitHub</p>
				</div>
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/react-outline.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">Python</p>
				</div>
				<div className="py-4 rounded-[2px] hover:bg-[#1E1E1E] w-[100px] border-[1px] border-[#E5E7ED] flex flex-col items-center justify-center">
					<img src="/icons/javascript-fill.svg" alt="Python" className="h-10 w-auto" />
					<p className="text-[14px] hover:text-[#] mt-2">Python</p>
				</div>
			</div>
		</section>
	);
}

export default Skill;
