import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/userSlice";

const userObj = {
  firstName: "Kabindra",
  lastName: "Ranabhat",
  phone: 234567,
  email: "email@email.com",
  role: "admin",
};

const App = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userInfo);
  console.log(user);

  const handleOnButtonClick = () => {
    dispatch(setUser(userObj));
  };

  return (
    <>
      <h1>Redux meri jaaahn</h1>
      <button onClick={handleOnButtonClick}>Dispatch Me</button>
    </>
  );
};

export default App;
