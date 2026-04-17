// import profileIcon from "../../assets/Icons/profile.png";
import notificationIcon from "../../assets/Icons/notification.png";
import { UserButton } from "@clerk/clerk-react";

const Header = ({ title }) => {
  return (
    <div
      style={{
        position: "sticky",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
      }}
    >
      {/* Left: Title */}
      <h1  style={{ margin: 0, fontSize: 32 }}>{title}</h1>

      {/* Right: Icons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        {/* Notification */}
        <div
          style={{
            width: "37px",
            height: "37px",
            borderRadius: "50%",
            backgroundColor: "#F1B657",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={notificationIcon}
            alt="notification"
            style={{
              width: "16px",
              height: "16px",
            }}
          />
        </div>

        {/* Profile */}
        <div
          style={{
            width: "37px",
            height: "37px",
            borderRadius: "50%",
            border: "#F1B657",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {/* <img
            src={profileIcon}
            alt="profile"
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
            }}
          /> */}
          <UserButton
  appearance={{
    elements: {
      avatarBox: {
        width: "37px",
        height: "37px",
      },
    },
  }}
/>
        </div>
      </div>
    </div>
  );
};

export default Header;