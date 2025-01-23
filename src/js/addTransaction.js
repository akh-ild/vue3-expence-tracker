import { ref } from 'vue';

export const addTransaction = () => {
  const transactionName = ref('');
  const transactionAmount = ref(0);
  const transactionType = ref('expense');

  const transactionList = ref([]);

  function addTransactionItem() {
    console.log(transactionName.value, transactionAmount.value, transactionType.value);
    if (transactionName.value === '' || transactionAmount.value === 0) {
      return;
    }
    transactionList.value.push({
      name: transactionName.value,
      amount: transactionAmount.value,
      type: transactionType.value,
    });
    resetFields();
  };

  function resetFields() {
    transactionName.value = '';
    transactionAmount.value = 0;
    transactionType.value = 'expense';
  };

  return {
    transactionName,
    transactionAmount,
    transactionType,
    transactionList,
    addTransactionItem,
  };
}
