function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex flex-col justify-center items-center text-center">
      <p>Designed and Developed with 🔥 by</p>
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}.
        <a
          href="https://github.com/themukuldharashivkar"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          MUKUL DHARASHIVKAR
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
