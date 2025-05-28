import clsx from "clsx";
import {
  ArrowTopRightOnSquareSolid,
  GithubIcon,
} from "@repo/design-system/ui/Icons";
import Card from "@repo/design-system/ui/Card";
const ProjectItem = ({
  sourceUrl,
  demoUrl,
  title,
  description,
}: {
  sourceUrl: string;
  demoUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <Card
      className={clsx(
        "bg-(--color-silver) dark:bg-(--color-carbon)  p-5 rounded-xl"
      )}
    >
      <span className={clsx("text-2xl ")}>{title}</span>
      <p className={clsx("")}>{description}</p>
      <div className={clsx("py-2")}>
        <div className={clsx("flex gap-5 ")}>
          <a href={demoUrl}>
            <ArrowTopRightOnSquareSolid
              className={clsx(
                "fill-(--color-deep-sky-blue) dark:hover:fill-white hover:fill-black",
                "size-6 "
              )}
            />
          </a>
          <a className={clsx("")} href={sourceUrl} target="_blank">
            <GithubIcon
              className={clsx(
                "size-6 fill-(--color-deep-sky-blue) dark:hover:fill-white hover:fill-black",
                "group",
                // "p-1.5",
                ""
              )}
            />
          </a>
        </div>
      </div>
    </Card>
  );
};
export { ProjectItem };
