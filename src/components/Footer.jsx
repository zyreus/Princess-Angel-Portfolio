function Footer() {
  return (
    <footer className="mt-12 border-t border-purple-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:gap-4 md:flex-row md:px-6 md:text-left">
        <div>
          <p className="text-sm font-semibold text-purple-700">Princess Angel Paslot</p>
          <p className="break-all text-sm text-gray-700 sm:break-normal">princessangel.paslot@gmail.com</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-black md:justify-end">
          <a href="https://github.com/princesspaslot" className="transition hover:text-purple-700">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/princess-angel-paslot-03568b315/"
            className="transition hover:text-purple-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
