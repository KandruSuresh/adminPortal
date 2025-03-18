import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const { loginData } = useAppContext();
  return (
    <div>
      Hi {loginData?.name } from Home afadsjkfkdsjf;lkjads;l jadkjf ;jadsfk suresh {loginData?.name }
    </div>
  )
}

export default Home
