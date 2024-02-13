"use client";

import { CustomChat, FacebookProvider } from "react-facebook";

export const FacebookMsg = () => {
  return (
    <FacebookProvider appId={`${process.env.NEXT_PUBLIC_APP_ID}`}>
      <CustomChat
        pageId={`${process.env.NEXT_PUBLIC_PAGE_ID}`}
        minimized={true}
      />
    </FacebookProvider>
  );
};
