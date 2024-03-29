import CategoryComponent from "./CategoryComponent";

type PropsType = {
  categories: {
    name: string;
    modsInfo: { name: string; link: string; iconUrl: string }[];
  }[];
};

export default function OLN({ categories }: PropsType) {
  return (
    <>
      {categories.map((item) => {
        return (
          <div key={item.name}>
            <CategoryComponent {...item} />
            <hr />
          </div>
        );
      })}
    </>
  );
}
