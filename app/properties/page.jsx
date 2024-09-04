import PropertyCard from "@/Components/PropertyCard";
import properties from "@/properties.json";
const Property = () => {
  return (
    <section className="px-4 py-6">
      <div className="conteiner-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-col-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Property;
