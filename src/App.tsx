import { UiContextProvider } from './context/UiContextProvider';
import Nav from './components/layout/nav/Nav';

const App = () => {
	return (
		<UiContextProvider>
			<Nav />
		</UiContextProvider>
	);
};

export default App;
