import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";


const ProjectList = [
    {
        title: "Community",
        description: "커뮤니티 사이트의 기능들을 모방해 만든 사이트입니다. CRUD, 로그인, 회원가입, 댓글, 대댓글, 좋아요/싫어요등의 기능이 있습니다",
        image: "/images/MyCommunity.png",
        hostingLink : "https://mycommunity-rho.vercel.app/",
        gitLink : "https://github.com/k16faker/community",
    },
    {
        title: "Cocktail List",
        description: "OpenAPI를 이용해 만든 칵테일 리스트 사이트입니다. 칵테일의 이름, 이미지, 재료, 레시피등을 볼 수 있고, 회원가입 후 각 칵테일에 대한 리뷰를 남길 수 있습니다.",
        image: "/images/Cocktail.png",
        hostingLink : "https://github.com/k16faker/CocktailList",
        gitLink : "https://cocktail-list-ten.vercel.app/",
    },
    {
        title: "E-commerce",
        description: "FakeStore API를 이용해 만든 쇼핑몰 사이트입니다. 상품의 이름, 가격, 이미지, 설명등을 볼 수 있고, 회원가입 후 상품을 장바구니에 담거나 구매할 수 있습니다.",
        image: "/images/store.png",
        hostingLink : "https://fakestore-peach.vercel.app/",
        gitLink : "https://github.com/k16faker/fakestore",
    },
]

const ProjectPage = () => {
  return (
    <div id="3" className="w-full h-screen text-center pt-[300px]">
        <ul className='flex'>
            {ProjectList.map((project) => (
                <li key={project.title} className="w-[400px] h-[600px] items-center mx-auto px-5 bg-sky-600 rounded-2xl hover:scale-105 transition-all">
                    <h1 className="text-4xl mt-[50px] font-bold mb-3 text-white">{project.title}</h1>
                    <img
                        src={project.image}
                        alt="project"
                        className="rounded-full my-[30px] mx-auto w-[300px] h-[200px]"
                    />
                    <p className="text-lg text-white">
                        {project.description}
                    </p>
                    <div className='w-[100px] flex mt-6 mx-auto justify-between'>
                        <FaGithub size={30} color='white' className='hover:cursor-pointer' onClick={()=> window.open(project.gitLink)}/>
                        <IoMdLink size={30} color='white' className='hover:cursor-pointer' onClick={()=> window.open(project.hostingLink)}/>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectPage