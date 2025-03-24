import { FaBars, FaSignOutAlt } from 'react-icons/fa'
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/reducers/loginSlice';
import { useDispatch } from 'react-redux';

const Navbar = ({ sidebarOpen, setSidebarOpen }: any) => {
  const { setLoginData } = useAppContext();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const getNavbarName = () => {
    const path = window.location.pathname
    switch (path) {
      case '/home':
        return 'Home'
      case '/blogs':
        return 'Blogs'
      case '/reports':
        return 'Reports'
      case '/inbox':
        return 'Inbox'
      case '/settings':
        return 'Settings'
      default:
        return 'Home'
    }
  }

  const logoutHandler = () => {
    dispatch(logoutUser(''));
    setLoginData({ name: '' });
    navigate('/login')
  };

  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between flow-root'>
      <div className="float-left flex items-center text-xl">
        <FaBars className='text-white me-4 cursor-pointer' onClick={() => { setSidebarOpen(!sidebarOpen) }} />
        <span className='text-white font-bold'>{getNavbarName()}</span>
      </div>
      <div className="float-right"><FaSignOutAlt className='text-white me-4 cursor-pointer' onClick={logoutHandler} /></div>
    </nav>
  )
}

export default Navbar