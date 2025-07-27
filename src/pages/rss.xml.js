import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

import { WEBPAGE_INFO } from '../constants'

export async function GET(context) {
    const posts = await getCollection('blog')

    return rss({
        title: WEBPAGE_INFO.TITLE,
        description: WEBPAGE_INFO.DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description || WEBPAGE_INFO.DESCRIPTION,
            link: `/posts/${post.id}/`,
        })),
        customData: `<language>${WEBPAGE_INFO.LANGUAGE}</language>`,
    })
}
