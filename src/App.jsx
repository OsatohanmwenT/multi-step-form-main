import { useState, createContext } from 'react';
import Tab from './components/Tab';
import { Form } from './components/Form';
import { FormIndexButtons } from './components/FormIndexButtons';
import useWindowSize from './hooks/useWindowSize';
import FinalSection from './components/FinalSection';

export const FormContext = createContext()

export default function App() {
  const width = useWindowSize()
  const [currentForm, setCurrentForm] = useState('PersonalInfo');
  const [isEmpty, setIsEmpty] = useState({
    name: true,
    email: true,
    phone: true
  })
  const [formData, setFormData] = useState({
    PersonalInfo: { name: '', email: '', phone: '' },
    Plan: { selectedPlan: 'Arcade', billing: 'monthly' },
    Addons: [],
  });

  const formOrder = ['PersonalInfo', 'Plan', 'AddonsForm', 'ConfirmForm', "FinalSection"]
    
  const index = formOrder.indexOf(currentForm)
  const totalIndex = formOrder.length - 1

  const updateForm = (section, data) => {
    setFormData(prevForm => ({
      ...prevForm,
      [section] : data
    }))
  }

  const validateForm = (fullname, email, phone) => {
    const nameRegex = /^[A-Za-zÀ-ÿ' -]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+\d{1,3}\d{10}$/;
  
    const isNameValid = nameRegex.test(fullname);
    const isEmailValid = emailRegex.test(email);
    const isPhoneValid = phoneRegex.test(phone);
  
    setIsEmpty({
      name: isNameValid,
      email: isEmailValid,
      phone: isPhoneValid,
    });
    
    return isNameValid && isEmailValid && isPhoneValid;
  };

  const handleNext = () => {
    const currentIndex = formOrder.indexOf(currentForm);
    if(currentForm === "PersonalInfo") {
      const isValid = validateForm(formData.PersonalInfo.name, formData.PersonalInfo.email, formData.PersonalInfo.phone)
      if (!isValid) {
        return false
      }
    }
    
    if (currentIndex < formOrder.length - 1) {
      setCurrentForm(formOrder[currentIndex + 1]);
    }
  }

  const handlePrev = () => {
    const currentIndex = formOrder.indexOf(currentForm);
    if (currentIndex > 0) {
      setCurrentForm(formOrder[currentIndex - 1]);
    }
  }

  return (
    <FormContext.Provider value={{ formData, updateForm, setCurrentForm, isEmpty }}>
      <div className='md:flex min-h-screen flex-row relative md:items-center'>
        <div className="flex justify-between max-md:min-h-screen max-md:flex-col md:h-[700px] md:w-[60vw] md:bg-White mx-auto md:p-4 md:rounded-xl">
          <Tab currentForm={currentForm} />
          <div className='max-md:shadow-2xl max-md:absolute max-md:mx-6 md:w-[70%] left-0 right-0 flex flex-col justify-between z-10 max-md:top-[12%]'>
            {Form[currentForm]}
            {width >= 768 &&
              <FormIndexButtons index={index} totalIndex={totalIndex} handlePrev={handlePrev} handleNext={handleNext}  />
              }
          </div>
          {width < 768 &&
          <div className={`${index === totalIndex ? "hidden": "" }  justify-self-end flex px-4 items-center justify-between p-3 bg-White`}>
            <button onClick={handlePrev} className='active:text-Marine-blue transition active:-translate-y-1 font-semibold text-Cool-gray'>Go Back</button>
            <button onClick={handleNext} className='active:bg-Marine-blue active:-translate-y-1 transition bg-Purplish-blue text-White rounded-[3px] px-3 py-2'>{index === totalIndex - 1 ? "Confirm" : "Next step"}</button>
          </div>
          }
        </div>
      </div>
    </FormContext.Provider>
  )
}
