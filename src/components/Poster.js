export default function Poster({ image, title, description }) {

    return (
        <>
            <div className="relative bg-red-600">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt=""
              />
              <div
                className="absolute inset-0 bg-red-600 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </>
    );
}