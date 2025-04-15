export default function Footer({className}):JSX.Element {
  
  return (
      // <footer className=" pt-3 bg-light">
      <footer
          className={`${className} flex items-center justify-center gap-x-6`}
      >
          <a
              href="https://www.x.com/lianshengsong"
              className="font-bold rounded-full dark:hover:bg-(--color-outer-space) hover:bg-(--color-silver) underline py-1.5 px-2"
              target="_blank"
          >
              X(Twitter)
          </a>
          <a
              href="https://github.com/songliansheng"
              className="font-bold rounded-full dark:hover:bg-(--color-outer-space) hover:bg-(--color-silver) underline  py-1.5 px-2"
              target="_blank"
          >
              Github
          </a>
      </footer>
  )
}
