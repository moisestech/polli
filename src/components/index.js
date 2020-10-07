import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const store = useSelector((store) => store);

  console.log("store", store);

  return (
    <div className="app container">
      {loading == true ? null : <h1>Welcome to Polli App</h1>}
      <span className="logo">
        <img src="https://raw.githubusercontent.com/moisestech/polli/main/public/assets/polli_logo.png" />
      </span>
    </div>
  );
}
