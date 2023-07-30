import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Name from "./Component/Name";
import Price from "./Component/Price";
import Description from "./Component/Description";
import Image from "./Component/Image";
import "./App.css";

const firstName = "Bz";

function App() {
  const message = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <div className="ccd">
      <Card className="Card" style={{ width: "18rem" }}>
        {firstName && <Image />}
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">
            {" "}
            <Price />
          </Button>
          <p className="mt-3">{message}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
