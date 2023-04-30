export default function FAQ() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-500">
            If you're new to the Marvel films, or if you're a seasoned fan
            looking to expand your knowledge, this FAQ section is here to answer
            some of the most common questions about the Marvel films. From
            understanding the MCU's shared universe to finding out which films
            you should watch first, we've got you covered. So grab some popcorn,
            settle in, and let's dive into the world of Marvel films!
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            <div>
              <dt className="font-semibold text-gray-900">
                What is the Marvel Cinematic Universe (MCU)?
              </dt>
              <dd className="mt-3 text-gray-500">
                The Marvel Cinematic Universe (MCU) is a series of
                interconnected superhero films produced by Marvel Studios, based
                on characters from Marvel Comics. The films are set in a shared
                fictional universe and feature superheroes such as Iron Man,
                Captain America, Thor, and the Avengers, among others.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                How many Marvel films are there?
              </dt>
              <dd className="mt-3 text-gray-500">
                As of 2021, there are over 25 Marvel films that have been
                released, with more scheduled for the future. The films are
                divided into phases, with each phase consisting of several
                movies that are connected to each other.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                Do I need to watch all the Marvel films in order?
              </dt>
              <dd className="mt-3 text-gray-500">
                While it's not necessary to watch all the Marvel films in order,
                it's recommended to watch them in the order of their release to
                fully understand the storyline and character developments.
                However, some films can be watched out of order or as standalone
                movies.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                Are the Marvel films appropriate for children?
              </dt>
              <dd className="mt-3 text-gray-500">
                Most of the Marvel films are rated PG-13 or lower, making them
                appropriate for most children. However, some films may contain
                violence, language, or other mature themes, so it's important
                for parents to review the movie ratings and content before
                deciding whether they are appropriate for their children.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
