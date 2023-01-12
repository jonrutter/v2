import React from 'react';

const injectTheme = () => {
  const root = document.documentElement;
  const colorTheme = 'dark';
  root.dataset.theme = colorTheme;
  root.classList.add('dark');
};

/** Renders a `<script>` tag with an IIFE to automatically add 'dark' className and data-theme attribute to the `<html>` element. */
export const InjectInitialDarkMode: React.FC = () => {
  const stringifiedFunction = injectTheme.toString();
  const iife = `;(${stringifiedFunction})();`;
  return <script dangerouslySetInnerHTML={{ __html: iife }} />;
};
