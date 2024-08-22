export default function Footer():JSX.Element {
  
  return (
      // <footer className=" pt-3 bg-light">
      <footer className="flex items-center justify-center gap-x-6">
          <a
              href="https://www.x.com/lianshengsong"
              className="rounded-full dark:hover:bg-[theme('colors.outer-space')] hover:bg-[theme('colors.silver')] underline py-1.5 px-2"
          >
              X(Twitter)
          </a>
          <a
              href="https://github.com/songliansheng"
              className="rounded-full dark:hover:bg-[theme('colors.outer-space')] hover:bg-[theme('colors.silver')] underline  py-1.5 px-2"
          >
              Github
          </a>
      </footer>
  )
}
