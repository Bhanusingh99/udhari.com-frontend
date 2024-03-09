import { Schema, Document, model } from "mongoose";

interface ICustomerReport extends Document {
  name: string;
  totalCustomerTransactions: Schema.Types.ObjectId[];
}

const customerReportSchema = new Schema<ICustomerReport>(
  {
    name: {
      type: String,
      default: "Total customer transactions",
    },
    totalCustomerTransactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Customer",
      },
    ],
  },
  { timestamps: true }
);

export const TotalCustomerTransaction = model<ICustomerReport>(
  "CustomerReport",
  customerReportSchema
);
