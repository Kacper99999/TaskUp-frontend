import { useSelector } from "react-redux";
import { selectUser,
         selectIsLoggedIn,
         selectIsLoading
 } from "../redux/selectors/auth.selectors";

 export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoading = useSelector(selectIsLoading);
    const user = useSelector(selectUser);

    return{
        isLoading,
        isLoggedIn,
        user
    };
 };