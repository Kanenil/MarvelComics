import LinkButton from "../elements/Links/LinkButton";

export default function HomeBlock({
  icon,
  title,
  description,
  image,
  isImageLeft = false,
}) {
  return (
    <>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className={`px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 ${isImageLeft?"lg:col-start-2":""}`}>
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-600">
                  {icon}
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {title}
                </h2>
                <p className="mt-4 text-lg text-gray-500">{description}</p>
                <div className="mt-6">
                  <LinkButton
                    to="/comics"
                    name="To Comics"
                    className="inline-flex bg-gradient-to-r from-red-500 to-pink-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-red-700 hover:to-pink-700"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="object-fit w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full"
                src={image}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
