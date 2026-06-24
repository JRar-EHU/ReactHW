import { useNavigate } from "react-router-dom";
import { Button } from "@components/UI/button/Button";

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
      <h2 style={{ color: "var( --color-primary)" }}>
        No such page was found.
      </h2>
      <div>
        <Button onClick={handleGoBack} style={{ marginRight: "10px" }}>
          Go Back
        </Button>
        <Button onClick={handleGoHome}>Go Home</Button>
      </div>
    </>
  );
};
