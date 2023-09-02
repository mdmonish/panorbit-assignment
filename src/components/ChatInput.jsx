import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const DummyChat = [
  {
    isOwner: false,
    chat: "Lorem EpsumLorem Epsum Epsum lorem",
    time: "16:57 PM",
  },
  {
    isOwner: false,
    chat: "Lorem EpsumLorem Epsum Epsum lorem",
    time: "16:57 PM",
  },
  {
    isOwner: true,
    chat: "Lorem EpsumLorem Epsum Epsum lorem",
    time: "16:57 PM",
  },
  {
    isOwner: true,
    chat: "Lorem",
    time: "16:57 PM",
  },
  {
    isOwner: true,
    chat: "Lorem EpsumLorem Epsum Epsum lorem",
    time: "16:57 PM",
  },
  {
    isOwner: false,
    chat: "Lorem EpsumLorem Epsum Epsum lorem",
    time: "16:57 PM",
  },
  {
    isOwner: true,
    chat: "Lorem EpsumLorem Epsum Epsum lorem",
    time: "16:57 PM",
  },
  {
    isOwner: false,
    chat: "Lorem EpsumLorem Epsum Epsum lorem",
    time: "16:57 PM",
  },
];
const ChatInput = ({ chatUser }) => {
  return (
    <div className={`w-60 border rounded-t-lg mt-auto`}>
      <div
        className="flex items-center justify-between h-10 rounded-t-lg bg-[#2c65c8] px-3 text-white"
        onClick={() => {
          //   setToggler(!toggler);
          //   setEnableChat(false);
        }}
      >
        <div className="flex">
          <img
            src={chatUser.profilepicture}
            className="w-6 h-6 rounded-full mr-2"
          />
          <h1 className="text-sm">{chatUser.name}</h1>
        </div>
        <div className="flex items-center">
          <KeyboardArrowDownOutlinedIcon />
          <CloseIcon style={{ width: "18px" }} />
        </div>
      </div>
      <div
        className={
          "block max-h-52 relative overflow-y-auto border border-r-blue-500 border-l-blue-500 px-4 text-xs"
        }
      >
        {DummyChat.map((chat, i) => (
          <div
            className={`w-36 my-2 flex ${chat.isOwner ? "ml-auto" : ""}`}
            key={i}
          >
            <h1 className="bg-gray-100 px-2 py-2">{chat.chat}</h1>
          </div>
        ))}
      </div>
      <div className="flex px-3 py-1 border border-gray-300">
        <input className="focus:outline-none w-full" />
        <div className="text-[#2C65C8]">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
