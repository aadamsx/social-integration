import { TwitterTimelineEmbed } from "react-twitter-embed";
import InstagramEmbed from "react-instagram-embed";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <TwitterTimelineEmbed
        className="h-screen"
        sourceType="profile"
        screenName="DIRECTV"
        options={{
          tweetLimit: "3",
          // width: "400",
          height: "400",
          // text: "#reactjs is awesome",
          // via: "saurabhnemade",
          // sourceType: "profile",
          // autoHeight: true,
        }}
        theme="dark"
        // noHeader="true"
        noBorders="true"
        // noFooter="true"
        noScrollbar="true"
      ></TwitterTimelineEmbed>

      <InstagramEmbed
        url="https://www.instagram.com/p/BqIh647Hz9p/"
        maxWidth={500}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />

      <InstagramEmbed
        url="https://www.instagram.com/direct_tvs/"
        // clientAccessToken="{app-id}|{client-token}"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}
