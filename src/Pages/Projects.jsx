import { Link } from "react-router-dom";
import { projects } from "../Constants/index";
import { arrow } from "../assets/icons";
import CTA from '../Components/CTA';

const Projects = () => {
  return (
    <section className="max-container bg-gray-900 text-gray-200 py-12">
      <h1 className="head-text text-gray-100">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-lg">
          Projects
        </span>
      </h1>

      <div className="mt-8">
        <p className="text-gray-400">
          Worked on a range of dynamic web projects, including interactive 3D
          websites, React applications, and visually engaging clones of
          high-profile websites. Specialized in integrating advanced animations,
          state management, and 3D effects to create immersive user experiences.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div
            className="lg:w-[400px] w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            key={project.name}
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={`${project.name} Thumbnail`}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-4">
              <h4 className="text-2xl font-poppins font-semibold text-gray-100 mb-2">
                {project.name}
              </h4>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex items-center gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-blue-600 text-gray-100 hover:bg-blue-700 flex items-center"
                  >
                    View GitHub
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-blue-600 text-gray-100 hover:bg-blue-700"
                >
                  View Live Site
                </a>
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
