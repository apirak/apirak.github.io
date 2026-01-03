import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  
  return rss({
    title: 'Apirak Panatkool Blog',
    description: 'UX Design and Product Development insights by Apirak Panatkool. Learn about Agile UX, Vertical Slicing, UX-to-Code practices, AI in Product Design, and practical tutorials for UX Designers in Thailand.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      categories: [...post.data.categories, ...post.data.tags],
      author: post.data.author,
    })),
    customData: `<language>th-TH</language>`,
  });
}
