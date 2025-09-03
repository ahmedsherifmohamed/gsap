import { gsap } from "gsap";
import "./App.css";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

function App() {

  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    const split = new SplitText("h1", { type: "words" });
    gsap.from(split.words, {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out"
    });
  }, []);

  return (
    <>
      <div className="App">
        <h1>Welcome to React and GSAP</h1>
      </div>
    </>
  );
}

export default App
