import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Orders from './components/orders/Orders';
import OrderDetails from './components/orders/OrderDetails';
import OrdersState from './context/orders/ordersState';

import './index.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <OrdersState>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/orders' component={Orders}></Route>
          <Route exact path='/orders/:id' component={OrderDetails}></Route>
        </Switch>
      </Router>
    </OrdersState>
  );
}

export default App;
