"use client";

import { useEffect } from "react";
import { CustomChat, FacebookProvider } from "react-facebook";

export const FacebookMsg = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      //@ts-ignore
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode!.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  return (
    <FacebookProvider appId={`${process.env.NEXT_PUBLIC_APP_ID}`}>
      <CustomChat
        pageId={`${process.env.NEXT_PUBLIC_PAGE_ID}`}
        minimized={true}
      />
    </FacebookProvider>
  );
};
