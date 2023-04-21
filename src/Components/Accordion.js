import { useState } from "react";
import image2 from "../images/image2.jpg";

const Accordion = ({ accordionData, title, content, index, state, setState }) => {
    const [active, setActive] = useState(false);

  const accordionHandler = (_index) => {
    setState(_index);

    if (state === _index) {
      setActive(!active);
    } else {
      setActive(true);
    }

    
  };

  return (
    <div className="accordion-data">
      <div className="heading">
        <h2>{title}</h2>
        <img
          src={image2}
          alt="arrow"
          onClick={() => accordionHandler(index)}
        />
      </div>
      {state === index && active && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
