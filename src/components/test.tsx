import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestimonialFormInputs {
  name: string;
  testimonial: string;
}

const WriteTestimonials: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormInputs>();

  const onSubmit: SubmitHandler<TestimonialFormInputs> = async (data) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Testimonial submitted:', data);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Write a Testimonial</h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'This field is required' })}
            disabled={loading}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.name && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="testimonial" className="block mb-1 font-medium">Testimonial:</label>
          <textarea
            id="testimonial"
            {...register('testimonial', { required: 'This field is required' })}
            disabled={loading}
            rows={4}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.testimonial && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.testimonial && <p className="text-red-500 text-sm">{errors.testimonial.message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded",
            loading && "opacity-70 cursor-not-allowed"
          )}
        >
          {loading ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonials;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestimonialFormInputs {
  name: string;
  testimonial: string;
}

const WriteTestimonials: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormInputs>();

  const onSubmit: SubmitHandler<TestimonialFormInputs> = async (data) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Testimonial submitted:', data);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Write a Testimonial</h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'This field is required' })}
            disabled={loading}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.name && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="testimonial" className="block mb-1 font-medium">Testimonial:</label>
          <textarea
            id="testimonial"
            {...register('testimonial', { required: 'This field is required' })}
            disabled={loading}
            rows={4}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.testimonial && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.testimonial && <p className="text-red-500 text-sm">{errors.testimonial.message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded",
            loading && "opacity-70 cursor-not-allowed"
          )}
        >
          {loading ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonials;