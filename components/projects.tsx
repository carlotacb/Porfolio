import { ProjectCard, TitleSection } from "@/components/genericComponents";
import { MyProjectList } from "@/public/data/Projects";

export const Projects = () => {
  return (
    <>
      <TitleSection
        color={"blue"}
        textColor={"Some"}
        textNoColor={"projects 👩🏻‍💻"}
      />
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
        {MyProjectList.map((project, index) => (
          <ProjectCard
            key={index}
            GHLink={project.GHLink}
            LanguagesIcons={project.LanguagesIcons}
            description={project.description}
            img={project.img}
            projectName={project.projectName}
            type={project.type}
          />
        ))}
      </div>
    </>
  );
};
