import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import * as catActions from '../../actions/catActions';

class CatPage extends React.Component {  
    render() {  
        const cats = this.props.cats;
        return (
          <div className="col-md-12">
            <h1>Cats</h1>
            <div className="col-md-4">
              <CatList cats={cats} />
            </div>
            <div className="col-md-8">
              {this.props.children}
            </div>
          </div>
        );
      }
}


CatPage.propTypes = {
    cats: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {  
    let cat = {name: '', breed: '', weight: '', temperament: '', hobby_ids: []};
    const catId = ownProps.params.id;
    if (state.cats.length > 0) {
      cat = Object.assign({}, state.cats.find(cat => cat.id  id)
    }
    return {cat: cat};
  }

// connect function subscribes the container component to the store
export default connect(mapStateToProps)(CatPage);  