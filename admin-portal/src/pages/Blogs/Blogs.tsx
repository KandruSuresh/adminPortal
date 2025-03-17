import { useAppContext } from "../../context/AppContext";

const Blogs = () => {
  const { loginData } = useAppContext();
  return (
    <div className='flex'>
      Hi {loginData?.name} from Blogs
    </div>
  )
}

export default Blogs