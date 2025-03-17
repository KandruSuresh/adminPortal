import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const { loginData } = useAppContext();
  return (
    <div>
      Hi {loginData?.name } from Home 
    </div>
  )
}

export default Home
