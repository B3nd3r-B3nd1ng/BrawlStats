
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const BurgerButton = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <div> <Hamburger toggled={isOpen} toggle={setOpen} /></div>
  )
}

export default BurgerButton