import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/404page/NotFound";
import Home from "../pages/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CategoryBooks from "../pages/CategoryBooks/CategoryBooks";
import BookDetails from "../pages/BookDetails/BookDetails";
import UpdateBooks from "../pages/UpdateBooks/UpdateBooks";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ReadBook from "../pages/ReadBook/ReadBook";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allbooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedbooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/categoryBooks/:categoryName",
        element: <CategoryBooks></CategoryBooks>,
      },
      {
        path: "/book/:bookId",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://assignment-11-server-side-tan.vercel.app/api/v1/books",
            {
              credentials: "include",
            }
          ),
      },

      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateBooks></UpdateBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/readBook/:bookId",
        element: <ReadBook></ReadBook>,
        loader: () =>
          fetch(
            "https://assignment-11-server-side-tan.vercel.app/api/v1/books",
            {
              credentials: "include",
            }
          ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
