import ComicListItem from "../elements/ComicListItem";

export default function ComicsList({ comics }) {
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 max-w-7xl mx-auto gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {comics.map((comic) => (
          <ComicListItem key={"item-" + comic.id} {...comic} />
        ))}
      </ul>
    </>
  );
}
