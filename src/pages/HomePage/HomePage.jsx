import { Box, Container, Flex } from "@chakra-ui/react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WeiboShareButton,
  WeiboIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  const url = "https://channelz1.vercel.app";
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "block", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
      {/* Share buttons section */}
      <Box mt={10}>
        <Flex justify="center" gap={5}>
          <FacebookShareButton url={url}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <FacebookMessengerShareButton url={url}>
            <FacebookMessengerIcon size={40} round={true} />
          </FacebookMessengerShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
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
          {/* <EmailShareButton url={url}>
            <EmailIcon size={40} round={true} />
          </EmailShareButton> */}
          <PinterestShareButton url={url}>
            <PinterestIcon size={40} round={true} />
          </PinterestShareButton>
        </Flex>
      </Box>
    </Container>
  );
};

export default HomePage;
