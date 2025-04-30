import clsx from "clsx";

export default function NoContent({ className }: { className?: string }) {
  return (
    <div
      className={clsx(className,
        "dark:bg-(--color-dark-licorice) flex flex-col items-center justify-center w-full h-full"
      )}
    >
      <div className="text-2xl font-bold text-gray-500">No Content Yet</div>
      
    </div>
  );
}
