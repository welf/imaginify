import { Document, Schema, model, models } from 'mongoose';

export interface ITransaction extends Document {
  stripeId: string;
  buyer: {
    _id: string;
    firstName?: string;
    lastName?: string;
  };
  amount: number;
  credits?: number;
  plan?: string;
  createdAt: Date;
}

const TransactionSchema = new Schema({
  stripeId: { type: String, required: true, unique: true },
  buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  credits: { type: Number },
  plan: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = models?.Transaction || model('Transaction', TransactionSchema);

export default Transaction;

