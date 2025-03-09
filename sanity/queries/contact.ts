import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function geContactPage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'contact'][0]{
    slug,
    'hero':pageBuilder[][_type == "hero"][0]{
      'heroImage':image.asset->url,
      'heroVideo':video.asset->url,
      heading,
      cta,
      subTitle,
      tagline
    },

      'socials':pageBuilder[][_type == "socials"][0]{
      heading,
      tagline,
      'ourSocials':ourSocials[]{
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
