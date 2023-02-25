import React, { useState } from 'react';
import { NavDialogButton } from './NavDialogButton';
import { NavDialogContent } from './NavDialogContent';

/**
 * Renders the mobile navigation dialog.
 *
 * Initially renders a button that controls the nav.
 *
 * When the button is pressed, renders a modal dialog as a React portal.
 */
export const NavDialog = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <>
      <NavDialogButton onClick={() => setDialogOpen(true)} />
      <NavDialogContent
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};
