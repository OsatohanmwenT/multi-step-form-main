export default function Tab({ currentForm }) {
  const tabs = [
    { id: 'PersonalInfo', num: 1, label: 'YOUR INFO', description: 'STEP 1' },
    { id: 'Plan', num: 2, label: 'SELECT PLAN', description: 'STEP 2' },
    { id: 'AddonsForm', num: 3, label: 'ADD-ONS', description: 'STEP 3' },
    { id: 'ConfirmForm', num: 4, label: 'SUMMARY', description: 'STEP 4' }
  ];

  const highlightedTabId = {
    PersonalInfo: 'PersonalInfo',
    Plan: 'Plan',
    AddonsForm: 'AddonsForm',
    ConfirmForm: 'ConfirmForm',
    FinalSection: 'ConfirmForm'
  };

  return (
    <div className="flex md:flex-col max-md:justify-center max-md:h-[15vh] bg-cover bg-center gap-6 md:bg-hero-desktop bg-hero-mobile md:rounded-lg px-5 py-7 bg-no-repeat">
      {tabs.map((tab) => (
        <div key={tab.id} className="flex gap-6 items-start justify-start">
          <button
            className={`border-[1px] transition-all duration-300 rounded-full py-2 px-4 border-White ${
              highlightedTabId[currentForm] === tab.id ? 'bg-Light-blue text-Marine-blue' : 'text-White'
            }`}
          >
            <span className="font-semibold">{tab.num}</span>
          </button>
          <div className="md:flex hidden flex-col">
            <span className="font-thin text-sm text-Magnolia mb-1">{tab.description}</span>
            <span className="font-semibold text-lg text-White">{tab.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
