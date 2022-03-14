import React from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis } from 'victory';
import { connect } from 'react-redux';
import { setProducts } from '../redux/products';

class DataViz extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
  }

  componentDidMount() {
    this.props.setProducts();
    this.loading = false;
  }

  render() {
    console.log(this.props.products);
    return this.loading ? (
      <h1>LOADING</h1>
    ) : (
      <VictoryChart domainPadding={20}>
        <VictoryAxis width={200} height={200} />
        <VictoryAxis dependentAxis width={200} height={200} />
        <VictoryBar data={this.props.products} x="name" y="quantity" />
      </VictoryChart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: () => dispatch(setProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataViz);
