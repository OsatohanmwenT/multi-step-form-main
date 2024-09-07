import { useContext } from "react"
import { FormContext } from "../App"
import { addOns } from "../constants";

export default function AddonsForm() {
    const { formData, updateForm } = useContext(FormContext)

    const handleAddonToggle = (addonId) => {
        const updatedAddons = formData.Addons.includes(addonId)
            ? formData.Addons.filter(id => id !== addonId)
            : [...formData.Addons, addonId];

        updateForm('Addons', updatedAddons);
        console.log(formData.Addons)
    };

    return (
      <div className="bg-White max-md:rounded-lg px-4 md:px-16 py-6 md:pb-10 md:py-2">
        <h1 className="text-Marine-blue text-xl md:text-3xl font-bold">Pick add-ons</h1>
        <p className="text-Cool-gray mb-2 md:mb-10">Add-ons help enhance your gaming experience.</p>
        <div className="flex flex-col gap-3">
            {addOns.map((addOn) => (
            <div key={addOn.id} className="border-Light-gray border-[1px] rounded-md p-4">
                <label className="flex gap-2 md:gap-14 items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <input className="appearance-none rounded-[6px] border-[2px] border-Light-gray p-3 checked:bg-Purplish-blue check"
                        checked={formData.Addons.includes(addOn.id)}
                        onChange={() => handleAddonToggle(addOn.id)} type="checkbox" name="add-on" id="add-on" />
                        <div className="flex flex-col items-start">
                            <span className="text-Marine-blue font-semibold">{addOn.service}</span>
                            <span className="text-Cool-gray text-sm font-medium">{addOn.description}
                            </span>
                    </div>
                    </div>
                    <span className="text-Purplish-blue font-medium">
                    ${formData.Plan.billing === "monthly" ? addOn.price * 1 : addOn.price * 10}/{formData.Plan.billing === "monthly" ? "mo" : "yr"}
                    </span>
                </label>
            </div>
            ))}
        </div>
      </div>
    )
}