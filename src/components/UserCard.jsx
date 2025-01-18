import React from "react";
import { db } from "../config/firebase";
import useDisclose from "../hooks/useDisclose";
const UserCard = ({profile}) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <div key={profile.id} class="w-full max-w-72 m-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10 pt-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-white">{profile.name}</h5>
          <span class="text-sm text-gray-400">{profile.description}</span>
          <span class="text-sm text-gray-400">{profile.location}</span>
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
      
    </>
  );
};

export default UserCard;
