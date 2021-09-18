import { useState } from "react";
import Input from "./components/Input";
import tryConvert from "./utils/conversion.helpers";

function App() {
  const[temps, setTemps] = useState({
    C: "",
    F: "",
  });

  const updateTemp = (e) => {
    switch(e.target.dataset.conversion){
      case "toCelsius":
        setTemps({
          F: e.target.value, 
          C: tryConvert(e.target.value, e.target.dataset.conversion});
    });
    case "toFahrenheit":
      setTemps({
        C: e.target.value, 
        F: tryConvert(e.target.value, e.target.dataset.conversion});
  });
    console.log(tryConvert(e.target.value, e.target.dataset.conversion));
  };

  return (
  <main className="flex justify-center gap-16 pt-4">
    <Input handler={updateTemp} id="C" conversion="toFahrenheit" temp={temps.C}/>
    <Input handler={updateTemp} id="F" conversion="toCelsius" temp={temps.F}/>
  </main>
  );
}

export default App;
