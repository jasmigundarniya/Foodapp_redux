import React from "react";

const Carts = () => {
  return (
    <>
      <div>
        <body class="bg-gray-100">
          <div class="min-h-screen flex items-center justify-center">
            <div class="bg-white p-8 rounded shadow-md w-96">
              <h1 class="text-2xl font-bold mb-6">Checkout</h1>
              <form>
                <div class="mb-4">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    class="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                    rows="3"
                  ></textarea>
                </div>

                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">
                    Payment Method
                  </label>
                  <div class="mt-2 flex space-x-4">
                    <label class="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="creditCard"
                        class="form-radio text-indigo-600 focus:ring focus:ring-indigo-300"
                      />
                      <span class="ml-2">Credit Card</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        class="form-radio text-indigo-600 focus:ring focus:ring-indigo-300"
                      />
                      <span class="ml-2">PayPal</span>
                    </label>
                  </div>
                </div>

                <div class="mt-6">
                  <button
                    type="submit"
                    class="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded"
                  >
                    Checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default Carts;
