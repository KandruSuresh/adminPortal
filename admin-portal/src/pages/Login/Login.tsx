import { useNavigate } from "react-router-dom";
// @ts-ignore
// const Button = React.lazy(() => import('webstudio/Button'));

import { useErrorBoundary } from 'react-error-boundary';
import { useAppContext } from "../../context/AppContext";

export const Login = () => {
    const { setLoginData } = useAppContext();
    const navigate = useNavigate();
    const { showBoundary } = useErrorBoundary();

    const onClickHandler = () => {
        try {
            setLoginData({ name: 'John Doe' })
            navigate('/home')
        } catch (error) {
            showBoundary(error)
        }
    }
    return (
        <>
            <button onClick={onClickHandler}>Login</button>
        </>
    )
}
