import { FC, useState, useCallback, useEffect } from 'react';
import { Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import CardItemImage from '../../images/activity/partner_image.png';
import useBreakpoint from 'use-breakpoint';
import SearchSection from '../../components/dashboard/shop/SearchSection';
import Products from '../../components/dashboard/shop/Products';

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const Wrapper = styled('div')`
  max-width: 674px;
`

const Shop = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  return (
    <Wrapper
      sx={[breakpoint === 'mobile' && {
        marginBottom: '70px'
      }]}
    >
      <SearchSection />
      <Products />
    </Wrapper>
  )
}

export default Shop;