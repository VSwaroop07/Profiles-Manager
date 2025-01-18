import React from "react";

const UserCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mr-8 md:mr-8">
        <div class="w-full max-w-72 m-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center pb-10 pt-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-400">Visual Designer</span>
            <span class="text-sm text-gray-400">Location : New York</span>
            <div class="flex mt-4 md:mt-6">
              <a
                href="#"
                class="py-2 px-4 ms-2 text-sm font-medium focus:outline-none rounded-lg border bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
              >
                View Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
