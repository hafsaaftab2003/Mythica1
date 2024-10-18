// src/components/AIStory.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import aistoryImg from '../Images/AIStory.png'; // Image path

const AIStory = () => {
  // Formik setup with Yup validation
  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      genre: '',
      wordLimit: '',
      noOfCharacters: '',
      promptLeft: '', // Prompt on the left
      promptRight: '', // Prompt on the right
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      category: Yup.string().required('Category is required'),
      genre: Yup.string().required('Genre is required'),
      wordLimit: Yup.number()
        .required('Word Limit is required')
        .positive('Must be positive')
        .integer('Must be an integer'),
      noOfCharacters: Yup.number()
        .required('No of Characters is required')
        .positive('Must be positive')
        .integer('Must be an integer'),
      promptLeft: Yup.string().required('Prompt is required'),
      promptRight: Yup.string().required('Prompt is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
  });

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover p-10"
      style={{ backgroundImage: `url(${aistoryImg})`, height: '100vh' }} // Covering the full viewport
    >
      <div className="w-full max-w-screen-lg">
        <h2 className="text-5xl font-bold mb-10 text-center">AI Story Generator</h2>
        
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-8 mb-20 w-full">

          {/* Left column */}
          <div className="space-y-6">
            <div>
              <input
                className="w-full border-[1px] border-gray-700 p-4 rounded placeholder-black font-bold text-xl"
                type="text"
                name="title"
                placeholder="Title:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500">{formik.errors.title}</div>
              ) : null}
            </div>

            <div>
              <input
                className="w-full border-[1px] border-gray-700 p-4 rounded placeholder-black font-bold text-xl"
                type="text"
                name="category"
                placeholder="Category:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              />
              {formik.touched.category && formik.errors.category ? (
                <div className="text-red-500">{formik.errors.category}</div>
              ) : null}
            </div>

            <div>
              <input
                className="w-full border-[1px] border-gray-700 p-4 rounded placeholder-black font-bold text-xl"
                type="text"
                name="genre"
                placeholder="Genre:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.genre}
              />
              {formik.touched.genre && formik.errors.genre ? (
                <div className="text-red-500">{formik.errors.genre}</div>
              ) : null}
            </div>

            <div>
              <input
                className="w-full border-[1px] border-gray-700 p-4 rounded placeholder-black font-bold text-xl"
                type="number"
                name="wordLimit"
                placeholder="Word Limit:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.wordLimit}
              />
              {formik.touched.wordLimit && formik.errors.wordLimit ? (
                <div className="text-red-500">{formik.errors.wordLimit}</div>
              ) : null}
            </div>

            <div>
              <textarea
                className="w-full border-[1px] border-gray-700 p-4 rounded placeholder-black font-bold text-xl"
                name="promptLeft"
                placeholder="Prompt:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.promptLeft}
              />
              {formik.touched.promptLeft && formik.errors.promptLeft ? (
                <div className="text-red-500">{formik.errors.promptLeft}</div>
              ) : null}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div>
              <input
                className="w-full border-[1px] border-gray-700 p-4 rounded placeholder-black font-bold text-xl"
                type="number"
                name="noOfCharacters"
                placeholder="No. of Characters:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.noOfCharacters}
              />
              {formik.touched.noOfCharacters && formik.errors.noOfCharacters ? (
                <div className="text-red-500">{formik.errors.noOfCharacters}</div>
              ) : null}
            </div>

            <div>
              <textarea
                className="w-full border-[1px] border-gray-700 p-4 rounded placeholder-black font-bold text-xl"
                name="promptRight"
                placeholder="Prompt:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.promptRight}
              />
              {formik.touched.promptRight && formik.errors.promptRight ? (
                <div className="text-red-500">{formik.errors.promptRight}</div>
              ) : null}
            </div>

            <div className='flex justify-end'>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-full border-[1px] border-gray-700 font-bold hover:bg-gray-200"
                style={{ width: '60%' }}
              >
                Generate
              </button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AIStory;
