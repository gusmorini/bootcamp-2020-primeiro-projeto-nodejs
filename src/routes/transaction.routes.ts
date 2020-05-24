import { Router } from 'express';

// import Transactions from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

// testes

// const transactions: Transactions[] = [];

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all();
    return response.json(transactions);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const transaction = transactionsRepository.create(title, value, type);

    // transactions.push(transaction);

    return response.json(transaction);

    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
