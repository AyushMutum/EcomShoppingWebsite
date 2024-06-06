import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

const SellerProtectedRoute = ({ children }) => {
  const { isSeller, isLoading } = useSelector((state) => state.seller);

  if (isLoading === true) {
    return <Loader />;
  } else {
    if (!isSeller) {
      return <Navigate to={`/shop-login`} replace />;
    }
    return children;
  }
  // if (isLoading === false) {
  //     if (!isSeller) {
  //         return <Navigate to={`/shop-login`} replace />;
  //     }
  //     return children;
  // } else {
  //     // Handle the case where isLoading is true
  //     // You might want to render a loader or some other content
  //     return null; // You need to return something from the render method
  // }
};

export default SellerProtectedRoute;
