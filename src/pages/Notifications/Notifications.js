import React from "react";
import "./Notifications.css";
import Widgets from "../../components/Widgets/Widgets";
import SettingsIcon from "@material-ui/icons/Settings";
import Post from "../../components/Feed/Post/Post";
import FollowedYou from "../../components/FollowedYou/FollowedYou";
import LikedYou from "../../components/LikedYou/LikedYou";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import { Avatar } from "@material-ui/core";
import DrawerBar from "../../components/DrawerBar/DrawerBar";
import HomeBox from "../../components/HomeBox/HomeBox";
import Loading from "../../components/Loading/Loading";

function Notifications() {
  const [isAll, setIsAll] = React.useState(true);
  const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  document.title = "Notifications / Twitter";
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <HomeBox>
      <div className="feed">
        {isDrawerBar && (
          <div
            onClick={() => setIsDrawerBar(false)}
            className="drawerBarPanel"
          />
        )}
        <DrawerBar active={isDrawerBar} />
        <div className="notificationsHeader">
          <div className="notificationsTitle">
            <div onClick={() => setIsDrawerBar(true)}>
              <Avatar src="https://i.ytimg.com/vi/eV4fMfIjTZ0/maxresdefault.jpg" />
            </div>
            <span>Notifications</span>
            <SettingsIcon />
          </div>
          <div className="notificationsCategory">
            <div
              className={isAll && "notificationActive"}
              onClick={() => setIsAll(true)}
            >
              <span>All</span>
            </div>
            <div
              className={!isAll && "notificationActive"}
              onClick={() => setIsAll(false)}
            >
              <span>Mentions</span>
            </div>
          </div>
        </div>
        <article>
          {!loading ? (
            isAll ? (
              <>
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "Naruto Uzumaki",
                  }}
                />
                <LikedYou
                  likePost={{
                    id: 1,
                    likeUser: [
                      {
                        displayName: "N Uzumaki",
                        userImage:
                          "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                      },
                      {
                        displayName: "John",
                        userImage:
                          "https://i.ytimg.com/vi/eV4fMfIjTZ0/maxresdefault.jpg",
                      },
                      {
                        displayName: "Code",
                        userImage:
                          "https://i.ytimg.com/vi/eV4fMfIjTZ0/maxresdefault.jpg",
                      },
                    ],
                    post: "ifrst tweet.",
                  }}
                />
                <Post
                  username="naruto"
                  userimage="https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg"
                  displayName="Naruto Namikaze"
                  text="good luck for midterm"
                  date="1614077764184"
                />
              </>
            ) : (
              <>
                <Post
                  username="dauren"
                  userimage="https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg"
                  displayName="Dauren Dauren"
                  text="tweet app"
                  date="1614077764184"
                />
              </>
            )
          ) : (
            <Loading />
          )}
        </article>
        <BottomSidebar />
      </div>
      <Widgets />
    </HomeBox>
  );
}

export default Notifications;
