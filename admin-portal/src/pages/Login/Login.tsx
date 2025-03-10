import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
// @ts-ignore
// const Button = React.lazy(() => import('webstudio/Button'));
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {
    const { setLoginData } = useContext(AuthContext)
    const navigate = useNavigate();
    const onClickHandler = () => {
        setLoginData({ name: 'John Doe' })
        console.log('Button clicked from Host app')
        navigate('/home')
    }
    return (
        <>
            <button onClick={onClickHandler}>Login</button>
        </>
    )
}
