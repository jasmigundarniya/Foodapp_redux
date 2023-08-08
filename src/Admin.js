import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "./store/foodsSlice";

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  const foods = useSelector((state) => state.foods.items);

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-3xl font-bold">Admin</h2>
          </div>
          <div onClick={handleOpenModal}>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg ml-3 hover:bg-blue-700">
              Add
            </button>
          </div>
        </div>
        <div class="flex items-center border rounded-lg p-2 mb-3">
          <svg
            class="w-5 h-5 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m-1.42-1.41m-7.07-3.54c-3.87 0-7 3.14-7 7s3.13 7 7 7s7-3.14 7-7s-3.13-7-7-7zm-1.41 9.25l-2.83-2.83"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            class="outline-none flex-1"
          />
        </div>
        <div class="bg-white rounded-lg shadow-lg">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-3 px-6 text-left font-bold text-gray-600">
                  ID
                </th>
                <th class="py-3 px-6 text-left font-bold text-gray-600">
                  Name
                </th>
                <th class="py-3 px-6 text-left font-bold text-gray-600">
                  Email
                </th>
                <th class="py-3 px-6 text-left font-bold text-gray-600">
                  Role
                </th>
                <th class="py-3 px-6 text-left font-bold text-gray-600">
                  option
                </th>
              </tr>
            </thead>
            <tbody>
              {foods?.map((v, i) => {
                return (
                  <>
                    <tr>
                      <td class="py-4 px-6 border-b border-gray-200">
                        {v?.id}
                      </td>
                      <td class="py-4 px-6 border-b border-gray-200">
                        {v?.title}
                      </td>
                      <td class="py-4 px-6 border-b border-gray-200">
                        {v?.price}
                      </td>
                      <td class="py-4 px-6 border-b border-gray-200">
                        {v?.category}
                      </td>
                      <td class="py-4 px-6 border-b border-gray-200">
                        <button class="bg-blue-300 text-white px-4 py-2 mb-2 rounded-lg shadow-lg ml-3 hover:bg-blue-700">
                          Edit
                        </button>
                        <button class="bg-blue-300 text-white px-4 py-2 rounded-lg shadow-lg ml-3 hover:bg-blue-700">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Admin;
