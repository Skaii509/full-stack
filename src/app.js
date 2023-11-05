import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

//ROUTES
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import incomeRoutes from './routes/incomes.routes.js'
import expenseRoutes from './routes/expenses.routes.js'

//CARGA LAS VARIABLES DE ENTORNO.
dotenv.config();

//ARRANCA APLICACION.
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.use('/api', incomeRoutes);
app.use('/api', expenseRoutes);

export default app;