import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  document.title = "Home Page";

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
