import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

// DTO

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  // private transactionsRepository: TransactionsRepository;

  // constructor(transactionsRepository: TransactionsRepository) {
  //   this.transactionsRepository = transactionsRepository;
  // }

  public async execute({ title, value, type }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const { total } = transactionsRepository.getBalance();

    if (type === 'outcome' && value > total) {
      throw Error('Your balance is insufficient');
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
