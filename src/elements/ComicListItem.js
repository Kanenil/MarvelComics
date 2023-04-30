import { useState } from "react";
import Modal from "../components/Modal";

export default function ComicListItem({ id, images, title, description, prices, creators, stories }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li className="relative">
        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          <img
            src={`${images[0]?.path}.${images[0]?.extension}`}
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
          <button
            type="button"
            className="absolute inset-0 focus:outline-none"
            onClick={handleOpenModal}
          />
        </div>
        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          {title}
        </p>
      </li>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
              <img
                src={`${images[0]?.path}.${images[0]?.extension}`}
                alt={title}
                className="object-center object-cover"
              />
            </div>
          </div>

          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
              {title}
            </h2>

            <section className="mt-3">
              <div className="mt-6">
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            </section>

            <section className="mt-3">
              <div className="mt-2">
                <p className="text-gray-700">
                  Print price: {prices[0].price}
                </p>
              </div>
              {prices[1] && (
                <div className="mt-2">
                  <p className="text-gray-700">
                    Digital purchase price: {prices[0].price}
                  </p>
                </div>
              )}
            </section>

            <h2 className="mt-3 text-2xl font-extrabold text-gray-500 sm:pr-12">
              Creators
            </h2>

            <section className="mt-3">
              {creators.items.map((item, index)=>(
                <div key={id+"-creators-"+index} className="mt-2">
                <p className="text-gray-700 first-letter:capitalize">
                  {item.role}: {item.name}
                </p>
              </div>
              ))}
            </section>

            <h2 className="mt-3 text-2xl font-extrabold text-gray-500 sm:pr-12">
              Stories
            </h2>

            <section className="mt-3">
              {stories.items.map((item, index)=>(
                <div key={id+"-stories-"+index} className="mt-2">
                <p className="text-gray-700 first-letter:capitalize">
                  {item.type}: {item.name}
                </p>
              </div>
              ))}
            </section>

          </div>
        </div>
      </Modal>
    </>
  );
}
