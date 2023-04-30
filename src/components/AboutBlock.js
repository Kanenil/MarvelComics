export default function AboutBlock() {
  return (
    <>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About us
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://thepulp.net/pulpsuperfan/files/2017/02/martin-goodman.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span>Martin Goodman</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Marvel is one of the most iconic and influential entertainment
                companies in the world, with a rich history spanning over 80
                years. From its humble beginnings as Timely Comics in 1939,
                Marvel has evolved into a global phenomenon, encompassing a vast
                array of media, including comic books, movies, TV shows, video
                games, and more.
              </p>
              <p className="text-lg text-gray-500 mt-5">
                At the heart of Marvel's success is its commitment to
                storytelling. Marvel's characters are beloved for their depth,
                complexity, and relatability, and their stories have touched the
                lives of countless fans around the world. From Spider-Man's
                struggles with responsibility and power to Captain America's
                unwavering commitment to justice and freedom, Marvel's
                characters have inspired generations of readers and viewers.
              </p>
              <p className="text-lg text-gray-500 mt-5">
                Marvel's success is also due in no small part to its dedication
                to diversity and inclusivity. Over the years, Marvel has
                introduced countless characters from different backgrounds,
                races, genders, and sexual orientations, providing
                representation for marginalized communities and promoting a
                message of acceptance and tolerance.
              </p>
              <p className="text-lg text-gray-500 mt-5">
                Today, Marvel is home to some of the biggest and most popular
                franchises in entertainment. The Marvel Cinematic Universe (MCU)
                has become a cultural phenomenon, with blockbuster movies that
                have shattered box office records and captured the hearts of
                fans around the world. Marvel's TV shows, such as Daredevil,
                Jessica Jones, and WandaVision, have also earned critical
                acclaim and a devoted following.
              </p>
              <p className="text-lg text-gray-500 mt-5">
                In addition to its movies and TV shows, Marvel continues to
                produce high-quality comics that push the boundaries of what's
                possible in storytelling. From classic runs like Chris
                Claremont's X-Men to modern masterpieces like Ta-Nehisi Coates'
                Black Panther, Marvel's comics continue to captivate readers and
                inspire new generations of creators.
              </p>
              <p className="text-lg text-gray-500 mt-5">
                Beyond its creative endeavors, Marvel is also committed to
                making a positive impact in the world. Through various
                philanthropic initiatives, such as the Marvel Hero Acts
                campaign, Marvel has raised millions of dollars for children's
                charities and made a difference in the lives of countless
                children and families.
              </p>
              <p className="text-lg text-gray-500 mt-5">
                At its core, Marvel is a company dedicated to imagination,
                creativity, and storytelling. Whether you're a lifelong fan or a
                newcomer to the Marvel Universe, there's something for everyone
                in the vast and exciting world of Marvel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
