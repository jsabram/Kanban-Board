import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { UiContextProvider } from './context/UiContextProvider';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<UiContextProvider>
			<App />
		</UiContextProvider>
	</Provider>
);
