import { Button } from "@nextui-org/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TitleSection } from "@/components/genericComponents";
import { MyProjectList } from "@/public/data/Projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const Projects = () => {
  return (
    <>
      <TitleSection
        color={"cyan"}
        subtitle={
          "I've worked in way more projects but most of them are private, check them all in my GitHub"
        }
        textColor={"Some"}
        textNoColor={"projects 👩🏻‍💻"}
      />
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl px-6">
        {MyProjectList.map((project, index) => (
          <ProjectCard
            key={index}
            GHLink={project.GHLink}
            Languages={project.Languages}
            description={project.description}
            img={project.img}
            projectName={project.projectName}
            type={project.type}
          />
        ))}
      </div>
      <div className={"mt-10 flex justify-center"}>
        <a
          href={"https://github.com/carlotacb?tab=repositories"}
          rel="noreferrer"
          target="_blank"
        >
          <Button
            size="lg"
            startContent={
              <img
                alt="git"
                className={"size-8"}
                src="/icons/misc/github.svg"
              />
            }
            variant="shadow"
          >
            See all projects{" "}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </Button>
        </a>
      </div>
    </>
  );
};
