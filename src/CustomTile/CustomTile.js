import { Card, Col, Button } from "react-bootstrap";
const CustomTile = ({ name, department, image }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "10px 20px 10px 5px",
        height: "22rem",
        backgroundColor: "rgb(51, 52, 57)",
      }}
    >
      <Card.Img
        variant="top"
        style={{
          //   : "center",
          borderRadius: "80%",
          height: "50%",
          width: "70%",
          margin: "10px",
        }}
        src={image}
      />
      <Card.Body
        style={{ textAlign: "center", backgroundColor: "rgb(51, 52, 57)" }}
      >
        <Card.Title style={{ backgroundColor: "rgb(51, 52, 57)" }}>
          {name}
        </Card.Title>
        <Card.Text
          style={{
            backgroundColor:
              department === "UI-UX"
                ? "red"
                : department === "FrontEnd"
                ? "blue"
                : "green",
            padding: "0 10px",
          }}
        >
          {" "}
          {department}
        </Card.Text>
        <Button
          style={{
            backgroundColor: "#282626",
            borderRadius: "10px",
            padding: "0 60px",
            borderColor: "none",
          }}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomTile;
