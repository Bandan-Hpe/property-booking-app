const InfoBox = ({
  children,
  heading,
  buttonText,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
}) => {
  return (
    <div className={`w-full ${backgroundColor}  p-6 rounded-lg shadow-md`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
      <p className={`mt-2 mb-4 ${textColor}`}>{children}</p>
      <a
        href={buttonText.link}
        className={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonText.text}{" "}
      </a>
    </div>
  );
};
           
export default InfoBox;
