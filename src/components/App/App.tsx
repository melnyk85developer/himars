import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeAppContent } from '../../store/appContentReducer';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { AppStateType } from '../../store/reduxStore';
import AppContent from '../AppContent';
import './index.scss';

export type MapPropsType = ReturnType<typeof mapStateToProps>
export type DispatchPropsType = {
  initializeAppContent: () => void
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})
export const AppContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {initializeAppContent}))(AppContent);

const App: React.FC  = () => {
  return (
    <HashRouter>
    {/* <BrowserRouter store={store}> */}
      <Provider store={store}>
        <AppContainer />
      </Provider>
    {/* </BrowserRouter> */}
    </HashRouter>
  );
}
export default App;
