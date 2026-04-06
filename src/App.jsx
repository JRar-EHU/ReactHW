import ItemList from "@components/itemList/ItemList.jsx";

export default function App() {
  const itemsList = {
    itemsType: "Numbers List",
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };
  return (
    <>
      <h1>Hello World</h1>
      <ItemList items={itemsList} />
    </>
  );
}
