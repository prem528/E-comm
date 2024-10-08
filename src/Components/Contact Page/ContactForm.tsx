import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form id="contact-form" className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          id="name"
          placeholder="NAME"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div>
        <input
          type="email"
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          id="email"
          placeholder="EMAIL"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div>
        <textarea
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          rows={6}
          placeholder="MESSAGE"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      
      <button className="w-full bg-blue-400 text-black py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 text-sm sm:text-base" type="submit">
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span>SEND</span>
        </div>
      </button>
    </form>
  );
}

export default ContactForm;