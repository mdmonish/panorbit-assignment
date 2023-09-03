import React, { useState } from "react";

import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ChatInput from "./ChatInput";

const ChatBox = ({ users, currentUser }) => {
  const [toggler, setToggler] = useState(false);
  const [enableChat, setEnableChat] = useState("");

  const handleClick = e => {
    // checking if the chatbox is clicked
    if (e.target.id === "chats") {
      setToggler(false);
      setEnableChat("");
    }
  };
  return (
    <div
      className={` flex justify-end ${toggler ? "z-20 fixed inset-0" : ""}`}
      id="chats"
      onClick={handleClick}
    >
      {enableChat && (
        <ChatInput
          chatUser={enableChat}
          setEnableChat={setEnableChat}
          setToggler={setToggler}
        />
      )}
      <div
        className={`w-60 border rounded-t-lg  mt-auto ml-8 bg-white ${
          toggler ? "mr-20" : ""
        }`}
      >
        <div
          className="flex items-center justify-between text-white h-10 rounded-t-lg bg-[#2c65c8] pl-4 pr-3"
          onClick={() => {
            setToggler(!toggler);
            setEnableChat(false);
          }}
        >
          <div>
            <ModeCommentOutlinedIcon />
            <span className="ml-2.5">Chats</span>
          </div>

          {toggler ? (
            <KeyboardArrowDownOutlinedIcon />
          ) : (
            <KeyboardArrowUpOutlinedIcon />
          )}
        </div>
        <div className={toggler ? "border border-blue-500 pr-1" : ""}>
          <div
            className={
              toggler ? "block max-h-80 overflow-y-auto px-3 pt-2" : "hidden"
            }
          >
            {users
              .filter(user => user.id !== currentUser.id)
              .map((u, i) => (
                <div
                  className="flex justify-between items-center py-0.5"
                  key={i}
                >
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setEnableChat(u)}
                  >
                    <img
                      src={u.profilepicture}
                      className="w-8 h-8 rounded-full mr-3"
                      alt="profile"
                    />
                    <h1 className="text-md">{u.name}</h1>
                  </div>
                  <span className="text-green-500">
                    <FiberManualRecordIcon style={{ width: "12px" }} />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
