import React, { useState } from 'react';
import InputAdd from '../UI/InputAdd';
import ButtonAdd from '../UI/ButtonAdd';
import Income from './Income';
import Expense from './Expense';
import Modal from '../Modal/Modal';

function AddingInfo() {
  const [inputValue, setInputValue] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputType, setInputType] = useState('income');
  const [money, setMoney] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeInputValue = (event) => {
    const numericValue = event.target.value.replace(/[^0-9.]/g, '');
    setInputValue(numericValue);
  };

  const handleChangeInputTitle = (event) => {
    setInputTitle(event.target.value);
  };

  const handleChangeInputType = (event) => {
    setInputType(event.target.value);
  };

  const addNewInfo = (event) => {
    event.preventDefault();

    if (!inputTitle || !inputValue) {
      return;
    }

    const newInfo = {
      title: inputTitle,
      value: inputValue,
      type: inputType,
    };

    setMoney([...money, newInfo]);

    if (inputType === 'income') {
      setTotalIncome(totalIncome + parseFloat(inputValue));
    } else {
      setTotalExpense(totalExpense + parseFloat(inputValue));
    }

    setInputTitle('');
    setInputValue('');
    setInputType('income');
  };

  const handleShowStats = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      {isModalOpen && (
        <Modal totalIncome={totalIncome} totalExpense={totalExpense} onClose={handleCloseModal} />
      )}
      {!isModalOpen && (
        <div>
          <h1 className="text-center my-5 text-2xl">Accounting for expenses and income</h1>

          <div className="flex flex-col md:flex-row justify-center items-center my-5">
            <div className="mr-2 mb-2 md:mb-0">
              <InputAdd value={inputTitle} onChange={handleChangeInputTitle} />
            </div>
            <div className="mr-2 mb-2 md:mb-0">
              <InputAdd value={inputValue} onChange={handleChangeInputValue} type={inputType} />
            </div>
            <div className="mr-2 mb-2 md:mb-0">
              <select
                value={inputType}
                onChange={handleChangeInputType}
                className="w-full md:w-auto"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <ButtonAdd onClick={addNewInfo} title={'Add'} />
          </div>
          <div className="flex justify-center">
            <ButtonAdd title={'Show stats'} onClick={handleShowStats} />
          </div>
          <div className="text-center my-4 text-2xl">List of expenditures/receipts</div>
          {money.map((info, index) =>
            info.type === 'income' ? (
              <Income title={info.title} value={info.value} key={index} type={info.type} />
            ) : (
              <Expense title={info.title} value={info.value} key={index} type={info.type} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default AddingInfo;