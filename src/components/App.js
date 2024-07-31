import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"
import { render, screen } from '@testing-library/react';
import TestComponent from './TestComponent';
test("should include the <TestComponent />", () => {
  render(<TestComponent />);
  const element = screen.getByText("time video");
  expect(element).toBeInTheDocument();
});
const now = 'Now';
function App() {
  return (
    <div className="App">
      <h1>
        {now}
      </h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
    </div>
  );
}

export default App;
