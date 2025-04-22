import clsx from "clsx";
import {
  ArrowTopRightOnSquareSolid,
  GithubIcon,
} from "@repo/design-system/ui/Icons";
import Card from "@repo/design-system/ui/Card";
const ProjectItem = ({
  item,
}: {
  item: {
    sourceUrl: string;
    demoUrl: string;
    title: string;
    description: string;
  };
}) => {
  return (
    <Card className={clsx("dark:bg-(--color-dark-licorice)")}>
      <span className={clsx("text-2xl text-(--color-egg-shell)")}>
        {item.title}
      </span>
      <p className={clsx("py-5")}>{item.description}</p>
      <div className={clsx("flex gap-5 ")}>
        <a href={item.demoUrl}>
          <ArrowTopRightOnSquareSolid
            className={clsx(
              "size-6 dark:fill-(--foreground-color-blue) stroke-(--foreground-color-blue)"
            )}
          />
        </a>
        <a className={clsx("")} href={item.sourceUrl} target="_blank">
          <GithubIcon
            className={clsx("size-6 dark:fill-(--foreground-color-blue)")}
          />
        </a>
      </div>
    </Card>
  );
};
export { ProjectItem };
