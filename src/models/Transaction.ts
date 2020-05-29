// import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('numeric')
  value: number;

  @Column()
  type: 'income' | 'outcome';

  // constructor({ title, value, type }: Omit<Transaction, 'id'>) {
  //   this.id = uuid();
  //   this.title = title;
  //   this.value = value;
  //   this.type = type;
  // }
}

export default Transaction;
