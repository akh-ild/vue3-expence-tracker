import { ref } from 'vue';

export const useTransaction = () => {
  const transactionName = ref('test');
  const transactionAmount = ref(200);
  const transactionType = ref('expense');

  const transactionList = ref([])

  const pushTransaction = () => {
    if (transactionName.value === '' || transactionAmount.value === 0) {
      return;
    }
    transactionList.value.push(
      {
        title: transactionName.value,
        num: transactionAmount.value,
        type: transactionType.value,
      }
    );
    transactionList.value.push(
      {
        title: 'book',
        num: 100,
        type: 'income',
      }
    );
    transactionList.value.push(
      {
        title: 'car',
        num: 500,
        type: 'expense',
      }
    );
    console.log(transactionList.value);
    resetFields();
  };

  pushTransaction();

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
    pushTransaction,
  };
}
