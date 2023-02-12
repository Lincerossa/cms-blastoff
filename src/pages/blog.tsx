import Head from "next/head"
import Image from 'next/image'
import { attributes, react as HomeContent } from '../../public/_posts/blog/content.md'

const Blog = () => {

    const { title, thumbnail, date, rating } = attributes

    return (
      <>
        <Head>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <h2>{date}</h2>
          <p>{rating}</p>
          <HomeContent />
          <ul>
            <Image alt='' width='120' height='100' src={`/..${thumbnail}`} />
          </ul>
        </article>
      </>
    )
  
}

export default Blog