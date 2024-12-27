import { useState } from "react";
import "./App.css";
import Sanjaya from "./Sanjaya";
import { Button } from "./components/ui/button";

function App() {
  return (
    <main className="p-4">
      <Sanjaya />
      <Button>click me now</Button>
    </main>
  );
}

export default App;
