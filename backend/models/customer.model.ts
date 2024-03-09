import { Schema, Document, model } from "mongoose";

interface ICustomer extends Document {
  customerName: string;
  number?: number;
  description?: string;
  money: number;
  bgColor: string;
  transactionType: "CASH" | "CREDIT";
  createdAt?: Date;
}

const customerSchema = new Schema<ICustomer>(
  {
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
    },
    number: {
      type: Number,
    },
    description: {
      type: String,
    },
    money: {
      type: Number,
      required: [true, "Money is required"],
    },
    bgColor: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      enum: ["CASH", "CREDIT"],
      required: [true, "Transaction type is required"],
    },
  },
  { timestamps: true }
);

// Avoid using Date.now() directly in the schema; instead, use a default function
customerSchema.pre<ICustomer>("save", function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});

export const Customer = model<ICustomer>("Customer", customerSchema);
