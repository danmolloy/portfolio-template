import PageHead from "../layout/pageHead";
import SpeakingSection from "./section";

const pageHeadProps = {
  headline: "Events I've spoken at",
  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
}

export const conferencesArr = [
  {
    key: 0,
    date: "19 Feb 2023",
    title: "Lorem Ipsum",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
  {
    key: 1,
    date: "18 Feb 2023",
    title: "Sed ut perspiciatis unde omnis",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    key: 2,
    date: "17 Feb 2023",
    title: "At vero eos et accusamus",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
  {
    key: 3,
    date: "16 Feb 2023",
    title: "Vivamus dignissim rhoncus ex, sit amet mattis orci finibus in.",
    body: "Vivamus dignissim rhoncus ex, sit amet mattis orci finibus in. Mauris iaculis nisi eget felis bibendum consequat vitae ac dui. Sed elementum hendrerit ligula, vel facilisis sapien consequat eu. Fusce velit risus, porttitor vel nisl a, feugiat bibendum ex. Sed mollis tortor et risus semper, id interdum lacus posuere. In ullamcorper nunc a diam dignissim porta. Vivamus risus ipsum, commodo eu ex a, fermentum mollis augue. Curabitur pretium libero id facilisis semper. Proin ut odio libero. Etiam vitae dui ut enim consequat molestie ut quis arcu. Fusce maximus finibus tellus ornare mollis. Cras in posuere lorem. Etiam urna neque, dictum et enim a, porttitor convallis risus. In eu nunc erat. Vivamus dictum quam a consequat aliquam. Curabitur ut aliquet lectus, hendrerit consectetur quam."
  },
]
export const podcastsArr = [
  {
    key: 0,
    date: "19 Feb 2023",
    title: "Lorem Ipsum",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
  {
    key: 1,
    date: "18 Feb 2023",
    title: "Sed ut perspiciatis unde omnis",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    key: 2,
    date: "17 Feb 2023",
    title: "At vero eos et accusamus",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
  {
    key: 3,
    date: "16 Feb 2023",
    title: "Vivamus dignissim rhoncus ex, sit amet mattis orci finibus in.",
    body: "Vivamus dignissim rhoncus ex, sit amet mattis orci finibus in. Mauris iaculis nisi eget felis bibendum consequat vitae ac dui. Sed elementum hendrerit ligula, vel facilisis sapien consequat eu. Fusce velit risus, porttitor vel nisl a, feugiat bibendum ex. Sed mollis tortor et risus semper, id interdum lacus posuere. In ullamcorper nunc a diam dignissim porta. Vivamus risus ipsum, commodo eu ex a, fermentum mollis augue. Curabitur pretium libero id facilisis semper. Proin ut odio libero. Etiam vitae dui ut enim consequat molestie ut quis arcu. Fusce maximus finibus tellus ornare mollis. Cras in posuere lorem. Etiam urna neque, dictum et enim a, porttitor convallis risus. In eu nunc erat. Vivamus dictum quam a consequat aliquam. Curabitur ut aliquet lectus, hendrerit consectetur quam."
  },
]

export default function Speaking() {
  return (
    <div  data-testid="speaking-div" >
      <PageHead {...pageHeadProps} />
      <div data-testid="conferences-div" className="my-16">
        <h2 className="font-semibold m-4">Conferences</h2>
        {conferencesArr.map(i => (
          <div key={i.key}>
            <SpeakingSection {...i} />
          </div>
        ))}
      </div>
      <div data-testid="podcasts-div" className="my-16">
        <h2 className="font-semibold m-4">Podcasts</h2>
        {podcastsArr.map(i => (
          <div key={i.key}>
            <SpeakingSection {...i} />
          </div>
        ))}
      </div>
    </div>
  )
}