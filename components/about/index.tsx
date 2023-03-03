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
      <Image className="rotate-3 rounded-lg ml-12 my-8 lg:my-20" data-testid="about-img" height={250} width={250} src="http://placebeard.it/200/200" alt="about me"/>
      <PageHead {...aboutProps} />
      <SocialLinks />
      <div className="border-t dark:border-zinc-700 flex flex-row items-center mb-12 mx-3 text-zinc-700 dark:text-zinc-400"  data-testid="email-link">
        <div className="flex flex-row items-center ">
        <div className="text-xl py-4 mr-2 ">
        <AiOutlineMail />
        </div>
        <p className="">email@email.com</p>
        </div>
      </div>
    </div>
  )
}