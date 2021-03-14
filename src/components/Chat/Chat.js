import { Avatar } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import ChatInputs from "../ChatInputs/ChatInputs";
import FromMessage from "../FromMessage/FromMessage";
import { InfoIcon, CalenderIcon } from "../icons";
import MyMessage from "../MyMessage/MyMessage";
import "./Chat.css";

const Chat = ({ messages, users }) => {
  //let { id } = useParams();
  var id = useLocation().pathname;
  const [user, setUser] = React.useState({});
  const [messagesData, setMessagesData] = React.useState();

  React.useEffect(() => {
    if (id) {
      let userid = id.split("-")[1];
      let messageid = id.split("/")[2];
      setUser(users.find((user) => user.username === userid));
      setMessagesData(
        messages.find((message) => message.fromto === messageid).messages
      );
    }
  }, [id]);

  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar src={user && user.userimage} />
        <div>
          <span>{user && user.displayName}</span>
          <span>@{user && user.username}</span>
        </div>
        <InfoIcon />
      </div>
      <div className="chatRoom">
        <div className="chatInfo">
          <div>
            <span>{user.displayName}</span>
            <span>@{user.username}</span>
          </div>
          <span>{user.biograpfy}</span>
          <div>
            <span>
              <span>{user.followingCount}</span>
              <span>Following</span>
            </span>
            <span>
              <span>{user.followersCount}</span>
              <span>Followers</span>
            </span>
          </div>
          <span>
            <CalenderIcon />
            Joined {user.joinMonth} {user.joinYear}
          </span>
        </div>
        <div className="chatMessages">
          {messagesData &&
            messagesData.map((message) =>
              message.from === "mucahitsahin6" ? (
                <MyMessage message={message.message} />
              ) : (
                <FromMessage
                  message={message.message}
                  userimage={user.userimage}
                />
              )
            )}
        </div>
        <ChatInputs />
      </div>
    </div>
  );
};

export default Chat;
