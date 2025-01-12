import { useSelector } from "react-redux";
import { selectUser,
         slectIsLoggedIn,
         selectIsLoading
 } from "../redux/selectors/auth.selectors";

 export const useAuth = () => {
    const isLoggedIn = useSelector(slectIsLoggedIn);
    const isLoading = useSelector(selectIsLoading);
    const user = useSelector(selectUser);

    return{
        isLoading,
        isLoggedIn,
        user
    };
 };