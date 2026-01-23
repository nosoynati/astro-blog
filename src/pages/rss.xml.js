import rss from '@astrojs/rss';
// import rss, { pagesGlobToRssItems } from '@astrojs/rss'; -> for pages
import { getCollection } from 'astro:content';

// export async function GET(context) {
//   return rss({
//     title: "Astro Learner | Blog",
//     description: "My journmey learningAstro",
//     site: context.site,
//     items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
//     customData: `<language>es-la</language>`
//   });
// }
export async function GET(context){
  const posts = await getCollection('blog');
  return rss({
    title: "Astro Learner | Blog",
    description: "My journmey learningAstro",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}`,
    })),
    customData: `<language>es-ar</language>`
  })
}