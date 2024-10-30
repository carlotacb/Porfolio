import { Chip, Tooltip } from "@nextui-org/react";

import {
  ContentBlock,
  TitleSectionReverse,
} from "@/components/genericComponents";

export const Skills = () => {
  return (
    <div>
      <TitleSectionReverse
        color={"cyan"}
        textColor={"Skills"}
        textNoColor={"My"}
      />
      <div className="flex flex-col items-center gap-8 container px-6">
        <ContentBlock>
          <Chip color="default" radius={"sm"} size={"lg"} variant="flat">
            Programming Languages
          </Chip>
          <div className="flex flex-wrap gap-8 justify-start mt-4 mb-9">
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Python"
              offset={10}
              showArrow={true}
            >
              <img
                alt="python"
                className="size-14"
                src="/icons/langs/python.svg"
              />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="JavaScript"
              offset={10}
              showArrow={true}
            >
              <img alt="js" className="size-14" src="/icons/langs/js.svg" />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="TypeScript"
              offset={10}
              showArrow={true}
            >
              <img alt="ts" className="size-14" src="/icons/langs/ts.svg" />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Java"
              offset={10}
              showArrow={true}
            >
              <img alt="java" className="size-14" src="/icons/langs/java.svg" />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="SQL"
              offset={10}
              showArrow={true}
            >
              <img alt="sql" className="size-14" src="/icons/langs/sql.svg" />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="C++"
              offset={10}
              showArrow={true}
            >
              <img
                alt="cplusplus"
                className="size-14"
                src="/icons/langs/cplusplus.svg"
              />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Golang"
              offset={10}
              showArrow={true}
            >
              <img alt="go" className="size-14" src="/icons/langs/go.svg" />
            </Tooltip>
          </div>

          <Chip color="default" radius={"sm"} size={"lg"} variant="flat">
            Frameworks
          </Chip>
          <div className="flex flex-wrap gap-8 justify-start mt-4 mb-9">
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Django"
              offset={10}
              showArrow={true}
            >
              <img
                alt="django"
                className="size-14"
                src="/icons/frameworks/django.svg"
              />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Next.js"
              offset={10}
              showArrow={true}
            >
              <img
                alt="nextjs"
                className="size-14"
                src="/icons/frameworks/nextjs.svg"
              />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Vue"
              offset={10}
              showArrow={true}
            >
              <img
                alt="ts"
                className="size-14"
                src="/icons/frameworks/vuejs.svg"
              />
            </Tooltip>
          </div>

          <Chip color="default" radius={"sm"} size={"lg"} variant="flat">
            Miscellaneous
          </Chip>
          <div className="flex flex-wrap gap-8 justify-start mt-4 mb-9">
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Git"
              offset={10}
              showArrow={true}
            >
              <img alt="git" className="size-14" src="/icons/misc/git.svg" />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="HTML"
              offset={10}
              showArrow={true}
            >
              <img alt="html" className="size-14" src="/icons/misc/html.svg" />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="CSS"
              offset={10}
              showArrow={true}
            >
              <img alt="css" className="size-14" src="/icons/misc/css.svg" />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Styled Components"
              offset={10}
              showArrow={true}
            >
              <img
                alt="styledcomponents"
                className="size-14"
                src="/icons/misc/styledcomponents.svg"
              />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Figma"
              offset={10}
              showArrow={true}
            >
              <img
                alt="figma"
                className="size-14"
                src="/icons/misc/figma.svg"
              />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Markdown"
              offset={10}
              showArrow={true}
            >
              <img
                alt="markdown"
                className="size-14"
                src="/icons/misc/markdown.svg"
              />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="LaTex"
              offset={10}
              showArrow={true}
            >
              <img
                alt="latex"
                className="size-14"
                src="/icons/misc/latex.svg"
              />
            </Tooltip>
          </div>

          <Chip color="default" radius={"sm"} size={"lg"} variant="flat">
            DevOps
          </Chip>
          <div className="flex flex-wrap gap-8 justify-start mt-4 mb-9">
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Amazon Web Services"
              offset={10}
              showArrow={true}
            >
              <img alt="aws" className="size-14" src="/icons/devops/aws.svg" />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Google Cloud"
              offset={10}
              showArrow={true}
            >
              <img
                alt="gcloud"
                className="size-14"
                src="/icons/devops/gcloud.svg"
              />
            </Tooltip>
            <Tooltip
              closeDelay={1000}
              color={"foreground"}
              content="Docker"
              offset={10}
              showArrow={true}
            >
              <img
                alt="docker"
                className="size-14"
                src="/icons/devops/docker.svg"
              />
            </Tooltip>
          </div>

          <Chip color="default" radius={"sm"} size={"lg"} variant="flat">
            Languages
          </Chip>
          <div className="flex flex-wrap gap-8 justify-start mt-4">
            <div className="flex flex-col items-center">
              <Tooltip
                closeDelay={1000}
                color={"foreground"}
                content="Native catalan"
                offset={10}
                showArrow={true}
              >
                <img alt="cat" className="size-14" src="/icons/flags/cat.svg" />
              </Tooltip>
              <Chip radius="sm" size="sm" variant="bordered">
                Native
              </Chip>
            </div>

            <div className="flex flex-col items-center">
              <Tooltip
                closeDelay={1000}
                color={"foreground"}
                content="Native spanish"
                offset={10}
                showArrow={true}
              >
                <img alt="cat" className="size-14" src="/icons/flags/sp.svg" />
              </Tooltip>
              <Chip radius="sm" size="sm" variant="bordered">
                Native
              </Chip>
            </div>

            <div className="flex flex-col items-center">
              <Tooltip
                closeDelay={1000}
                color={"foreground"}
                content="Advanced english"
                offset={10}
                showArrow={true}
              >
                <img alt="cat" className="size-14" src="/icons/flags/uk.svg" />
              </Tooltip>
              <Chip radius="sm" size="sm" variant="bordered">
                B2/C1
              </Chip>
            </div>
            <div className="flex flex-col items-center">
              <Tooltip
                closeDelay={1000}
                color={"foreground"}
                content="Basic german"
                offset={10}
                showArrow={true}
              >
                <img alt="cat" className="size-14" src="/icons/flags/ger.svg" />
              </Tooltip>
              <Chip radius="sm" size="sm" variant="bordered">
                Basic
              </Chip>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};
