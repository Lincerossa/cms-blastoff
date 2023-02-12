import Head from "next/head"
import { attributes, react as HomeContent } from '../../public/_posts/blog/content.md'

const Blog = () => {

    let { title, thumbnail } = attributes;

    console.log({thumbnail})
    return (
      <>
        <Head>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            <img src={`../..${thumbnail}`} />
          </ul>
        </article>
      </>
    )
  
}

export default Blog