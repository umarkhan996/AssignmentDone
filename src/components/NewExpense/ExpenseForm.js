import React, { useState } from "react";

import "./ExpenseForm.css";
const ExxpenseFrom = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            Amount: enteredAmount,
            date: new Date(enteredDate),
        };

        // console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    return ( <
        form onSubmit = { submitHandler } >
        <
        div className = "new-expense__controls" >
        <
        div className = "new-exepnse__controls" >
        <
        label > Title < /label>{" "} <
        input type = "text"
        value = { enteredTitle }
        onChange = { titleChangeHandler }
        />{" "} < /
        div > { " " } <
        div className = "new-exepnse__controls" >
        <
        label > Amount < /label>{" "} <
        input type = "number"
        min = "0.01"
        step = "0.01"
        value = { enteredAmount }
        onChange = { amountChangeHandler }
        />{" "} < /
        div > { " " } <
        div className = "new-exepnse__controls" >
        <
        label > Date < /label>{" "} <
        input type = "date"
        min = "2018-01-01"
        max = "2032-01-01"
        value = { enteredDate }
        onChange = { dateChangeHandler }
        />{" "} < /
        div > { " " } <
        /div>

        <
        div className = "new-expense__actions" >
        <
        button type = "button"
        onClick = { props.onClick } > Cancle 0 < /button>{" "} <
        button type = "submit" > Add Expense 0 < /button>{" "} < /
        div > <
        /form>
    );
};
export default ExxpenseFrom;