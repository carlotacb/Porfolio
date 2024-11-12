import { Button } from "@nextui-org/react";

import { ProjectCard, TitleSection } from "@/components/genericComponents";
import { MyProjectList } from "@/public/data/Projects";

export const Projects = () => {
  return (
    <>
      <TitleSection
        color={"blue"}
        subtitle={
          "I've worked in way more projects but most of them are private, check them all in my GitHub"
        }
        textColor={"Some"}
        textNoColor={"projects 👩🏻‍💻"}
      />
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
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
        <div className={"mt-6"}>
          <a
            href={"https://github.com/carlotacb"}
            rel="noreferrer"
            target="_blank"
          >
            <Button
              endContent={<img alt="git" src="/icons/misc/github.svg" />}
              size="lg"
              variant="shadow"
            >
              Go to all my projects
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};
