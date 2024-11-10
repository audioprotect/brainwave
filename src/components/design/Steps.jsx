import uploadIcon from "../../assets/upload.png";
import editIcon from "../../assets/edit.png";
import protectIcon from "../../assets/protect.png";
import arrowIcon from "../../assets/arrow.png";

const Steps = () => {
  const steps = [
    { title: "Upload", description: "Upload your content securely and easily.", icon: uploadIcon },
    { title: "Register", description: "Register your account to manage your uploads.", icon: editIcon },
    { title: "Copyright", description: "Copyright your work for protection and peace of mind", icon: protectIcon },
  ];

  return (
    <div className="steps-container flex justify-center items-center space-x-10 py-8">
      {steps.map((step, index) => (
        <div key={index} className="step-item flex items-center space-x-4">
          {index !== 0 && (
            <div className="step-item-arrow flex items-center justify-center">
              <img
                src={arrowIcon}
                alt="Arrow Icon"
                className="mx-auto mb-8 w-20 h-20 object-contain"
              />
            </div>
          )}
          <div className="text-center">
            <img
              src={step.icon}
              alt={`${step.title} Icon`}
              className="mx-auto mb-4 w-20 h-20 object-contain"
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mt-6">
              {step.title}
            </h1>
            <p className="text-sm text-gray-500 mt-2">{step.description}</p>
            <div className="migraine absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;



