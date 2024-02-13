"use client";

import { FacebookProvider, SendToMessenger } from "react-facebook";

export const FacebookMsg = () => {
  return (
    <FacebookProvider appId="123456789">
      <SendToMessenger messengerAppId="123456789" pageId="123456789" />
    </FacebookProvider>
  );
};
