import Link from "next/link";
import { AiOutlineTwitter, 
  AiOutlineInstagram, 
  AiOutlineGithub, 
  AiOutlineLinkedin } from "react-icons/ai"

export default function Hero() {
  return (
    <div data-testid="hero-div">
      <h1 data-testid="hero-h1">
        Lorem ipsum dolor sit amet.
      </h1>
      <p data-testid="hero-blurb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div data-testid="social-links">
        <Link href={"/"} data-testid="twitter-link">
          <AiOutlineTwitter />
        </Link>
        <Link href={"/"} data-testid="insta-link">
          <AiOutlineInstagram />
        </Link>
        <Link href={"/"} data-testid="github-link">
          <AiOutlineGithub />
        </Link>
        <Link href={"/"} data-testid="linkedin-link">
          <AiOutlineLinkedin />
        </Link>
      </div>
    </div>
  )
}