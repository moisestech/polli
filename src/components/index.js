import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Logo from "./Logo";
import Leaderboard from "./Leaderboard";

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
      <Logo />
      {loading == true ? null : <Leaderboard />}
    </div>
  );
}
