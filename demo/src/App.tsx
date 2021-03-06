import React from "react";

import Page from "./components/Page";
import Footer from "./components/Footer";

// Actual code -----------------------------------------------------------

const App: React.FC = () => {
  return (
    <div className="App">
      <Page />
      <Footer />
    </div>
  );
};

export default App;
