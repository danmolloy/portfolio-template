import { AiOutlineMail } from "react-icons/ai";

export default function SignUp() {
  return (
    <div data-testid="sign-up-div">
      <div>
        <div data-testid="mail-icon">
          <AiOutlineMail />
        </div>
        <h2>Stay up to date</h2>
      </div>
      <p data-testid="signup-blurb">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
      <div>
        <input type="text" data-testid="email-input" placeholder="email-input" />
        <button>
          Join
        </button>
      </div>
    </div>
  )
}