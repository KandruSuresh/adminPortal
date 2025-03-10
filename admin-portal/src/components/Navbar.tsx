import { FaBars } from 'react-icons/fa'
const Navbar = ({ sidebarOpen, setSidebarOpen }: any) => {
  const getNavbarName = () => {
    const path = window.location.pathname
    switch (path) {
      case '/home':
        return ''
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

  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' onClick={() => { setSidebarOpen(!sidebarOpen) }} />
        <span className='text-white font-bold'>{getNavbarName()}</span>
      </div>
    </nav>
  )
}

export default Navbar