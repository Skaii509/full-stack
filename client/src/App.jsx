import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TasksContext'
import { CalculatorDataProvider } from './context/IncomeContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import CalculatorPage from './pages/CalculatorPage'
import IncomeFormPage from './pages/IncomeFormPage'

import './styles/App.css'
import Navbar from './components/Navbar'

import ProtectedRoute from './ProtectedRoute'
import ExpenseFormPage from './pages/ExpenseFormPage'
import NewsPage from './pages/NewsPage'
import InteresPage from './pages/InteresPage'

function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path='/tasks' element={<TaskProvider><TasksPage /></TaskProvider>} />
              <Route path='/add-task' element={<TaskProvider><TaskFormPage /></TaskProvider>} />
              <Route path='/tasks/:id' element={<TaskProvider><TaskFormPage /></TaskProvider>} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/settings' element={<SettingsPage />} />
              <Route path='/calculator' element={<CalculatorDataProvider><CalculatorPage /></CalculatorDataProvider>} />
              <Route path='/calculator/add-income' element={<CalculatorDataProvider><IncomeFormPage /></CalculatorDataProvider>} />
              <Route path='/calculator/incomes/:id' element={<CalculatorDataProvider><IncomeFormPage /></CalculatorDataProvider>} />
              <Route path='/calculator/add-expense' element={<CalculatorDataProvider><ExpenseFormPage /></CalculatorDataProvider>} />
              <Route path='/calculator/expenses/:id' element={<CalculatorDataProvider><ExpenseFormPage /></CalculatorDataProvider>} />
              <Route path='/interes' element={<InteresPage />} />
              <Route path='/news' element={<NewsPage />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
