import { removePartner, savePartnerData } from "../../redux/reducers/managePartnerSlice"
import Radio from "../../components/Radio"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPartnerData } from "../../redux/reducers/managePartnerSlice"

interface PartnerData {
  name: string;
  mobile: string;
  email: string;
  role: string;
}

const Reports = () => {
  const [partnerData, setPartnerData] = useState<PartnerData>({
    name: 'test1',
    mobile: '123',
    email: 'test@test.com',
    role: 'maker'
  });

  const { partnersList, partnerSaved } = useSelector((state: any) => state.partners);
  const [data, setData] = useState<any[]>([]);
  const dispatch = useDispatch<any>()

  useEffect(() => {
    const arr = partnersList && Object.keys(partnersList).length && Object.keys(partnersList).map((item, index) => {
      return { uid: Object.keys(partnersList)[index], ...partnersList[Object.keys(partnersList)[index]] }
    });
    setData(arr || []);
  }, [partnersList]);

  useEffect(() => {
    dispatch(fetchPartnerData());
  }, [dispatch, partnerSaved]);

  const addPartnerFormSubmitHanlder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(savePartnerData(partnerData as any))
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
    <>
      <div className="flex min-h-full flex-col justify-center lg:px-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Partner Dashboard</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" action="#" method="POST" onSubmit={addPartnerFormSubmitHanlder}>
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Enter Partner Name</label>
              <div className="mt-2">
                <input onChange={onPartnerDataChangeHandler} value={partnerData.name} type="text" name="name" id="name" required className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="mobile" className="block text-sm/6 font-medium text-gray-900">Enter Mobile Number</label>
              </div>
              <div className="mt-2">
                <input onChange={onPartnerDataChangeHandler} value={partnerData.mobile} type="number" name="mobile" id="mobile" required className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Enter Partner Email</label>
              <div className="mt-2">
                <input onChange={onPartnerDataChangeHandler} value={partnerData.email} type="email" name="email" id="email" required className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
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
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save Partner</button>
            </div>
          </form>
        </div>
        <div>
          {
            data.length && data.map((partner: any, index: number) => (
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
    </>
  )
}

export default Reports