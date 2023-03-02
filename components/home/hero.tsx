import Link from "next/link";
import { AiOutlineTwitter, 
  AiOutlineInstagram, 
  AiOutlineGithub, 
  AiOutlineLinkedin } from "react-icons/ai"

export default function Hero() {
  return (
    <div className=" px-4 py-12 my-16 w-full lg:w-2/3 text-zinc-700 dark:text-zinc-400" data-testid="hero-div">
      <h1 className="dark:text-zinc-100 py-4 font-semibold text-5xl text-black" data-testid="hero-h1">
        Lorem ipsum dolor sit amet.
      </h1>
      <p className="py-4 " data-testid="hero-blurb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="p-4 flex flex-row text-2xl " data-testid="social-links">
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" href={"/"} data-testid="twitter-link">
          <AiOutlineTwitter />
        </Link>
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" href={"/"} data-testid="insta-link">
          <AiOutlineInstagram />
        </Link>
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" href={"/"} data-testid="github-link">
          <AiOutlineGithub />
        </Link>
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" href={"/"} data-testid="linkedin-link">
          <AiOutlineLinkedin />
        </Link>
      </div>
    </div>
  )
}