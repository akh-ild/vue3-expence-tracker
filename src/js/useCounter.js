import { computed } from 'vue'
import { useTransaction } from '@/js/useTransaction';

export const useCounter = () => {

  const { transactions } = useTransaction();

  const incomeSum = computed(() => {
    return transactions.value.list.filter(transaction => transaction.type === 'income').reduce((sum, transaction) => sum + transaction.num, 0)
  });

  const expenseSum = computed(() => {
    return transactions.value.list.filter(transaction => transaction.type === 'expense').reduce((sum, transaction) => sum + transaction.num, 0)
  });

  return {
    incomeSum,
    expenseSum,
  };
}
