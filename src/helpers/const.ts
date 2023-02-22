import { SettingsProps } from "./types";

export const SETTINGS: SettingsProps = {
  SEO: {
    title: 'cms-blastoff',
    description: 'cms-blastoff: a beautiful headless starter cms',
    image: '/cms-blastoff.jpg',
  },
  ROUTES: [
    {
      hidden: true,
      slug: '/',
      href: '/',
      label: 'All',
      category: undefined
    },
    {
      hidden: false,
      slug: '/blog',
      href: '/blog',
      label: 'Blog',
      category: 'blog',
    },
    {
      hidden: false,
      slug: '/project',
      href: '/project',
      label: 'Project',
      category: 'project',
    },
  ],
  DATA: {
    HOME: {
      intro: `This website is an exquisite blog, crafted by elegantly retrieving data from a headless CMS. In other words, the content on this website is created and managed by a content management system that provides data through APIs to be fetched and rendered by the website's code. However, it's worth noting that this website is static, which means that the content is pre-built and served as-is without any dynamic processing or server-side rendering.
      Now, let me elucidate the benefits of having a static website. Firstly, static websites are highly performant and load quickly since there's no need for server-side processing or database queries. As a result, visitors can enjoy a snappy browsing experience that keeps them engaged with the website's content.
      Secondly, static websites are exceptionally secure, as there are no server-side vulnerabilities or exploitable databases. Since the website is static and served from a content delivery network (CDN), it's more resilient to malicious attacks, ensuring the safety of sensitive user data and content.
      Finally, static websites are incredibly cost-effective since they don't require any server infrastructure or dynamic programming languages. This means that you can host your website on a CDN, pay for storage and bandwidth, and enjoy a high-performing, secure, and cost-effective website that's a joy to maintain and use.  
      In summary, this blog is a fine example of a static website that's beautifully crafted, performs well, and is highly secure. By leveraging the benefits of a static website, this blog delivers an exceptional user experience while keeping costs low and maintaining a robust security posture.`,
    }
  }
}
