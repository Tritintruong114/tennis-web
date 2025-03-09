import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getAboutUsPage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'about-us'][0]{
    slug,
    'hero':pageBuilder[][_type == "hero"][0]{
      'heroImage':image.asset->url,
      'heroVideo':video.asset->url,
      heading,
      cta,
      subTitle,
      tagline
    },

      'history':pageBuilder[][_type == "history"][0]{
      heading,
      tagline,
      'ourHistory':ourHistory[]{
      'link': cta.link, 
      'image': image.asset-> url,
      tagline,
      heading,
      excerpt
      }
    },
    
  }`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
