import React from 'react';
import { connect } from 'react-redux';
import { setProducts } from '../redux/products';
import { updateProduct } from '../redux/singleProduct';
import PropTypes from 'prop-types';
import styles from './AllProducts.module.css';
import Table from 'react-bootstrap/Table';
// import Item from '../server/database/item';

export async function getServerSideProps({ params }) {
  console.log(params);
}

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false,
    };
    this.loading = true;
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  sortById(products) {
    const sortedItems = products.sort((first, second) => first.id - second.id);
    return sortedItems;
  }

  changeQuantity(newProduct) {
    this.props.updateProduct(newProduct);
  }

  componentDidMount() {
    this.props.getProducts();
    this.loading = false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        updated: true,
      });
    }
  }

  render() {
    const products = this.sortById(this.props.products);
    return this.loading ? (
      <h1>LOADING</h1>
    ) : (
      <div className={styles.container}>
        <h3>Products</h3>
        <div className={styles.table}>
          <Table striped border="true" hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Product</th>
                <th>Category</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>
                      <input
                        className="change-quantity"
                        type="number"
                        value={product.quantity}
                        onChange={(event) =>
                          this.changeQuantity({
                            id: product.id,
                            name: product.name,
                            category: product.category,
                            quantity: event.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

AllProducts.propTypes = {
  getProducts: PropTypes.func,
  updateProduct: PropTypes.func,
  products: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(setProducts()),
    updateProduct: (product) => dispatch(updateProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
