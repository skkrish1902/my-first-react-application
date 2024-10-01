import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/button";

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  let items = ["Hyderabad", "Gandhi Nagar", "Banglore", "Chennai"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Submit</Button>
    </div>
  );
}

export default App;
