
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import CategoryPieChart from './Chart/CategoryPieChart';
import MonthlyExpenseBarChart from './Chart/MonthlyBarChart';
import HomePage from './Components/HomePage';
import DashBoard from './Components/DashBoard';
import Header from './Components/Header';
import Signin from './User/Signin';
import Signup from './User/Signup';

function App() {

  return (
    <>
<BrowserRouter>
      <Header/>
      
         <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/expensesform' element={<ExpenseForm/>}/>
          <Route path="/expensesform/:id" element={<ExpenseForm />} />
          <Route path='/expenseslist' element={<ExpenseList/>} />
          <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
</BrowserRouter>
     
    </>
  )
}

export default App
