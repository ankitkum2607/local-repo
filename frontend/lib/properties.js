// Static property catalog used across home, listing, and details pages.
export const properties = [
  {
    id: '1',
    title: 'Skyline Penthouse',
    price: '$1,850,000',
    location: 'Manhattan, NY',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,200 sq ft',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    description:
      'A refined penthouse with floor-to-ceiling windows, private terrace, and premium smart-home features.'
  },
  {
    id: '2',
    title: 'Oceanview Villa',
    price: '$2,450,000',
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: '4,800 sq ft',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Elegant seaside villa featuring an infinity pool, modern interior palette, and direct beach access.'
  },
  {
    id: '3',
    title: 'Urban Luxe Loft',
    price: '$980,000',
    location: 'Chicago, IL',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,900 sq ft',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    description:
      'Sophisticated loft with exposed brick, designer lighting, and seamless open-plan living spaces.'
  },
  {
    id: '4',
    title: 'Modern Family Estate',
    price: '$1,420,000',
    location: 'Austin, TX',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,650 sq ft',
    image:
      'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1200&q=80',
    description:
      'Spacious home with open kitchen concept, landscaped backyard, and luxury community amenities.'
  }
];

export const getPropertyById = (id) => properties.find((property) => property.id === id);
