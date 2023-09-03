import React from "react";
import GoogleMapReact from "google-map-react";

// default map co-ordinates
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

const Profile = ({ profile }) => {
  return (
    <div className="grid grid-cols-5 mt-10 h-[90vh]">
      <div className="col-span-2 text-center ">
        <img
          src={profile?.profilepicture}
          className="w-48 h-48 rounded-full mx-auto"
          alt="profile"
        />
        <h1 className="text-xl font-bold text-[#545454] my-3">
          {profile?.name}
        </h1>
        <div className="grid grid-cols-2 mr-20 text-[#9a9a9a]">
          <div className="text-right text-xl pb-2">
            Username<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2 text-[#545454]">
            {profile?.username}
          </div>
          <div className="text-right text-xl pb-2">
            e-mail<span className="px-4 ">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2 break-all text-[#545454]">
            {profile?.email}
          </div>
          <div className="text-right text-xl pb-2">
            Phone<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2 text-[#545454]">
            {profile?.phone}
          </div>
          <div className="text-right text-xl pb-2">
            Website<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2 text-[#545454]">
            {profile?.website}
          </div>
        </div>
        <h1 className="border-t-2 max-w-[300px] mx-auto pt-2 text-xl font-semibold mb-2 mt-3 text-[#9a9a9a]">
          Company
        </h1>
        <div className="grid grid-cols-2 mr-20 text-[#9a9a9a]">
          <div className="text-right text-xl pb-2">
            Name<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2 text-[#545454]">
            {profile?.company?.name}
          </div>
          <div className="text-right text-xl pb-2">
            catchphrase<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2 text-[#545454]">
            {profile?.company?.catchPhrase}
          </div>
          <div className="text-right text-xl pb-2">
            bs<span className="px-4">:</span>
          </div>
          <div className="text-left text-xl font-bold pb-2 text-[#545454]">
            {profile?.company?.bs}
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 pl-10 text-[#9a9a9a]">
        <h1 className="text-xl ml-2">Address:</h1>
        <div className="grid grid-cols-2 max-w-[300px] mt-4">
          <div className="text-right text-xl pb-2">
            Street<span className="px-4">:</span>
          </div>
          <div className="font-bold text-xl pb-2 text-[#545454]">
            {profile?.address?.street}
          </div>
          <div className="text-right text-xl pb-2">
            Suite<span className="px-4">:</span>
          </div>
          <div className="font-bold text-xl pb-2 text-[#545454]">
            {profile?.address?.suite}
          </div>
          <div className="text-right text-xl pb-2">
            City<span className="px-4">:</span>
          </div>
          <div className="font-bold text-xl pb-2 text-[#545454]">
            {profile?.address?.city}
          </div>
          <div className="text-right text-xl pb-2">
            Zipcode<span className="px-4">:</span>
          </div>
          <div className="font-bold text-xl pb-2 text-[#545454]">
            {profile?.address?.zipcode}
          </div>
        </div>
        <div className="rounded-xl pl-10 pt-3 h-[50vh]">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            options={{
              styles: [{ borderRadius: "20px" }],
            }}
          >
            <div className="rounded-lg"></div>
          </GoogleMapReact>
          <div className="flex justify-end pt-4 text-xs text-[#9a9a9a]">
            <h1 className="flex items-center">
              Lat:
              <span className="ml-0.5 mr-3 text-sm font-semibold text-black">
                {profile?.address?.geo?.lat}
              </span>
            </h1>
            <h1 className="flex items-center">
              Long:
              <span className="ml-0.5 text-sm font-semibold text-black">
                {profile?.address?.geo?.lng}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
