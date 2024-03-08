interface Transaction {
    customerName: string;
    id: string;
    createdAt: string;
    sortingDate: string;
    money: number;
    description: string;
    transactionType: string;
}

export function filterAndSortTransactions(transactions: Transaction[], transactionType: string): Transaction[] {
    // Filter transactions based on transactionType
    const filteredTransactions = transactions.filter(transaction => transaction.transactionType === transactionType);

    // Sort filtered transactions by sortingDate
    const sortedTransactions = filteredTransactions.sort((a, b) =>
        new Date(b.sortingDate).getTime() - new Date(a.sortingDate).getTime()
    );

    return sortedTransactions;
}

