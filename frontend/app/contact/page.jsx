'use client';

import { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  contactNumber: '',
  message: ''
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Valid email is required.';
    if (!/^\+?[0-9\-\s]{7,15}$/.test(formData.contactNumber)) {
      nextErrors.contactNumber = 'Enter a valid contact number.';
    }
    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage('');

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload.message || 'Submission failed.');
      }

      setFormData(initialFormState);
      setStatusMessage('Enquiry submitted successfully. We will reach out shortly.');
    } catch (error) {
      setStatusMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-brand">Contact / Query</h1>
      <p className="mt-2 text-slate-600">Share your requirements and our team will assist you.</p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        {[
          { id: 'name', label: 'Name', type: 'text' },
          { id: 'email', label: 'Email', type: 'email' },
          { id: 'contactNumber', label: 'Contact Number', type: 'tel' }
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="mb-1 block text-sm font-medium text-slate-700">
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              value={formData[field.id]}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
            {errors[field.id] && <p className="mt-1 text-sm text-red-600">{errors[field.id]}</p>}
          </div>
        ))}

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-brand px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
        </button>

        {statusMessage && <p className="text-sm text-slate-700">{statusMessage}</p>}
      </form>
    </section>
  );
}
