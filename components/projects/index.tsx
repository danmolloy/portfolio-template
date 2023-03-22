import PageHead from "../layout/pageHead";
import ProjectTile from "./projectTile";

const headInfo = {
  headline: "My Projects",
  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
}

export const projectsArr: {
  id: number
  imgSrc: string
  title: string
  blurb: string
  link: string
}[] = [
  {
    id: 0,
    imgSrc: "http://placebeard.it/200/200",
    title: "Lorem Ipsum",
    blurb: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    link: "github.com"
  },
  {
    id: 1,
    imgSrc: "http://placebeard.it/200/200",
    title: "Lorem Ipsum",
    blurb: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    link: "github.com"
  },
  {
    id: 2,
    imgSrc: "http://placebeard.it/200/200",
    title: "Lorem Ipsum",
    blurb: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    link: "github.com"
  },
  {
    id: 3,
    imgSrc: "http://placebeard.it/200/200",
    title: "Lorem Ipsum",
    blurb: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    link: "github.com"
  },
]


export default function Projects() {
  return (
    <div data-testid="projects-index">
      <PageHead {...headInfo} />
      <div className="flex flex-row flex-wrap">
        {projectsArr.map((i) => (
          <div key={i.id} className="md:w-1/2 px-2">
            <ProjectTile {...i} />
          </div>
        ))}
      </div>
    </div>
  )
}