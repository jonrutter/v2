import React, { ComponentPropsWithoutRef } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { FieldName, FormDataType } from './api';

type BaseProps<T extends React.ElementType> = {
  register: UseFormRegister<FormDataType>;
  name: FieldName;
  label: React.ReactNode;
  error?: FieldError;
  type?: 'text' | 'email';
  as?: T;
};

type Props<T extends React.ElementType> = BaseProps<T> &
  Omit<ComponentPropsWithoutRef<'input'>, keyof BaseProps<T>>;

/** Renders a polymorphic component that handles the UI for a single form element. */
export const Input = <T extends React.ElementType = 'input'>({
  register,
  name,
  label,
  error,
  type = 'text',
  as,
  ...rest
}: Props<T>) => {
  const id = `contact-${name}`;

  const className = `text-base py-3 px-4 bg-transparent border-2 outline-none focus:ring-2 focus:ring-indigo-900 dark:focus:ring-white focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-indigo-900 w-full ${
    error
      ? 'border-pink-600 dark:border-pink-400'
      : 'border-neon-600 dark:border-neon-400 '
  }`;

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
    <div className="flex flex-col pb-4">
      <label htmlFor={id} className="text-lg font-semibold mb-1">
        {label}
      </label>
      {inputElement}
      {error && (
        <span
          className="italic text-pink-600 dark:text-pink-400 block absolute bottom-0 left-4 z-10 bg-indigo-50 dark:bg-indigo-900 px-2 transition-colors"
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
