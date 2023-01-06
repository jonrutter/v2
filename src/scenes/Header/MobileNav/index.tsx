import React, { useState } from 'react';
import { MobileNavButton } from './MobileNavButton';
import { MobileNavDialog } from './MobileNavDialog';

/**
 * Renders the mobile navigation dialog.
 *
 * Initially renders a button that controls the nav.
 *
 * When the button is pressed, renders a modal dialog as a React portal.
 */
export const MobileNav = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <>
      <MobileNavButton onClick={() => setDialogOpen(true)} />
      <MobileNavDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
};
