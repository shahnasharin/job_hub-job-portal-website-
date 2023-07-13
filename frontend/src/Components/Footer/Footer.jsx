import React from "react";
import footer from '../../assets/footer.jpg';

function Footer() {
  const backgroundStyle = {
    backgroundImage: `url(${footer})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-primary" style={backgroundStyle}>
      <div className="px-4 pt-16 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-2">
            <div className="py-20 md:py-0 md:pb-8 flex flex-col justify-end"> {/* Added flex utilities */}
              <p className="font-normal tracking-wide text-gray-100">
                The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes.
              </p>
            </div>
            <div className="py-12 md:py-0 flex flex-col justify-end"> {/* Updated padding to py-12 */}
              <p className="font-medium tracking-wide text-gray-100"><br/><br/><br/>Useful Links</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Design & creatives
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Telecommunication
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Restaurant
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Programming
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Architecture
                  </a>
                </li>
                </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2 py-20 md:py-0 flex flex-col justify-end"> {/* Added flex utilities */}
            <span className="text-2xl font-medium tracking-wide text-gray-100">
              Subscribe Newsletter
            </span>
            <p className="mt-4 text-sm text-gray-100">
              Subscribe newsletter to get updates about new jobs.
            </p>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-100 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-myBlue hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
              </form>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-100 sm:flex-row">
          <p className="text-sm text-gray-100">
            © {new Date().getFullYear()} Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {/* Social icons */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;