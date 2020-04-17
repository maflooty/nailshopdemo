import React, { Component } from 'react';
import { productInfo } from '../../data';
import Product from './Product';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
  state = {
    products: productInfo
  };

  render() {
    return (
      <React.Fragment>
        <div className='productList-page py-5'>
          <div className='container '>
            <h2 className='text-center mx-auto font-weight-bold '>
              Beauty Portfolio
            </h2>
            <div className='mx-auto heading-line'></div>
            <div className='row'>
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
