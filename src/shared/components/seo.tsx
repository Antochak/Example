import Head from 'next/head';
import {META} from '~/meta';

interface SeoProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function Seo({title, description, url, image}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description || META.description} />
      <meta property='og:title' content={title || META.title} />
      <meta property='og:description' content={description || META.description} />
      <meta property='og:url' content={url || META.publicUrl} />
      <meta property='og:image' content={image || META.preview} />
      <meta property='og:type' content='website' />
      <meta name='keywords' content={META.keywords} />
      <meta name='author' content={META.author} />

      <meta name='twitter:title' content={title || META.title} />
      <meta name='twitter:description' content={description || META.description} />
      <meta name='twitter:image' content={image || META.preview} />
    </Head>
  );
}
