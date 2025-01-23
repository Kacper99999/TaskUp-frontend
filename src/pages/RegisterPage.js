import { RegisterForm } from "../components/RegisterForm"
import { Logo } from "../components/Logo"

export default function RegisterPage() {
    return(
        <div style={{display:"flex" , alignItems:"center", justifyContent:"center", gap:"60px", marginTop:"55px"}}>
        <Logo/>
        <RegisterForm/>
        </div>
    )
}