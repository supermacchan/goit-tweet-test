import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth, selectTweetsLoading } from "redux/selectors";

export const PrivateRoute = ({ 
    component: Component, 
    redirectTo = '/', 
}) => {
    const isLoggedIn = useSelector(selectAuth);
    const isRefreshing = useSelector(selectTweetsLoading);
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    
    return (
        shouldRedirect ? <Navigate to={redirectTo} /> : <Component />
    );
};
