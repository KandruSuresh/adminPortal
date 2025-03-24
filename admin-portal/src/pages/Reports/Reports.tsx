import { addPartner, removePartner } from "../../redux/reducers/managePartnerSlice"
import Input from "../../components/Input"
import Radio from "../../components/Radio"
import Button from "../../components/Button"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { fetchPartnerData } from "../../redux/reducers/managePartnerSlice"

interface PartnerData {
  name: string;
  mobile: string;
  email: string;
  role: string;
}

const Reports = () => {
  const [partnerData, setPartnerData] = useState<PartnerData>({
    name: '',
    mobile: '',
    email: '',
    role: 'maker'
  });

  const { partnersList } = useSelector((state: any) => state.partners);
  const [data, setData] = useState<any[]>([]);

  const dispatch = useDispatch<any>()

  useEffect(() => {
    const arr = Object.keys(partnersList).map((item, index) => {
      return { uid: Object.keys(partnersList)[index], ...partnersList[Object.keys(partnersList)[index]] }
    });
    setData(arr);
  }, [partnersList]);

  useEffect(() => {
    dispatch(fetchPartnerData());
  }, [dispatch]);

  const addPartnerHanlder = () => {
    dispatch(addPartner(partnerData));
    axios.post('https://manage-partner-default-rtdb.firebaseio.com/partner.json', partnerData).then(() => {
      console.log('Saved Successful');
    })
    setPartnerData({
      name: '',
      mobile: '',
      email: '',
      role: 'maker'
    })
  }

  const onPartnerDataChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartnerData({
      ...partnerData,
      [event.target.name]: event.target.value
    })
  };

  const removePartnerHandler = (id: any) => {
    dispatch(removePartner(id));
  };

  return (
    <div className='flex items-center justify-center'>
      <div className="w-2/5 m-auto">
        <Input label='Enter Partner Name' name='name' value={partnerData.name} onChangeHandler={onPartnerDataChangeHandler} />
        <Input label='Enter Mobile Number' name='mobile' value={partnerData.mobile} onChangeHandler={onPartnerDataChangeHandler} />
        <Input label='Enter Email' name='email' value={partnerData.email} onChangeHandler={onPartnerDataChangeHandler} />
        <div className="flex">
          <div className="flex items-center ps-4">
            <Radio defaultChecked id='role-radio-1' value='maker' name='role' onChangeHandler={onPartnerDataChangeHandler} />
            <label htmlFor="role-radio-1" className="py-4 ms-2 text-sm font-medium">Maker</label>
          </div>
          <div className="flex items-center ps-4">
            <Radio id='role-radio-2' value='checker' name='role' onChangeHandler={onPartnerDataChangeHandler} />
            <label htmlFor="role-radio-2" className="py-4 ms-2 text-sm font-medium">Checker</label>
          </div>
        </div>
        <Button name="Add Partner" onClickHandler={addPartnerHanlder}></Button>
        <div>
          {
            data?.map((partner: any, index: number) => (
              <div className="my-2 border border-2 border-solid border-black p-2" key={index}>
                <div className="cursor-pointer text-right" onClick={() => removePartnerHandler(partner.id)}>X</div>
                <div>{partner.name}</div>
                <div>{partner.mobile}</div>
                <div>{partner.email}</div>
                <div>{partner.role}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reports