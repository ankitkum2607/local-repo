import Image from 'next/image';
import Link from 'next/link';
import { getPropertyById } from '@/lib/properties';

export default function PropertyDetailsPage({ params }) {
  const property = getPropertyById(params.id);

  if (!property) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
        Property not found. <Link href="/properties" className="underline">Go back</Link>
      </div>
    );
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-[380px] w-full">
        <Image src={property.image} alt={property.title} fill className="object-cover" priority />
      </div>
      <div className="space-y-6 p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-brand">{property.title}</h1>
            <p className="mt-2 text-slate-600">{property.location}</p>
          </div>
          <p className="text-3xl font-extrabold text-accent">{property.price}</p>
        </div>

        <div className="grid gap-4 rounded-2xl bg-slate-100 p-4 text-sm md:grid-cols-3 md:text-base">
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
          <p><strong>Area:</strong> {property.area}</p>
        </div>

        <p className="leading-relaxed text-slate-700">{property.description}</p>

        <Link
          href="/contact"
          className="inline-block rounded-full bg-brand px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
        >
          Send enquiry
        </Link>
      </div>
    </article>
  );
}
