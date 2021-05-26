import "./styles.css";
import { useState, useEffect } from "react";
import { prominent, average } from "color.js";

export default function App() {
  const [color_, setColor_] = useState("");

  useEffect(async () => {
    await prominent("https://i.ibb.co/z2W7BZv/02.jpg", {
      amount: 1,
      format: "hex"
    }).then((color) => setColor_(color));
  }, []);

  return (
    <div>
      <h1 style={{ color: `${color_}`, filter: "invert(90%)" }}>
        {" "}
        Organic Food{" "}
      </h1>
      <img src="https://i.ibb.co/z2W7BZv/02.jpg" alt="" />
    </div>
  );
}
