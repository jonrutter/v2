import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';
import { sendMessage, defaultValues } from './api';
import type { FormDataType } from './api';
import { m } from 'framer-motion';
import { useAnimations } from './useAnimations';
import { Input } from './Input';

export const ContactForm = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { container, fadeUp, fadeIn } = useAnimations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, mode: 'onBlur' });

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

  if (sent) {
    return (
      <m.div variants={container} initial="hidden" animate="visible">
        <m.h3
          variants={fadeIn}
          className="font-serif font-semibold text-2xl mb-4"
        >
          Message sent
        </m.h3>
        <m.div variants={fadeIn}>
          <p className="opacity-60">
            Thanks for your message! I'll try to get back to you as soon as I
            can!
          </p>
        </m.div>
      </m.div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
    >
      <m.div variants={fadeUp} className="col-span-1">
        <Input
          label="Name"
          name="your-name"
          error={errors['your-name']}
          register={register}
        />
      </m.div>
      <m.div variants={fadeUp} className="col-span-1">
        <Input
          label="Email"
          name="your-email"
          error={errors['your-email']}
          register={register}
          type="email"
        />
      </m.div>
      <m.div variants={fadeUp} className="col-span-full">
        <Input
          label="Subject"
          name="your-subject"
          error={errors['your-subject']}
          register={register}
        />
      </m.div>
      <m.div variants={fadeUp} className="col-span-full">
        <Input
          label="Message"
          name="your-message"
          error={errors['your-message']}
          register={register}
          as="textarea"
        />
      </m.div>
      <m.div variants={fadeUp} className="col-span-full">
        {loading ? (
          <div className="flex max-w-[200px] justify-center">
            <Spinner label="Sending" />
          </div>
        ) : (
          <Button variant="primary" as="button" type="submit">
            Send message
          </Button>
        )}
      </m.div>
      {error && (
        <div className="col-span-full">
          <span role="alert" className="block" aria-label={error}>
            {error}
          </span>
        </div>
      )}
    </form>
  );
};
