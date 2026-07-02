import { Link, useNavigate } from "react-router-dom";
import { Button } from "@components/UI/button/Button.jsx";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <h2> No such page was found.</h2>
      <Button onClick={handleGoBack} style={{ marginRight: "10px" }}>
        Go Back
      </Button>
      <Button onClick={handleGoHome}>Go Home</Button>
    </>
  );
};
