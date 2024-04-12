import logo from "@/assets/icons/note-memo-blue-icon.png";
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    // <!-- component -->
    <nav className=" relative mx-auto flex h-20 w-full items-center justify-between bg-white px-8">
      {/* <!-- logo --> */}
      <div className="inline-flex">
        <Link className="" to="/">
          <img src={logo} className="w-24" alt="" />
        </Link>
      </div>

      {/* <!-- end logo --> */}

      {/* <!-- search bar --> */}
      <div className="hidden flex-shrink flex-grow-0 justify-start px-2 sm:block">
        <div className="inline-block">
          <div className="inline-flex max-w-full items-center">
            <button
              className="relative flex w-60 flex-shrink flex-grow-0 items-center rounded-full border px-1 py-1  pl-2"
              type="button"
            >
              <input
                className="block flex-shrink flex-grow overflow-hidden pl-2 outline-none"
                placeholder="Start your search"
              />

              <div className="relative flex h-8 w-8  items-center justify-center rounded-full">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '12px',
                    width: '12px',
                    stroke: 'currentcolor',
                    strokeWidth: 5.33333,
                    overflow: 'visible',
                  }}
                >
                  <g fill="none">
                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- end search bar --> */}

      {/* <!-- login --> */}
      <div className="flex-initial">
        <div className="relative flex items-center justify-end">
          <div className="mr-4 flex items-center">
            <a className="inline-block rounded-full px-3 py-2 hover:bg-light" href="#">
              <div className="relative flex cursor-pointer items-center whitespace-nowrap">
                Become a host
              </div>
            </a>
            <div className="relative block">
              <button
                type="button"
                className="relative inline-block rounded-full px-3 py-2 hover:bg-light"
              >
                <div className="flex h-5 items-center">
                  <span className="mr-2">
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: 'block',
                        height: '16px',
                        width: '16px',
                        fill: 'currentcolor',
                      }}
                    >
                      <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                    </svg>
                  </span>
                  <small>{window.context.locale}</small>
                </div>
              </button>
            </div>
          </div>

          <div className="block">
            <div className="relative inline">
              <button
                type="button"
                className="relative inline-flex items-center rounded-full border px-2 hover:shadow-lg"
              >
                <div className="pl-1">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: 'block',
                      fill: 'none',
                      height: '16px',
                      width: '16px',
                      stroke: 'currentcolor',
                      strokeWidth: 3,
                      overflow: 'visible',
                    }}
                  >
                    <g fill="none" fillRule="nonzero">
                      <path d="m2 16h28"></path>
                      <path d="m2 24h28"></path>
                      <path d="m2 8h28"></path>
                    </g>
                  </svg>
                </div>

                <div className="block h-10 w-12 flex-shrink-0 flex-grow-0 pl-5">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: 'block',
                      height: '100%',
                      width: '100%',
                      fill: 'currentcolor',
                    }}
                  >
                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end login --> */}
    </nav>
  )
}
