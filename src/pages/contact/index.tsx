import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import {useState} from 'react';
import {useForm, type SubmitHandler} from 'react-hook-form';
import {Layout} from '~/shared';
import {ROUTES} from '~/shared/constants';

ContactPage.Layout = Layout;

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      const response = await submitContactForm(data);
      console.log(response);

      setSuccessMessage(response.message);
    } catch (error) {
      alert('There was an error submitting your form. Please try again later.');
    }
  };

  if (successMessage) {
    return (
      <Stack alignItems='center' m={'auto'} gap={4}>
        <Typography variant='h5'>{successMessage}</Typography>
        <Button LinkComponent={Link} href={ROUTES.HOME} variant='contained'>
          home
        </Button>
      </Stack>
    );
  }

  return (
    <main>
      <Head>
        <title>CAD Ex. Contact us</title>
      </Head>
      <Stack
        height={1}
        px={{xs: 2, md: 4}}
        gap={{xs: 1, md: 5}}
        maxWidth={'xl'}
        m='auto'
        alignItems='center'
      >
        <Typography component={'h1'} variant='h3' fontWeight={600}>
          Contact page
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          p={3}
          border='1px solid grey'
          borderRadius={2}
          width='100%'
          maxWidth={400}
          bgcolor='#f9f9f9'
        >
          <Stack spacing={2}>
            <Typography component='label' variant='body1' htmlFor='name'>
              Name
            </Typography>
            <TextField
              {...register('name', validationRules.name)}
              fullWidth
              label='Name'
              id='name'
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <Typography component='label' variant='body1' htmlFor='email'>
              Email
            </Typography>
            <TextField
              {...register('email', validationRules.email)}
              fullWidth
              label='Email'
              id='email'
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <Typography component='label' variant='body1' htmlFor='message'>
              Message
            </Typography>
            <TextField
              {...register('message', validationRules.message)}
              fullWidth
              label='Message'
              id='message'
              multiline
              rows={4}
              error={!!errors.message}
              helperText={errors.message?.message}
            />

            <Button type='submit' variant='contained' size='large' fullWidth>
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </main>
  );
}

const submitContactForm = async (formData: {name: string; email: string; message: string}) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

const validationRules = {
  name: {required: 'Name is required'},
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Invalid email address',
    },
  },
  message: {required: 'Message is required'},
};
