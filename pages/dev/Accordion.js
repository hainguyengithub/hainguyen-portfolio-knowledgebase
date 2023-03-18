import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const initialData = [
    {
      title: "About",
      body: "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
    },
    {
      title: "Etymology",
      body: "The name comes from алма, the Kazakh word for \"apple\" and is often translated as \"full of apples\". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple."
    }
  ];


  const onClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h1>Almaty, Kazakhstan</h1>
      {initialData.map((each, index) => <Panel key={each.title} title={each.title} body={each.body} onClick={() => onClick(index)} active={index === activeIndex} />)}
    </div>
  );
}

export function Panel({ title, body, onClick, active }) {
  return (
    <div>
      <h3>{title}</h3>
      { active ? <div>{body}</div> : <button onClick={onClick}>Show</button> }
    </div>
  );
}
