import React from "react";

function Article() {
	return (
		<section className="font-hkgrotesk px-16 space-y-16 py-16 mt-6 animate-fade-in">
			<h1 className=" text-[80px] text-[#F2F2F2] font-bold text-center">
				Articles
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
				<div className="py-4 justify-between space-y-2">
				<img src="/images/blog-img1.jpeg" alt="Python" className="hover:bg-[#FFFFFF] w-full h-48" />
					<p className="text-[24px] justify-between ">Beginner friendly blog using flask</p>
					<a href="https://starr.hashnode.dev/create-a-beginner-friendly-blog-website-using-flask-a-python-framework" target="_blank" rel="noopener noreferrer" className="block"><p className="rounded-[100px]">View Article</p>
					</a>
				</div>
				<div className="py-4 justify-between space-y-2">
				<img src="/images/blog-img1.jpeg" alt="Python" className="hover:bg-[#FFFFFF] w-full h-48" />
					<p className="text-[24px] justify-between ">
						6 free sites to deploy your backend applications</p>
					<a href="6-free-sites-to-deploy-your-backend-applications" target="_blank" rel="noopener noreferrer" className="block">
						
					</a>
				</div>
				<div className="py-4 justify-between space-y-2">
				<img src="/images/blog-img1.jpeg" alt="Python" className="hover:bg-[#FFFFFF] w-full h-48" />

					<a href="https://starr.hashnode.dev/create-a-beginner-friendly-blog-website-using-flask-a-python-framework" target="_blank" rel="noopener noreferrer" className="block">
					
					<p className="text-[24px] rounded-[100px]">Beginner friendly blog using flask</p>
					</a>

				</div>
			</div>
		</section>
	);
}

export default Article;
