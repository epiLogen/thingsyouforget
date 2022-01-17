import { Admin, Resource } from 'react-admin';
import authProvider from './providers/AuthProvider';
import dataProvider from './providers/DataProvider';
import QuoteList from './components/QuoteList';
import QuoteCreate from './components/QuoteCreate';
import QuoteEdit from './components/QuoteEdit';



function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name='quotes' list={QuoteList} create={QuoteCreate} edit={QuoteEdit}/>
    </Admin>
  );
}

export default App;
