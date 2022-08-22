function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 dark:bg-gray-800">
        <div className="text-center shadow md:flex md:items-center md:justify-between md:p-6">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://mezuo.netlify.app" className="hover:underline">
              Mezu™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="me" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="me" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="me" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="me" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
