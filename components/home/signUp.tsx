import { AiOutlineMail } from "react-icons/ai";

export default function SignUp() {
  return (
    <div className="shadow-xs border dark:border-zinc-700 p-4 m-8 rounded-lg text-slate-600 dark:text-zinc-400" data-testid="sign-up-div">
      <div className="flex flex-row items-center text-black">
        <div className="" data-testid="mail-icon">
          <AiOutlineMail />
        </div>
        <h2 className="font-semibold p-2 dark:text-zinc-100">Stay up to date</h2>
      </div>
      <p className=" text-sm p-2" data-testid="signup-blurb">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
      <div>
        <input className="border dark:border-zinc-700 shadow-sm p-2 m-2 w-2/3 rounded-lg dark:bg-zinc-800" type="text" data-testid="email-input" placeholder="Email address" />
        <button className="bg-zinc-900 hover:bg-slate-800 text-white dark:hover:bg-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 px-4 py-2 rounded-lg">
          Join
        </button>
      </div>
    </div>
  )
}