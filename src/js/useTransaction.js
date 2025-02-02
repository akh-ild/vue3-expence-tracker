import { onMounted, ref } from 'vue';

const transactionName = ref('');
const transactionAmount = ref(0);
const transactionType = ref('expense');

const transactions = ref({
  list: [],
});

export const useTransaction = () => {
  onMounted(() => {
    // transactions.value.list = JSON.parse(localStorage.getItem("transactions")) || [];
  });

  function pushTransaction() {
    if (transactionName.value === '' || transactionAmount.value === 0) {
      return;
    }
    transactions.value.list.push(
      {
        title: transactionName.value,
        num: parseInt(transactionAmount.value),
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
  };

  return {
    transactionName,
    transactionAmount,
    transactionType,
    transactions,
    pushTransaction,
  };
}
