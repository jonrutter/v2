import React, { useState } from 'react';
import { OpenButton } from './OpenButton';
import { Drawer } from './Drawer';

type Props = {
  route: string;
};

/**
 * Renders the mobile navigation dialog.
 *
 * Initially renders a button that controls the nav.
 *
 * When the button is pressed, renders a modal dialog as a React portal.
 */
export const NavDrawer: React.FC<Props> = ({ route }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <>
      <OpenButton onClick={() => setDialogOpen(true)} />
      <Drawer
        open={dialogOpen}
        route={route}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};
