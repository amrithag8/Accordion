import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Accordion from "./Components/Accordion";

function App() {
  const [accordionData, setAccordionData] = useState([
    {
      title: "Rules/Duration",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "How does web work",
      content:
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    },
    {
      title: "React+Git",
      content:
        "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Risus nec feugiat in fermentum posuere urna. Scelerisque in dictum non consectetur.",
    },
    {
      title: "Node/Express",
      content:
        "Odio facilisis mauris sit amet massa. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Rhoncus dolor purus non enim praesent elementum facilisis leo. Tincidunt vitae semper quis lectus nulla at volutpat diam.",
    },
    {
      title: "Mongo DB/ Mongoose",
      content:
        "Et molestie ac feugiat sed. Hac habitasse platea dictumst quisque sagittis purus sit. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Pretium fusce id velit ut tortor pretium viverra suspendisse. Ac odio tempor orci dapibus ultrices in iaculis. Risus nullam eget felis eget.",
    },
  ]);

  const [state, setState] = useState();

  return (
    <div className="App">
      <div className="container">
        <img src={process.env.PUBLIC_URL+`/images/image1.jpg`} alt="image" />
        <h3>FAQ</h3>
        <div className="container-fluid">
          {accordionData.map((item, index) => {
            return (
              <Accordion
                key={item.title}
                {...item}
                index={index}
                state={state}
                setState={setState}
                accordionData={accordionData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
