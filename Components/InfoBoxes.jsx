import InfoBox from "./InfoBox";

const InfoBoxs = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            buttonText={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find Your dream rental property.Bookmark properties and contact
            owner
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            buttonText={{
              text: "Add Properties",
              link: "/properties/add",
              backgroundColor: "bg-blue-700",
            }}
          >
            List of your your properties and reach potential tenants.Rent as an
            airbnb or long term
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxs;
