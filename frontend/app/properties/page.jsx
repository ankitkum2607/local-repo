import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/properties';

export default function PropertyListingPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-brand">Property Listings</h1>
      <p className="mt-2 text-slate-600">Browse modern homes, villas, and luxury apartments.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
          <PropertyCard key={property.id} property={property} index={index} />
        ))}
      </div>
    </section>
  );
}
