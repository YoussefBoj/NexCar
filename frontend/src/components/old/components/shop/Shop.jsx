import React from 'react';
import { Card, CardBody } from 'reactstrap';
import TwoColumn from '../ui/TwoColumn';
import ShopListing from './ShopListing';
import EcoSidebar from './EcoSidebar';

const Shop = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn rightContent={<ShopListing />} leftContent={<EcoSidebar />} />
      </CardBody>
    </Card>
  );
};

export default Shop;
