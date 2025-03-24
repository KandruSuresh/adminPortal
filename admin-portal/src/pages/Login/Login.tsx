import { useNavigate } from "react-router-dom";
// @ts-ignore
// const Button = React.lazy(() => import('webstudio/Button'));
import { useDispatch, useSelector } from "react-redux";
import { useErrorBoundary } from 'react-error-boundary';
import { useAppContext } from "../../context/AppContext";
import { validateLogin } from "../../redux/reducers/loginSlice";
import { useEffect, useState } from "react";

export const Login = () => {
    const { setLoginData } = useAppContext();
    const navigate = useNavigate();
    const { showBoundary } = useErrorBoundary();
    const dispatch = useDispatch<any>()
    const { loginStatus } = useSelector((state: any) => state.login);
    const [user, setUser] = useState<any>({
        email: '',
        password: ''
    })
    const onLoginFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(validateLogin(user));
    }

    useEffect(() => {
        try {
            if (loginStatus === 'Success') {
                navigate('/home');
                setLoginData({ name: 'John Doe' })
            }
        } catch (error) {
            showBoundary(error)
        }
    }, [loginStatus]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={onLoginFormSubmitHandler}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input onChange={onChangeHandler} value={user.email} type="email" name="email" id="email" required className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input onChange={onChangeHandler} value={user.password} type="password" name="password" id="password" required className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                    {
                        loginStatus === 'Failed' ? <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Login Failed
                        </p> : <></>
                    }
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500"> Start a 14 day free trial</a>
                    </p>
                </div>
            </div>
        </>
    )
}
