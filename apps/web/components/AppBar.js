import { CustomizedSwitches } from "./switch";
import Link from "next/link";
export default function CustomAppBar() {
  return (
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="cloud-arrow-down-fill" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"
          />
        </symbol>
      </svg>
      <div className="row flex-nowrap justify-content-between align-items-center">
        <Link href="/">
          <a className="d-flex col-4 align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
            <svg
              className="bi me-2"
              width="60"
              height="60"
              role="img"
              aria-label="Bootstrap"
            >
              <use href="#cloud-arrow-down-fill" />
            </svg>
            DEBRIS
          </a>
        </Link>

        <div className="col-4 pt-1 d-flex  justify-content-end align-items-center">
          <CustomizedSwitches />
          <Link href="#">
            <a className="btn btn-sm btn-outline-secondary">Sign up</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
