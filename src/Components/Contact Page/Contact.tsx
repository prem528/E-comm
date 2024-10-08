import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <main className=" sm:pt-10  lg:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <section id="contact" className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-8 sm:mb-10 md:mb-12">Contact</h1>
          
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <ContactForm />
            </div>
            
            <div className="w-full lg:w-1/2 px-4">
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;