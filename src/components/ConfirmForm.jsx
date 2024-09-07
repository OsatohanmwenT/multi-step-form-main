import { useContext } from "react";
import { FormContext } from "../App";
import { plans, addOns } from "../constants";


export default function ConfirmForm() {
    const { formData, setCurrentForm } = useContext(FormContext)

    const { Plan, Addons } = formData;

    const selectedPlan = plans.find((p) => p.name === Plan.selectedPlan);
    const planPrice = Plan.billing === "monthly" ? selectedPlan.amount * 1 : selectedPlan.amount * 10

    const selectedAddons = addOns.filter((addon) => Addons.includes(addon.id));
    const addonsPrice = selectedAddons.reduce((total, addon) => {
        return total + (Plan.billing === "monthly" ? addon.price : addon.price * 10);
    }, 0);

    const totalPrice = planPrice + addonsPrice;

    return(
        <div className="bg-White max-md:rounded-lg px-4 md:px-16 py-6 md:pb-10 md:py-2">
            <h1 className="text-Marine-blue text-xl md:text-3xl font-bold">Finishing up</h1>
            <p className="text-Cool-gray mb-2 md:mb-10">Double-check everything looks OK before confirming.</p>
            <div className="rounded-md bg-Magnolia p-4 flex flex-col">
                <div className="pb-4 border-Light-gray border-b-2 flex items-center justify-between">
                    <div className="flex items-start flex-col">
                        <p className="text-Marine-blue text-lg font-semibold">{selectedPlan.name} ({formData.Plan.billing === "monthly" ? "Monthly" : "Yearly"})</p>
                        <button onClick={() => setCurrentForm("Plan")} className="text-Cool-gray underline">change</button>
                    </div>
                    <span className="text-Marine-blue font-semibold text-lg">${formData.Plan.billing === "monthly" ? selectedPlan.amount * 1 : selectedPlan.amount * 10}/{formData.Plan.billing === "monthly" ? "mo" : "yr"}</span>
                </div>
                <div className="flex mt-3 gap-3 flex-col">
                    {selectedAddons.map((addon) => (
                        <div className="flex items-center justify-between" key={addon.id}>
                            <span className="text-Cool-gray font-medium text-sm">{addon.service}</span>
                            <span className="text-Marine-blue font-medium text-sm">${formData.Plan.billing === "monthly" ? addon.price * 1 : addon.price * 10}/{formData.Plan.billing === "monthly" ? "mo" : "yr"}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mx-auto mt-6 items-center justify-between">
                <p className="text-Cool-gray font-medium text-sm">{selectedPlan.name} ({formData.Plan.billing === "monthly" ? "per month" : "per year"})</p>
                <p className="text-Purplish-blue text-lg font-semibold">${totalPrice}/{formData.Plan.billing === "monthly" ? "mo" : "yr"}</p>
            </div>
        </div>
    )
}