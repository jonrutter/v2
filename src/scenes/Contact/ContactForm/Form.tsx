import React from 'react';
import { Button } from '@/components/Button';
import { Spinner } from '@/components/Spinner';
import type { FormDataType } from './api';
import { m } from 'framer-motion';
import { useAnimations } from './useAnimations';
import { Input } from './Input';
import { useFormContext } from 'react-hook-form';

type Props = {
  onSubmit: (data: FormDataType) => void;
  sent: boolean;
  loading: boolean;
  error: string;
};

/** Handles rendering the form UI. */
export const Form: React.FC<Props> = ({ onSubmit, sent, loading, error }) => {
  const { handleSubmit } = useFormContext<FormDataType>();
  const { container, fadeUp } = useAnimations();

  if (sent) {
    return (
      <m.div variants={container} initial="hidden" animate="visible">
        <m.h2
          variants={fadeUp}
          className="font-serif font-semibold text-2xl mb-4 text-grey-800 dark:text-white transition-colors"
        >
          Message sent
        </m.h2>
        <m.div variants={fadeUp}>
          <p className="text-lg">
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
      className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 mt-7 text-grey-600 dark:text-grey-300"
    >
      <div className="col-span-1">
        <Input label="Name" name="your-name" />
      </div>
      <div className="col-span-1">
        <Input label="Email" name="your-email" type="email" />
      </div>
      <div className="col-span-full">
        <Input label="Subject" name="your-subject" />
      </div>
      <div className="col-span-full">
        <Input label="Message" name="your-message" as="textarea" />
      </div>
      <div className="col-span-full">
        {loading ? (
          <div className="flex max-w-[200px] justify-center">
            <Spinner label="Sending" />
          </div>
        ) : (
          <Button variant="primary" type="submit">
            Send message
          </Button>
        )}
      </div>
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
