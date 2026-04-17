'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PropertyCard({ property, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-premium"
    >
      <div className="relative h-56 w-full">
        <Image src={property.image} alt={property.title} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-brand">{property.title}</h3>
        <p className="text-2xl font-bold text-accent">{property.price}</p>
        <p className="text-slate-600">{property.location}</p>
        <Link
          href={`/properties/${property.id}`}
          className="inline-block rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
        >
          View details
        </Link>
      </div>
    </motion.article>
  );
}
