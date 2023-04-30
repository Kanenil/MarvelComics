export default function Offices() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-6 pb-12 px-4">
        <h2 className="text-3xl font-extrabold text-gray-900">Our offices</h2>
        <p className="mt-6 text-lg text-gray-500 max-w-3xl">
          Our offices are where the magic happens! As a Marvel fan, you'll be
          thrilled to know that our offices are filled with memorabilia, art,
          and other exciting decor that pay homage to our beloved characters.
          But beyond the fun aesthetics, our offices are also home to a
          dedicated team of professionals who are passionate about bringing
          Marvel's stories to life. Come visit us and experience the Marvel
          universe firsthand!
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Burbank</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">500 S. Buena Vista St.</span>
              <span className="block">Burbank, CA 91521</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">New York</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">135 W. 50th St.</span>
              <span className="block">New York, NY 10020</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">San Francisco</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">1115 Battery St.</span>
              <span className="block">San Francisco, CA 94111</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Manhattan Beach
            </h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">1600 Rosecrans Ave, Building 7A</span>
              <span className="block">Manhattan Beach, CA 90266</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
