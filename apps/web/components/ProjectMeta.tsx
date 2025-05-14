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
    <Card className={clsx("dark:bg-(--color-carbon) p-5 rounded-xl")}>
      <span className={clsx("text-2xl text-white")}>{title}</span>
      <p className={clsx("")}>{description}</p>
      <div className={clsx("flex gap-5 ")}>
        <a href={demoUrl}>
          <ArrowTopRightOnSquareSolid
            className={clsx(
              "size-6 fill-(--color-deep-sky-blue) stroke-(--color-deep-sky-blue) dark:hover:stroke-white"
            )}
          />
        </a>
        <a className={clsx("")} href={sourceUrl} target="_blank">
          <GithubIcon
            className={clsx(
              "size-6 fill-(--color-deep-sky-blue) dark:hover:fill-white",
              ""
            )}
          />
        </a>
      </div>
    </Card>
  );
};
export { ProjectItem };
