import React, { useEffect, useState } from "react";
import useUser from "../hook/useUser";
import TabButton from "./TabButton";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import ProfilePopup from "./ProfilePopup";

const Profile = ({ profile }) => {
  return (
    <div className="grid grid-cols-5 mt-10">
      <div className="col-span-2 text-center ">
        <img
          src={profile?.profilepicture}
          className="w-52 h-52 rounded-full mx-auto"
        />
        <h1 className="text-xl font-semibold">{profile?.name}</h1>
        <div className="grid grid-cols-2 mr-20">
          <div className="text-right text-xl pb-2">
            Username<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2">
            {profile?.username}
          </div>
          <div className="text-right text-xl pb-2">
            e-mail<span className="px-4 ">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2 break-all">
            {profile?.email}
          </div>
          <div className="text-right text-xl pb-2">
            Phone<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2">
            {profile?.phone}
          </div>
          <div className="text-right text-xl pb-2">
            Website<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2">
            {profile?.website}
          </div>
        </div>
        <h1 className="border-t-2 max-w-[300px] mx-auto pt-2 text-xl mb-2 mt-3">
          Company
        </h1>
        <div className="grid grid-cols-2 mr-20">
          <div className="text-right text-xl pb-2">
            Name<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2">
            {profile?.company?.name}
          </div>
          <div className="text-right text-xl pb-2">
            catchphrase<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2">
            {profile?.company?.catchPhrase}
          </div>
          <div className="text-right text-xl pb-2">
            bs<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2">
            {profile?.company?.bs}
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 pl-10">
        <h1 className="text-xl">Address:</h1>
        <div className="grid grid-cols-2 max-w-[300px]">
          <div className="text-right text-xl pb-2">
            Street<span className="px-4">:</span>
          </div>
          <div className="font-bold text-xl pb-2">
            {profile?.address?.street}
          </div>
          <div className="text-right text-xl pb-2">
            Suite<span className="px-4">:</span>
          </div>
          <div className="font-bold text-xl pb-2">
            {profile?.address?.suite}
          </div>
          <div className="text-right text-xl pb-2">
            City<span className="px-4">:</span>
          </div>
          <div className="font-bold text-xl pb-2">{profile?.address?.city}</div>
          <div className="text-right text-xl pb-2">
            Zipcode<span className="px-4">:</span>
          </div>
          <div className="font-bold text-xl pb-2">
            {profile?.address?.zipcode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
