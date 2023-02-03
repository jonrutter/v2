export type FormDataType = {
  'your-name': string;
  'your-email': string;
  'your-subject': string;
  'your-message': string;
};

export type FieldName = keyof FormDataType;

export const defaultValues: FormDataType = {
  'your-name': '',
  'your-email': '',
  'your-subject': '',
  'your-message': '',
};

// contact form api endpoint
export const ENDPOINT =
  'https://www.admin.jonrutter.io/wp-json/contact-form-7/v1/contact-forms/7/feedback';

export const sendMessage = (formData: FormData) => {
  return new Promise((resolve, reject) => {
    fetch(ENDPOINT, { method: 'POST', body: formData })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Response status ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (data.status === 'validation_failed')
          throw new Error('Form validation failed');
        resolve(data);
      })
      .catch(() => {
        reject(
          'Sorry! There was an error sending your message. Please try again.'
        );
      });
  });
};
