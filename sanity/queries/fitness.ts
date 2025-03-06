import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getFitnessPage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'fitness'][0]{
    slug,
    'hero':pageBuilder[][_type == "hero"][0]{
      'heroImage':image.asset->url,
      'heroVideo':video.asset->url,
      heading,
      cta,
      subTitle,
      tagline
    },
      'sectionHighlight':pageBuilder[][_type == "textWithIllustration"][0]{
      heading,
      tagline
    },
      'facilities':pageBuilder[][_type == "facilities"][0]{
      heading,
      tagline,
      'ourFacilities':ourFacilities[]{
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
