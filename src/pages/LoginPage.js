import { LogInForm } from "../components/LogInForm/LogInForm";
import { Logo } from "../components/Logo";

export default function LoginPage() {
    return(
        <div style={{display:"flex" , alignItems:"center", justifyContent:"center", gap:"60px", marginTop:"55px"}}>
            <Logo/>
            <LogInForm/>
        </div>
    )
}