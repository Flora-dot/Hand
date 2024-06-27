import React from 'react';

function SuccessPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-12">
      <div className="bg-white p-8 rounded-md shadow-xl">
        <h1 className="text-3xl font-bold text-light-green">Success!</h1>
        <p className="text-xl my-5 text-dark-grey font-medium">Your proposal has been submitted successfully.</p>
        <a href="/" className="text-2xl mt-4 inline-block px-4 py-2 bg-light-green  rounded-md hover:bg-green-700">
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default SuccessPage;