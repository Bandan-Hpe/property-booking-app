import PropertyCard from "./PropertyCard";
import Link from "next/link";
import connectDB from "@/config/database";
import Property from "@/models/Property";
const HomeProperty = async() => {
    await connectDB();
  const recentProperty =await  Property.find({}).sort({createdAt: -1}).limit(3).lean();
  return (
    <>
      <section className="px-4 py-6">
        <div className="conteiner-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          {recentProperty.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-col-1 md:grid-cols-3 gap-6">
              {recentProperty.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block  text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl "
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperty;
