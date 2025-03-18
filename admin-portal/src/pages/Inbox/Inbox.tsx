
import { useAppContext } from '../../context/AppContext';

const Inbox = () => {
  const { loginData } = useAppContext();

  return (
    <div className='flex'>
       Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii {loginData?.name} from Inbox
    </div>
  );
};

export default Inbox;