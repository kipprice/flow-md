import React from 'react';
import { App } from './App';
import { store } from './models';
import { Provider } from 'react-redux';
import { Styles } from './helpers/styles';
import { ComponentConstructors } from './helpers/componentConstructors';
import { Options } from './models/options';

// allow usage of the components
export * from './components';

export type Option = 'upload' | 'flow' | 'cyoa' | 'completionist' | 'sidebar'; // | 'author';

export type FlowMDProps = {
  styles?: Styles;
  componentFactory?: ComponentConstructors;
  fileToLoad?: string;
  onSave?: (file: File) => void;
  enabledOptions: Option[];
  defaultOptions?: Options;
}

export const FlowMD: React.FC<FlowMDProps> = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App {...props} />
      </Provider>
    </React.StrictMode>
  )
}
