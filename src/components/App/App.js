import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeAppContent } from 'store/appContentReducer';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/reduxStore';
import AppContent from '../AppContent';
import './index.scss';

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
const AppContainer = compose(
  connect(mapStateToProps, {initializeAppContent}))(AppContent);

const App = () => {
  return (
    <HashRouter>
    {/* <BrowserRouter> */}
      <Provider store={store}>
        <AppContainer />
      </Provider>
    {/* </BrowserRouter> */}
    </HashRouter>
  );
}
export default App;
