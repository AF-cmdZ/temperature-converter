import Input from "./components/Input";

function App() {
  const updateTemp = (e) => {
    console.log(e.target.value);
  };

  return (
  <main className="flex justify-center gap-16 pt-4">
    <Input handler={updateTemp} id="C" />
  </main>
  );
}

export default App;
