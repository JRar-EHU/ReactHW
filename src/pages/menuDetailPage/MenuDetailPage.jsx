import { useParams } from "react-router-dom";

export const MenuDetailPage = () => {
  const productName = useParams().productName
  return (
    <>
      <h2>Product #{productName}</h2>
    </>
  );
}