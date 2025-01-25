import { computed } from 'vue'
import { useTransaction } from '@/js/useTransaction';

export const useCounter = () => {

  const { transactionList } = useTransaction();

  const incomeSum = computed(() => {
    return transactionList.value.filter(transaction => transaction.type === 'income').reduce((sum, transaction) => sum + transaction.num, 0)
  });

  const expenseSum = computed(() => {
    return transactionList.value.filter(transaction => transaction.type === 'expense').reduce((sum, transaction) => sum + transaction.num, 0)
  });

  return {
    incomeSum,
    expenseSum,
  };
}
