import "./App.scss";
import { Button, OptionList, Option } from "@onfido/castor-react";

function App() {
  return (
    <div className="App">
      <h1>Button</h1>
      <Button>Hello Castor</Button>
      <h1>Options</h1>
      <OptionList>
        <Option hidden value="">
          I am hidden!
        </Option>
        <Option value={1}>Option</Option>
        <Option disabled value={2}>
          Disabled option
        </Option>
        <Option value="long">Longer option that is quite long</Option>
        <Option value="enormous">
          An enormously long option that spans over two lines
        </Option>
      </OptionList>
    </div>
  );
}

export default App;
