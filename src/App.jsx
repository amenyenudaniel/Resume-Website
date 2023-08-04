import {
  Navbar,
  Header,
  Experience,
  Skills,
  Education,
  Strengths,
  Traits,
  Certificate,
  Footer,
} from "./components";
import { useState } from "react";
const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div style={{ overflowY: menu && "hidden" }}>
      <Navbar menu={menu} setMenu={setMenu} />
      <Header />
      <Experience />
      <Skills />
      <Education />
      <Strengths />
      <Traits />
      <Certificate />
      <Footer />
    </div>
  );
};

export default App;
