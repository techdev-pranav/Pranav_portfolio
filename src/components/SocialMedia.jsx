import React from "react";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { socialLinks } from "../constants";

const { instaLink, fbLink, gitLink, twitterLink, linkedInLink } = socialLinks;

const handleInstaClick = () => {
  window.open(instaLink, "_blank");
};

const handleTwitterClick = () => {
  window.open(twitterLink, "_blank");
};

const handleFbClick = () => {
  window.open(fbLink, "_blank");
};

const handleGitClick = () => {
  window.open(gitLink, "_blank");
};
const handleLinkedinClick = () => {
  window.open(linkedInLink, "_blank");
};

const socialMedia = [BsInstagram, BsTwitter, BsFacebook, BsGithub, BsLinkedin];

const SocialMediaz = () => {
  return socialMedia.map((media) => (
    <div style={{ cursor: "pointer" }}>
      <BsLinkedin onClick={handleLinkedinClick} />
    </div>
  ));
};

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div style={{ cursor: "pointer" }}>
        <BsLinkedin onClick={handleLinkedinClick} />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsGithub onClick={handleGitClick} />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsInstagram onClick={handleInstaClick} />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsTwitter onClick={handleTwitterClick} />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsFacebook onClick={handleFbClick} />
      </div>
    </div>
  );
};

export default SocialMedia;
