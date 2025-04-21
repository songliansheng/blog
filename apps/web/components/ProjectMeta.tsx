import clsx from "clsx";
import { ArrowTopRightOnSquare, GithubIcon } from "design-system/ui/Icons";
import Card from "design-system/ui/Card";
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
    
    <Card className={ clsx('')}>
        <a
          className={clsx("block max-w-[20rem]  ", "text-sky-400")}
          href={item.sourceUrl}
          target="_blank"
        >
          {item.title}
        </a>
        <p className={clsx("py-5")}>{item.description}</p>
        <div className={clsx("flex gap-5 ")}>
          <a>
            <ArrowTopRightOnSquare className={clsx("size-6")} />
          </a>
          <a
            className={clsx("text-sky-400")}
            href={item.demoUrl}
            target="_blank"
          >
            <GithubIcon className={clsx("size-6 fill-white")} />
          </a>
        </div>
      </Card>
   
  );
};
export {ProjectItem}