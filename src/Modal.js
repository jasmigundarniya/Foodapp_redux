// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Add User</h1>
        {/* Add form fields here */}
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="mt-1 px-4 py-2 w-full border rounded-md outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="mt-1 px-4 py-2 w-full border rounded-md outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
          Email
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="mt-1 px-4 py-2 w-full border rounded-md outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
          Role
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="mt-1 px-4 py-2 w-full border rounded-md outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        {/* Add other fields (name, email, and role) here */}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="ml-3 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
