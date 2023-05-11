import React from 'react';
import { useWatch, useFormContext } from 'react-hook-form';
import type { ComponentPropsWithoutRef } from 'react';
import type { FieldName } from './api';

type BaseProps<T extends React.ElementType> = {
  name: FieldName;
  label: React.ReactNode;
  type?: 'text' | 'email';
  as?: T;
};

type Props<T extends React.ElementType> = BaseProps<T> &
  Omit<ComponentPropsWithoutRef<'input'>, keyof BaseProps<T>>;

/** Renders a polymorphic component that manages the UI for a single form element. */
export const Input = <T extends React.ElementType = 'input'>({
  name,
  label,
  type = 'text',
  as,
  ...rest
}: Props<T>) => {
  // consume react-hook-form's methods from context
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // get error for this input
  const error = errors[name];
  // watch form input, to correctly position label
  const value = useWatch({ name });
  // create a custom id to sync label and input for a11y, based on the form input's name
  const id = `contact-${name}`;

  // base classes for the input element
  const className = `text-base py-3 px-4 bg-transparent border-2 outline-none focus:ring-2 focus:ring-grey-800 dark:focus:ring-white focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-grey-800 w-full peer focus:text-grey-900 dark:focus:text-white transition-all ${
    error
      ? 'border-pink-600 dark:border-pink-400 dark:shadow-primary'
      : 'border-neon-600 dark:border-neon-400 dark:shadow-blue'
  }`;

  // create JSX for the relevant input element, based on `as` prop
  const inputElement =
    as === 'textarea' ? (
      <textarea
        id={id}
        className={`${className} block w-full resize-y`}
        rows={5}
        {...register(name, { required: true })}
        aria-invalid={error ? 'true' : 'false'}
      ></textarea>
    ) : (
      <input
        id={id}
        {...rest}
        {...register(name, {
          required: true,
          ...(type === 'email'
            ? { pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/ }
            : {}),
        })}
        className={className}
        aria-invalid={error ? 'true' : 'false'}
      />
    );

  return (
    <div className="flex flex-col pb-4 relative z-0 h-auto">
      {inputElement}
      <label
        htmlFor={id}
        className={`text-lg font-semibold absolute left-2 top-3 transition-all motion-reduce:transition-none
         bg-grey-50 dark:bg-grey-800 px-2 ${
           !value
             ? 'peer-focus:text-grey-800 dark:peer-focus:text-white peer-focus:-translate-x-2 peer-focus:-translate-y-8 peer-focus:scale-90 peer-focus:z-0 -z-10'
             : 'text-grey-800 dark:text-white -translate-x-2 -translate-y-8 scale-90 z-0'
         }`}
      >
        {label}
      </label>
      {error && (
        <span
          className="italic text-pink-600 dark:text-pink-400 block absolute bottom-0 left-4 z-10 bg-grey-50 dark:bg-grey-800 px-2 transition-colors"
          role="alert"
        >
          {error.type === 'required'
            ? 'Required'
            : error.type === 'pattern'
            ? 'Invalid email'
            : ''}
        </span>
      )}
    </div>
  );
};
