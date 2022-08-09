import React from 'react';
import hamburgerMenuLogo from '~/assets/hamburgerMenu.png';
import eye from '~/assets/eye.png';
import home from '~/assets/home.png';
import book from '~/assets/book.png';
import cat from '~/assets/cat.png';
import dog from '~/assets/dog.png';
import paw from '~/assets/paw.png';
import kirstenCodesSimplified from '~/assets/KirstenCodes_simplified.png';
import { BackButton } from '../../../../../Shared/Button/CustomButtons';
import {
  StyledHamburgerMenu,
  MenuLogo,
  MenuItemLogo,
  MenuItemSection,
  MenuMainItem,
  MenuSubItem,
  KirstenLogo,
} from './HamburgerMenu.style';

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  const toggleNav = () => setOpen(!open);

  return (
    <StyledHamburgerMenu role='navigation' open={open} onClick={toggleNav}>
      <BackButton
        aria-label={open ? 'Close menu' : 'Open menu'}
        onBack={toggleNav}
        style={{
          left: undefined,
          right: '1.5rem',
          top: '2rem',
          transform: `rotate(${open ? 360 : 180}deg)`,
        }}
      />
      <MenuLogo src={hamburgerMenuLogo} aria-label='Hamburger Menu' />
      <MenuItemSection>
        <MenuMainItem url='/'>
          Kirsten Codes Homepage
          <MenuItemLogo
            src={eye}
            style={{ height: '1.65rem', right: '0.85rem' }}
            aria-label=''
          />
        </MenuMainItem>
      </MenuItemSection>
      <MenuItemSection>
        <MenuMainItem external url='https://clinicaltrials.gov/'>
          Clinical Trials Homepage
          <MenuItemLogo src={home} aria-label='' />
        </MenuMainItem>
        <MenuSubItem external url='https://www.clinicaltrials.gov/api/gui/home'>
          AACT API Docs
          <MenuItemLogo src={book} aria-label='' />
        </MenuSubItem>
      </MenuItemSection>
      <MenuItemSection>
        <MenuMainItem
          external
          url='https://www.kaggle.com/datasets/crawford/cat-dataset'
        >
          Pictures of cats
          <MenuItemLogo src={cat} aria-label='' />
        </MenuMainItem>
        <MenuMainItem external url='https://dog.ceo/dog-api/'>
          Pictures of puppies
          <MenuItemLogo src={dog} aria-label='' />
        </MenuMainItem>
        <MenuMainItem
          external
          url='https://www.kaggle.com/datasets/alessiocorrado99/animals10'
        >
          Pictures of animals
          <MenuItemLogo src={paw} aria-label='' />
        </MenuMainItem>
      </MenuItemSection>
      <KirstenLogo src={kirstenCodesSimplified} />
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
