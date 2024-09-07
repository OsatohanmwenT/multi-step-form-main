import { useContext } from "react"
import { FormContext } from "../App"

export default function PersonalInfo() {
    const { updateForm, formData, isEmpty } = useContext(FormContext)

    function handleInputChange(event){
        const {name, value} = event.target
        updateForm("PersonalInfo",{...formData.PersonalInfo, [name]: value})
    }

    return(
            <div className="bg-White max-md:rounded-lg px-10 py-6 pb-10 md:py-3">
            <h1 className="text-Marine-blue text-3xl font-bold">Personal info</h1>
            <p className="text-Cool-gray mb-10">Please provide your name, email address, and phone number.</p>
            <form className="flex flex-col gap-6">
                <label htmlFor="name"> 
                    <div className="flex items-center justify-between">
                        <span className="text-Marine-blue max-md:text-[8px] text-sm">Name</span>
                        <p className={`font-semibold ${isEmpty.name ? "hidden" : ""} text-Strawberry-red max-md:text-[8px] text-sm`}>This field is required</p>
                    </div>
                    <input
                    placeholder="e.g. Stephen King"
                    className={`p-2 rounded-md text-Marine-blue border-[1px] ${isEmpty.name ? "border-Cool-gray" : "border-Strawberry-red"} focus:outline-Purplish-blue w-full`}
                    type="text"
                    name="name"
                    value={formData.PersonalInfo.name}
                    id="name"
                    onChange={handleInputChange}
                     />
                </label>
                <label htmlFor="email">
                    <div className="flex items-center justify-between">
                        <span className="text-Marine-blue max-md:text-[8px] text-sm">Email Address</span>
                        <p className={`font-semibold ${isEmpty.email ? "hidden" : ""} text-Strawberry-red max-md:text-[8px] text-sm`}>This field is required</p>
                    </div>
                    <input
                    placeholder="e.g. stephenking@lorem.com"
                    className={`p-2 rounded-md text-Marine-blue border-[1px] ${isEmpty.email ? "border-Cool-gray" : "border-Strawberry-red"} focus:outline-Purplish-blue w-full`}
                    type="email"
                    value={formData.PersonalInfo.email}
                    name="email" 
                    id="email"
                    onChange={handleInputChange}
                     />
                </label>
                <label htmlFor="phone">
                    <div className="flex items-center justify-between">
                        <span className="text-Marine-blue max-md:text-[8px] text-sm">Phone Number</span>
                        <p className={`font-semibold ${isEmpty.phone ? "hidden" : ""} text-Strawberry-red max-md:text-[8px] text-sm`}>This field is required</p>
                    </div>
                    <input
                    placeholder="e.g. +1 234 567 890"
                    className={`p-2 rounded-md text-Marine-blue border-[1px] ${isEmpty.phone ? "border-Cool-gray" : "border-Strawberry-red"} focus:outline-Purplish-blue w-full`}
                    type="tel"
                    value={formData.PersonalInfo.phone}
                    name="phone"
                    id="phone"
                    onChange={handleInputChange}
                     />
                </label>
            </form>
            </div>
    )
}
