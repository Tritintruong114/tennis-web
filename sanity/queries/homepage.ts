import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getHomepage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'homepage'][0]{
    slug,
    'hero':pageBuilder[][_type == "hero"][0]{
      'heroImage':image.asset->url,
      'heroVideo':video.asset->url,
      heading,
      cta,
      subTitle,
      tagline
    },

    'register':pageBuilder[][_type == "register"][0]{
      heading,
      cta,
      tagline
    },

    'coaches':pageBuilder[][_type == "coaches"][0]{
      heading,
      cta,
      tagline,
      'ourCoaches':ourCoaches[]{
      'link': cta.link, 
      'image': image.asset-> url,
      tagline,
      heading,
      excerpt
      }
    },
    
    'locations':pageBuilder[][_type == "locations"][0]{
      heading,
      cta,
      tagline,
      'ourLocations':ourLocations[]{
      'link': cta.link, 
      'image': image.asset-> url,
      tagline,
      heading,
      excerpt
      }
    },
    'faqs':pageBuilder[][_type == "faqs"][0]{
      heading,
      cta,
      tagline,
      'ourFaqs':ourfaqs[]{
      question,
      answer
      }
    }
    ,
    'rally':pageBuilder[][_type == "rally"][0]{
      heading,
      cta,
      'image': image.asset-> url
    }
  }`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
