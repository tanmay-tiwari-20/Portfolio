import { Link } from "react-router-dom";
import { projects } from "../Constants/index";
import { arrow } from "../assets/icons";
import CTA from '../Components/CTA';

const Projects = () => {
  return (
    <section className="max-container bg-gray-900 text-gray-200">
      <h1 className="head-text text-gray-100">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-lg">
          Projects
        </span>
      </h1>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-gray-400">
          Worked on a range of dynamic web projects, including interactive 3D
          websites, React applications, and visually engaging clones of
          high-profile websites. Specialized in integrating advanced animations,
          state management, and 3D effects to create immersive user experiences.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full bg-gray-800 rounded-lg shadow-lg" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme} bg-gray-700`} />
              <div className="btn-front bg-gray-800 rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col p-4">
              <h4 className="text-2xl font-poppins font-semibold text-gray-100">
                {project.name}
              </h4>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500 hover:text-blue-300"
                >
                  Live Link
                </Link>
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain text-blue-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-700" />

      <CTA />
    </section>
  );
};

export default Projects;
