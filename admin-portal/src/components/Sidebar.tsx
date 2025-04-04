import { FaHome, FaCog, FaPoll, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
interface SidebarProps {
    sidebarOpen: boolean;
}

const Sidebar = ({ sidebarOpen }: SidebarProps) => {
    return (
        <div className={`${sidebarOpen ? " block " : " hidden "}w-64 bg-gray-800 fixed h-full px-4 py-2`}>
            <div className='my-2 mb-4'>
                <h1 className='text-2x text-white font-bold'>Admin Portal</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
                <li className='mb-2 rounded py-2 px-8 hover:bg-gray-700'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />
                    <Link to="/home" className='px-3'>Home</Link>
                </li>
                <li className='mb-2 rounded py-2 px-8 hover:bg-gray-700'>
                    <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2' />
                    <Link to="/blogs" className='px-3'>Blogs</Link>
                </li>
                <li className='mb-2 rounded py-2 px-8 hover:bg-gray-700'>
                    <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2' />
                    <Link to="/reports" className='px-3'>Reports</Link>
                </li>
                <li className='mb-2 rounded py-2 px-8 hover:bg-gray-700'>
                    <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2' />
                    <Link to="/inbox" className='px-3'>Inbox</Link>
                </li>
                <li className='mb-2 rounded py-2 px-8 hover:bg-gray-700'>
                    <FaCog className='inline-block w-6 h-6 mr-2 -mt-2' />
                    <Link to="/settings" className='px-3'>Settings</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;