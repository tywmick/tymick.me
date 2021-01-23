import React from "react";
import SocialLink from "./SocialLink";
import {
  faCodepen,
  faDev,
  faDiscord,
  faFacebook,
  faFreeCodeCamp,
  faGithub,
  faGitlab,
  faInstagram,
  faKaggle,
  faLinkedin,
  faMastodon,
  faMediumM,
  faNpm,
  faPaypal,
  faSpotify,
  faStackExchange,
  faTwitter,
  faWikipediaW,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <div id="social-links" className="d-flex justify-content-center flex-wrap">
      <SocialLink
        brand="GitHub"
        icon={faGithub}
        href="https://github.com/tywmick"
      />
      <SocialLink
        brand="Twitter"
        icon={faTwitter}
        href="https://twitter.com/tywmick"
      />
      <SocialLink
        brand="Mastodon"
        icon={faMastodon}
        href="https://mastodon.online/@tywmick"
      />
      <SocialLink
        brand="Facebook"
        icon={faFacebook}
        href="https://www.facebook.com/tywmick"
      />
      <SocialLink
        brand="LinkedIn"
        icon={faLinkedin}
        href="https://www.linkedin.com/in/tywmick"
      />
      <SocialLink
        brand="Kaggle"
        icon={faKaggle}
        href="https://www.kaggle.com/tywmick"
      />
      <SocialLink
        brand="npm"
        icon={faNpm}
        href="https://www.npmjs.com/~tywmick"
      />
      <SocialLink
        brand="freeCodeCamp"
        icon={faFreeCodeCamp}
        href="https://www.freecodecamp.org/tywmick"
      />
      <SocialLink
        brand="CodePen"
        icon={faCodepen}
        href="https://codepen.io/tywmick"
      />
      <SocialLink
        brand="GitLab"
        icon={faGitlab}
        href="https://gitlab.com/tywmick"
      />
      <SocialLink
        brand="Instagram"
        icon={faInstagram}
        href="https://instagram.com/tywmick"
      />
      <SocialLink brand="Discord" icon={faDiscord} username="tywmick#4573" />
      <SocialLink
        brand="Spotify"
        icon={faSpotify}
        href="https://open.spotify.com/user/tywmick"
      />
      <SocialLink
        brand="Medium"
        icon={faMediumM}
        href="https://medium.com/@tywmick"
      />
      <SocialLink brand="DEV" icon={faDev} href="https://dev.to/tywmick" />
      <SocialLink
        brand="Stack Exchange"
        icon={faStackExchange}
        href="https://stackexchange.com/users/3957560/ty-mick?tab=accounts"
      />
      <SocialLink
        brand="Wikipedia"
        icon={faWikipediaW}
        href="https://en.wikipedia.org/wiki/User:TyWMick"
      />
      <SocialLink
        brand="YouTube"
        icon={faYoutube}
        href="https://www.youtube.com/TylerWestinMick"
      />
      <SocialLink
        brand="PayPal"
        icon={faPaypal}
        href="https://www.paypal.me/tymick"
      />
    </div>
  );
}