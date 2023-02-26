import Image from "next/image";
import SocialLinks from "./socialLinks";
import { AiOutlineMail } from "react-icons/ai";
import PageHead from "../layout/pageHead";

const aboutProps = {
  headline: "Lorem Ipsum",
  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
}

export default function About() {
  return (
    <div data-testid="about-div">
      <Image data-testid="about-img" height={150} width={150} src="http://placebeard.it/200/200" alt="about me"/>
      <PageHead {...aboutProps} />
      <SocialLinks />
      <div data-testid="email-link">
        <AiOutlineMail />
        <p>email@email.com</p>
      </div>
    </div>
  )
}