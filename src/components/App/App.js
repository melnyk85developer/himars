import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeAppContent } from 'store/appContentReducer';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/reduxStore';
import AppContent from '../AppContent';
import './index.scss';

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  connect(mapStateToProps, {initializeAppContent}))(AppContent);

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
}
export default App;
