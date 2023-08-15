import React from "react";

import {
  OKIcon,
  VKIcon,
  LineIcon,
  EmailIcon,
  ViberIcon,
  HatenaIcon,
  PocketIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  TwitterIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  WorkplaceIcon,
  PinterestIcon,
  InstapaperIcon,
  LivejournalIcon,
} from "react-share";

import {
  OKShareButton,
  VKShareButton,
  LineShareButton,
  EmailShareButton,
  ViberShareButton,
  MailruShareButton,
  PocketShareButton,
  RedditShareButton,
  HatenaShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  PinterestShareButton,
  WorkplaceShareButton,
  InstapaperShareButton,
  LivejournalShareButton,
} from "react-share";

function Share({ 
    sites = [], 
    url = "", 
    quote = "", 
    hashtag = "" 
}) {
  const sharer = {
    Ok: {
      icon: <OKIcon />,
      button: <OKShareButton />,
    },
    Vk: {
      icon: <VKIcon />,
      button: <VKShareButton />,
    },
    Line: {
      icon: <LineIcon />,
      button: <LineShareButton />,
    },
    Email: {
      icon: <EmailIcon />,
      button: <EmailShareButton />,
    },
    Viber: {
      icon: <ViberIcon />,
      button: <ViberShareButton />,
    },
    Mailru: {
      icon: <MailruIcon />,
      button: <MailruShareButton />,
    },
    Pocket: {
      icon: <PocketIcon />,
      button: <PocketShareButton />,
    },
    Reddit: {
      icon: <RedditIcon />,
      button: <RedditShareButton />,
    },
    Hatena: {
      icon: <HatenaIcon />,
      button: <HatenaShareButton />,
    },
    Tumblr: {
      icon: <TumblrIcon />,
      button: <TumblrShareButton />,
    },
    Twitter: {
      icon: <TwitterIcon />,
      button: <TwitterShareButton />,
    },
    Whatsapp: {
      icon: <WhatsappIcon />,
      button: <WhatsappShareButton />,
    },
    Telegram: {
      icon: <TelegramIcon />,
      button: <TelegramShareButton />,
    },
    Linkedin: {
      icon: <LinkedinIcon />,
      button: <LinkedinShareButton />,
    },
    Facebook: {
      icon: <FacebookIcon />,
      button: <FacebookShareButton />,
    },
    Pinterest: {
      icon: <PinterestIcon />,
      button: <PinterestShareButton />,
    },
    Workplace: {
      icon: <WorkplaceIcon />,
      button: <WorkplaceShareButton />,
    },
    Instapaper: {
      icon: <InstapaperIcon />,
      button: <InstapaperShareButton />,
    },
    Livejournal: {
      icon: <LivejournalIcon />,
      button: <LivejournalShareButton />,
    },
  };

  return sites.map((value, index) => {
    if(undefined === sharer[value]){
        return;
    }

    return React.cloneElement(
        sharer[value].button,
        {...{
            key:`${index}:${value}`,
            url: url,quote: quote,hashtag: hashtag
        },children: (
            React.cloneElement(sharer[value].icon,
                {
                    size: 40,
                    round: true,
                    className: "buttonIcons"
                }
            )
        )}
    );
  });
}

export default Share;
