import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { UiContextProvider } from './context/UiContextProvider';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<HashRouter>
		<UiContextProvider>
			<App />
		</UiContextProvider>
	</HashRouter>
);
