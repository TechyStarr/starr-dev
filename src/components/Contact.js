import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Here you would typically send the data to your backend
    // This is a placeholder for the actual API call
    console.log('Form submitted:', formData);
    
    // Simulate successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      // subject: '',
      message: ''
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#1E1E1E] rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-6 text-[#f6f6f6">Get in Touch</h2>
      
      {formStatus.message && (
        <div className={`p-4 mb-6 rounded-md ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {formStatus.message}
        </div>
      )}
      
      {!formStatus.submitted && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-[#F2F2F2]">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-primaryDark border-[#222222] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-primaryDark border-[#222222] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          
          {/* <div className="mb-4">
            <label htmlFor="subject" className="block bg-primaryDark text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
           */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-[#f6f6f6] mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border bg-primaryDark border-[#222222] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;