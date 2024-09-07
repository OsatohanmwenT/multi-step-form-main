import  PlanButton  from './PlanButton';
import { ToggleBtn } from './ToggleBtn';
import { useContext } from "react"
import { FormContext } from '../App';
import { plans } from '../constants';

export default function Plan() {
    const { formData, updateForm } = useContext(FormContext);

    function togglePrice() {
        const newBilling = formData.Plan.billing === "monthly" ? "yearly" : "monthly";
        updateForm('Plan', { ...formData.Plan, billing: newBilling });
    }

    const handlePlanSelection = (selectedPlan) => {
        updateForm('Plan', { ...formData.Plan, selectedPlan });
        console.log(selectedPlan)
    };

    return(
        <div className="bg-White max-md:rounded-lg px-4 md:px-6 py-6 md:pb-10 md:py-2">
            <h1 className="text-Marine-blue text-xl md:text-3xl font-bold">Select your plan</h1>
            <p className="text-Cool-gray mb-2 md:mb-10">You have the option of the monthly or yearly billing.</p>
            <div className='flex gap-4 max-md:flex-col mb-2 md:mb-6'>
                {plans.map((plan) => (
                    <PlanButton key={plan.id} price={formData.Plan.billing} presentPlan={formData.Plan.selectedPlan} {...plan} handlePlanSelection={handlePlanSelection} />
                ))}
            </div>
           <ToggleBtn price={formData.Plan.billing} togglePrice={togglePrice}  />
        </div>
    )
}