export default function InfoBlock({ title, description }) {

    return (
        <>
            <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
                {description}
              </p>
            </div>
        </>
    );
}