import "./App.css";
// import { colors } from "./constants/theme/colors";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Paper, Button } from "@mantine/core";

const App = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/epasal/join-Us");
  };
  return (
    <>
      <Paper className="root" h={"auto"}>
        <h2>Welcome to epasal</h2>
        <p>powered by G-group</p>
        <Button onClick={onClick}>Join Us</Button>
        <Routes>
          <Route path={"/"} element={<Paper>Welcome</Paper>} />

          <Route path={"*"} element={<Paper>Page Not Found</Paper>} />
        </Routes>
      </Paper>
    </>
  );
};

export default App;
