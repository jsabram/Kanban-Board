import { UiContextProvider } from './context/UiContextProvider';
import Nav from './components/layout/nav/Nav';
import Header from './components/layout/header/Header';

const App = () => {
	return (
		<UiContextProvider>
			<Nav />
			<Header />
		</UiContextProvider>
	);
};

export default App;
