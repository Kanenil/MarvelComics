import ErrorForm from "./ErrorForm";

export default function FoundError() {
  return (
    <>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Found an error?
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Found error? Don't panic! Errors happen, and it's important to
              stay calm and assess the situation. Take note of the error message
              and any relevant information, and try to replicate the issue if
              possible. Once you have a better understanding of the problem, you
              can start looking for solutions or seeking help from others.
            </p>
          </div>
        </div>
        <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <ErrorForm />
          </div>
        </div>
      </div>
    </>
  );
}
