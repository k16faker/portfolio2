import React from "react";

const Skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
];

const Skills2 = [
  "React",
  "Redux",
  "Firebase",
];

const Skills3 = [
  "Java",
  "SpringBoot",
];


const SkillsPage = () => {
  return (
    <div id="2" className="w-full h-screen text-center justify-center pt-[300px] text-white bg-sky-400">
      <h1 className="text-3xl">My Skills</h1>
      <ul className="flex mt-[100px] w-[1000px] mx-auto justify-between">
        {Skills.map((skill) => (
          <li
            key={skill}
            className="text-black text-center pt-3 bg-white w-[100px] h-[50px] item-center align-middle rounded-3xl transition-all hover:scale-110 text-xl"
          >
            {skill}
          </li>
        ))}
      </ul>
      <ul className="flex mt-[100px] w-[800px] mx-auto justify-between">
        {Skills2.map((skill) => (
          <li
            key={skill}
            className="text-black text-center pt-3 bg-white w-[100px] h-[50px] item-center align-middle rounded-3xl transition-all hover:scale-110 text-xl"
          >
            {skill}
          </li>
        ))}
      </ul>
      <ul className="flex mt-[100px] w-[600px] mx-auto justify-between">
        {Skills3.map((skill) => (
          <li
            key={skill}
            className="text-black text-center pt-3 bg-white w-[100px] h-[50px] item-center align-middle rounded-3xl transition-all hover:scale-110 text-xl"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;
