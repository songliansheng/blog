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
    <Card className={clsx("dark:bg-(--color-dark-licorice)")}>
      <span className={clsx("text-2xl text-(--color-egg-shell)")}>
        {title}
      </span>
      <p className={clsx("py-5")}>{description}</p>
      <div className={clsx("flex gap-5 ")}>
        <a href={demoUrl}>
          <ArrowTopRightOnSquareSolid
            className={clsx(
              "size-6 fill-(--foreground-color-blue) stroke-(--foreground-color-blue)"
            )}
          />
        </a>
        <a className={clsx("")} href={sourceUrl} target="_blank">
          <GithubIcon
            className={clsx("size-6 fill-(--foreground-color-blue)", "")}
          />
        </a>
      </div>
    </Card>
  );
};
export { ProjectItem };
