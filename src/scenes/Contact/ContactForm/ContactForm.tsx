import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { defaultValues, sendMessage } from './api';
import type { FormDataType } from './api';
import { Form } from './Form';

/** Handles form logic. */
export const ContactForm = () => {
  const methods = useForm({ defaultValues, mode: 'onBlur' });
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit = (data: FormDataType) => {
    if (loading || sent) return;
    setLoading(true);
    let formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    sendMessage(formData)
      .then(() => {
        setSent(true);
        setError('');
        setLoading(false);
      })
      .catch((message: string) => {
        setSent(false);
        setError(message);
        setLoading(false);
      });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit} sent={sent} loading={loading} error={error} />
    </FormProvider>
  );
};
