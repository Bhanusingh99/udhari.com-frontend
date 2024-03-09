import { Schema, Document, model } from "mongoose";

interface ITransaction {
  money: number;
  description?: string;
  transactionType: "CASH" | "CREDIT";
  createdAt?: Date;
}

interface ICustomerTransactionHistory extends Document {
  customerId: Schema.Types.ObjectId;
  totalTransaction: ITransaction[];
}

const CustomerTransactionHistorySchema = new Schema<ICustomerTransactionHistory>({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  totalTransaction: [
    {
      money: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      transactionType: {
        type: String,
        enum: ["CASH", "CREDIT"],
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export const CustomerHistory = model<ICustomerTransactionHistory>(
  "selected_customer_history",
  CustomerTransactionHistorySchema
);
