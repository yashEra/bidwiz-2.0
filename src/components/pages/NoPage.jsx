import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";

const NoPage= () => {
    return(
        <>
        <NavBar />
        <main className="grid min-h-full place-items-center bg-white px-6 pb-24 py-32 lg:px-8">
        <div className="text-center">
            <img className="h-[300px]" src="images/pages/page-not-found.svg" alt="Page Not Found" />
          <p className="text-base font-semibold text-[#1357DE]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-[#1357DE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6FB1FC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1357DE]"
            >
              Go back home
            </a>
            <a href="contact" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>

        <Footer />
        </>
    );
};

export default NoPage;