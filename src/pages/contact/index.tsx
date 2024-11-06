import {Stack} from '@mui/material';
import Head from 'next/head';
import {Layout} from '~/shared';
import Seo from '~/shared/components/seo';

ContactPage.Layout = Layout;

export default function ContactPage() {
  return (
    <>
      <Head>
        <Seo
          title='Contact Us - CAD Exchanger'
          description='Get in touch with CAD Exchanger for inquiries, support, or partnership opportunities. We are here to help!'
        />
      </Head>
      <Stack flex={'1 0 auto'}>Contact page</Stack>
    </>
  );
}
