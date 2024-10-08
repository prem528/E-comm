import React from 'react';
import { Link } from 'react-router-dom';
import gathering from '../../assets/img/gathering.jpg'
 

const ProductLink: React.FC = ( ) => {
  return (
    <div className="container mx-auto  lg:px-24 py-8">
    <Link 
      to="/About"
      className="block cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-95"
    >
      <img
        src= {gathering}
        alt="gathering"
        className="h-auto w-full object-cover"
      />
    </Link>
    </div>
  );
};

export default ProductLink;