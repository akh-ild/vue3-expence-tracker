import { onMounted, ref } from 'vue';

export const useTransaction = () => {
  const transactionName = ref('test');
  const transactionAmount = ref(200);
  const transactionType = ref('expense');

  const transactions = ref({
    list: [],
  });
  const count = ref(0);

  onMounted(() => {
    transactions.value.list = JSON.parse(localStorage.getItem("transactions")) || [];
  });

  function pushTransaction() {
    count.value++;
    if (transactionName.value === '' || transactionAmount.value === 0) {
      return;
    }
    console.log('here');
    transactions.value.list.push(
      {
        title: transactionName.value,
        num: transactionAmount.value,
        type: transactionType.value,
      }
    );
    localStorage.setItem("transactions", JSON.stringify(transactions.value.list));
    console.log(transactions.value.list);
    resetFields();
    return transactions;
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
    transactions,
    pushTransaction,
    count,
  };
}
