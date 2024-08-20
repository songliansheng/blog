export default function Footer():JSX.Element {
  
  return (
      // <footer className=" pt-3 bg-light">
      <footer className="flex items-center justify-center gap-x-6">
          <a
              href="https://www.x.com/lianshengsong"
              className=" hover:bg-sky-700  underline "
          >
              X(Twitter)
          </a>
          <a
              href="https://github.com/songliansheng"
              className=" hover:bg-sky-700 underline "
          >
              Github
          </a>
      </footer>
  )
}
