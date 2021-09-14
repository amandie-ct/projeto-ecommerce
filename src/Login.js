import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <button id="login-user">
            <FontAwesomeIcon icon={faUser}/>
           &ensp; Login
        </button>
    );
}
 
export default Login;