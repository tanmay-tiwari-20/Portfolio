import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../Constants";
import CTA from "../Components/CTA";

const About = () => {
  return (
    <section className="max-container bg-gray-900 text-gray-200">
      <h1 className="head-text text-gray-100">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-lg">
          Tanmay
        </span>
      </h1>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-gray-400">
          A passionate web developer with expertise in React and Tailwind CSS,
          dedicated to crafting dynamic and interactive web experiences. I excel
          in modern design and innovative animations, bringing websites to life
          with seamless user interfaces and engaging visuals.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h1 className="subhead-text text-gray-100">My Skills</h1>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 bg-gray-800 rounded-lg">
              <div className="btn-back bg-gray-700 rounded-xl" />
              <div className="btn-front bg-gray-800 rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-gray-100">Work Experience</h3>
        <p className="mt-5 flex flex-col gap-3 text-gray-400">
          Led teams to the finals in multiple hackathons, showcasing strong
          problem-solving and leadership skills. Worked closely with talented
          teammates, leveraging their diverse skills to develop innovative
          solutions under tight deadlines. Active member of Codeverse, a vibrant
          coding community where I collaborate with peers, exchange ideas, and
          contribute to various coding projects and discussions.
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: "8px solid",
                borderBottomColor: experience.iconBg,
                background: "#1a1a1a",
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-gray-100 text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-gray-300 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2 text-gray-400">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-gray-400 pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-gray-100" />

      <CTA />
    </section>
  );
};

export default About;
