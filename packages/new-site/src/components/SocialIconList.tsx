import * as si from "react-icons/si";
import SocialIcon from "./SocialIcon";

const socialIcons = [
  {
    href: "https://www.twitter.com/bikegridnow",
    icon: si.SiTwitter,
  },
  {
    href: "https://instagram.com/bikegridnow",
    icon: si.SiInstagram,
  },
  {
    href: "https://www.facebook.com/BikeGridNow/",
    icon: si.SiFacebook,
  },
  {
    href: "https://www.tiktok.com/@bikegridnow",
    icon: si.SiTiktok,
  },
  {
    href: "https://urbanists.social/@bikegridnow",
    icon: si.SiMastodon,
  },
  {
    href: "mailto:grassroots@bikegridnow.org",
    icon: si.SiGmail,
  },
];

export default function SocialIconList() {
  return (
    <div className="mt-10 flex flex-row justify-center space-x-4">
      {socialIcons.map((x, i) => (
        <SocialIcon {...x} key={i} />
      ))}
    </div>
  );
}
