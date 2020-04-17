import React, { Component } from 'react';
import CartColumns from './CartColumns';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section className='cart-page'>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h2 className='text-center mt-5 font-weight-bold'>
                    Your Booked Service(s)
                  </h2>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
