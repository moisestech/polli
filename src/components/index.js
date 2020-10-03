import { useSelector } from "react-redux";

export default function App() {
  const store = useSelector((store) => store);

  console.log("store", store);

  return (
    <div className="app">
      <h1>Welcome to Polli App</h1>
      <img src="" />
    </div>
  );
}
