import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoggedPage from "./pages/LoggedPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/logged",
    element: <LoggedPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
