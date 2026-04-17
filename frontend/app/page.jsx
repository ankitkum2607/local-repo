import Link from 'next/link';
import { properties } from '@/lib/properties';
import PropertyCard from '@/components/PropertyCard';

export default function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <div className="space-y-20">
      <section className="rounded-3xl bg-brand px-8 py-16 text-white shadow-premium md:px-14">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-200">Luxury Real Estate</p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
          Find your next premium home with confidence.
        </h1>
        <p className="mt-6 max-w-xl text-slate-200">
          Explore curated listings in the most desirable neighborhoods with seamless digital experience.
        </p>
        <Link
          href="/properties"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
        >
          Explore properties
        </Link>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-brand">Featured Properties</h2>
          <Link href="/properties" className="text-sm font-semibold text-accent hover:underline">
            See all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
        <h3 className="text-2xl font-bold text-brand">Need a tailored recommendation?</h3>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Tell us your goals and budget. Our advisors will match you with properties curated for your lifestyle.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
        >
          Start enquiry
        </Link>
      </section>
    </div>
  );
}
