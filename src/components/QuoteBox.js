import QuoteIcon from "../elements/Icons/QuoteIcon";
import Logo from "./header/Logo";

export default function QuoteBox({ image, quote, status }) {
  return (
    <>
      <div className="relative sm:py-16 lg:py-0">
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={image}
              alt=""
            />
            <div className="absolute inset-0 bg-indigo-400 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600 via-red-500 opacity-90" />
            <div className="relative px-8">
              <div>
                <Logo className="h-12" />
              </div>
              <blockquote className="mt-8">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <QuoteIcon className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-pink-400" />

                  <p className="relative">{quote}</p>
                </div>

                <footer className="mt-4">
                  <p className="text-base font-semibold text-indigo-200">
                    {status}
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
