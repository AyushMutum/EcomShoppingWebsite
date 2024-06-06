// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom"


// const ProtectedRoute = ({ children}) => {
//     const { isLoading, isAuthenticated } = useSelector((state) => state.user);
//     if(isLoading === false){
//         if(!isAuthenticated){
//             return <Navigate to="/login" replace />
//         }
//         return children
//     }
// }

// export default ProtectedRoute;



import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import Loader from "../components/Layout/Loader";


const ProtectedRoute = ({ children}) => {
    const { isLoading, isAuthenticated } = useSelector((state) => state.user);
    if(isLoading === true)   
    {
        return <Loader /> 
    } else 
    
    {
        if(!isAuthenticated){
            return <Navigate to="/login" replace />
        }
        return children
    }
}

export default ProtectedRoute;


// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//     const { loading, isAuthenticated } = useSelector((state) => state.user);

//     // Return null or a loading indicator if loading state is true
//     if (loading) {
//         return null; // or return a loading indicator component
//     }

//     // Redirect to login page if user is not authenticated
//     if (!isAuthenticated) {
//         return <Navigate to="/login" replace />;
//     }

//     // Render the children components if user is authenticated
//     return children;
// }

// export default ProtectedRoute;


