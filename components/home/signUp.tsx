import { AiOutlineMail } from "react-icons/ai";

export default function SignUp() {
  return (
    <div className="shadow-xs border p-4 m-8 rounded-lg" data-testid="sign-up-div">
      <div className="flex flex-row items-center ">
        <div className="" data-testid="mail-icon">
          <AiOutlineMail />
        </div>
        <h2 className="font-semibold p-2">Stay up to date</h2>
      </div>
      <p className="text-slate-600 text-sm p-2" data-testid="signup-blurb">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
      <div>
        <input className="border shadow-sm p-2 m-2 w-2/3" type="text" data-testid="email-input" placeholder="Email address" />
        <button className="bg-black hover:bg-slate-800 text-white px-4 py-2 rounded-lg">
          Join
        </button>
      </div>
    </div>
  )
}