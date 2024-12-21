import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WeiboShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookShareCount,
  PinterestShareCount,
  RedditShareCount,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WeiboIcon,
  WhatsappIcon,
} from "react-share";

const Share = () => {
  const url = "https://channelz1.vercel.app";
  const title = "Check out my post in this App!";
  return (
    <div style={{ background: "#0000", height: "100vh", width: "100%" }}>
      <h1>Share</h1>
      <EmailShareButton url={url}>
        {" "}
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={url}>
        <FacebookMessengerIcon size={40} round={true} />
      </FacebookMessengerShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
      <PinterestShareButton url={url}>
        <PinterestIcon size={40} round={true} />
      </PinterestShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={40} round={true} />
      </RedditShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={40} round={true} />
      </TelegramShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <ViberShareButton url={url}>
        <ViberIcon size={40} round={true} />
      </ViberShareButton>
      <WeiboShareButton url={url}>
        <WeiboIcon size={40} round={true} />
      </WeiboShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  );
};
export default Share;
