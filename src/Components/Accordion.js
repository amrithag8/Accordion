import { useState } from "react";
const Accordion = ({ accordionData, title, content, index, state, setState }) => {
    const [active, setActive] = useState(false);

  const accordionHandler = (_index) => {
    setState(_index);

    if (state === _index) {
      setActive(!active);
    } else {
      setActive(true);
    }

    console.log("state is", state);
    console.log("active is", active);
  };

  return (
    <div className="accordion-data">
      <div className="heading">
        <h2>{title}</h2>
        <img
          src="/images/image2.jpg"
          alt="arrow"
          onClick={() => accordionHandler(index)}
        />
      </div>
      {state === index && active && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
