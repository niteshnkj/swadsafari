import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gray-300 text-gray-700 p-10 bottom-0 font-inter">
        {/* Services Section */}
        <nav>
          <h6 className="footer-title text-lg font-semibold text-gray-800 mb-2">
            Services
          </h6>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Branding
          </a>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Design
          </a>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Marketing
          </a>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Advertisement
          </a>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="footer-title text-lg font-semibold text-gray-800 mb-2">
            Company
          </h6>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            About us
          </a>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Contact
          </a>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Jobs
          </a>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Press kit
          </a>
        </nav>

        {/* Legal Section */}
        <nav>
          <h6 className="footer-title text-lg font-semibold text-gray-800 mb-2">
            Legal
          </h6>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Terms of use
          </a>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Privacy policy
          </a>
          <a className="link link-hover text-sm text-gray-600 hover:text-gray-800">
            Cookie policy
          </a>
        </nav>
      </footer>

      <footer className="footer bg-gray-300 text-gray-700 border-t border-gray-200 px-10 py-4">
        {/* Logo and Info Section */}
        <aside className="grid-flow-col items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-gray-500" // Updated color for better visibility
          >
            <path d="M22.672 15.226l-2.432.811 ..."></path>{" "}
            {/* Ensure this path is correct */}
          </svg>
          <p className="text-sm text-gray-600">
            SwadSafari Ltd.
            <br />
            Providing delicious food since 1992.
          </p>
        </aside>

        {/* Social Links Section */}
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a className="hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-gray-500" // Updated color
              >
                <path d="M24 4.557c-0.883 ..."></path>{" "}
                {/* Ensure path is correct */}
              </svg>
            </a>
            <a className="hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-gray-500" // Updated color
              >
                <path d="M19.615 3.184c-3.604 ..."></path>{" "}
                {/* Ensure path is correct */}
              </svg>
            </a>
            <a className="hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-gray-500" // Updated color
              >
                <path d="M9 8h-3v4 ..."></path> {/* Ensure path is correct */}
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
