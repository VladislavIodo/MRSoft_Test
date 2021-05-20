import style from "./FilterData.module.css"
import {useEffect, useState} from "react";

export const FilterData = () => {
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState('');
    const [checkboxValue, setCheckboxValue] = useState('i');

    let textInput = inputData ? 'Данные введены' : '';

    const url = 'http://www.mrsoft.by/data.json';
    const corsUrl = 'https://cors-anywhere.herokuapp.com';


    const inputDataValue = (event) => {
        const inputValue = event.target.value;

        setInputData(inputValue);
        checkboxValue === 'i' ? setInputData(inputValue.toLowerCase()) : setInputData(inputValue.toUpperCase());
    };

    const toggleButtonWordLength = () => {

        if (inputData.length >= 1 && !Number.isNaN(inputData)) {
            const result = data.filter(word => word.length > inputData);

            if (checkboxValue === '') {
                const regExpUpperCase = new RegExp(/([A-Z])\w+/g);
                const resultUpperCase = result.filter(item => regExpUpperCase.test(item));

                setData(resultUpperCase);

            } else if ((checkboxValue === 'i')) {
                setData(result);
            }
        } else {
            if (!inputData.length || Number.isNaN(inputData)) {

                alert('Введите число');
            }
        }
    };

    const toggleButtonSubstring = () => {
        if (inputData.length >= 1 && isNaN(inputData)) {
            const regExp = new RegExp(inputData, `${checkboxValue}`);
            const searchResult = data.filter(word => regExp.test(word));

            setData(searchResult);
            alert('Данные приняты');
        } else {
            if (!isNaN(inputData)) {
                alert('Введите буквы');
            }
        }
    };

    const toggleCheckbox = () => {
        checkboxValue === 'i' ? setCheckboxValue('') : setCheckboxValue('i');
        checkboxValue === '' ? setInputData(inputData.toLowerCase()) : setInputData(inputData.toUpperCase());
    };

    useEffect(() => {
        fetch(`${corsUrl}/${url}`)
            .then(response => response.json())
            .then(
                (data) => {
                    setData(data.data);
                })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [
        // inputData, checkboxValue
    ]);


    return (
        <div>
            <div className={style.container}>
                <h1 className={style.h1}>Тестовое задание</h1>
                <div className={style.containerValue}>


                    <div className={style.inpChe}>
                        <h4>Ввод данных</h4>
                        <label>
                            <input id="text-data" type="text" className={style.input}
                                   placeholder="Введите слово или число"
                                   onChange={inputDataValue} value={inputData}
                            />
                            <span>{textInput}</span>
                            {/*<label className="active" htmlFor="text-data">Введите данные</label>*/}
                            <div>
                                <input type="checkbox"
                                       onChange={toggleCheckbox}
                                />
                                <span>чувствительность регистра</span>
                            </div>
                        </label>
                    </div>


                    <div className={style.sortData}>
                        <div>
                            <div>Сортировка данных</div>
                        </div>
                        <div>
                            <button
                                className={style.btnSort}
                                onClick={toggleButtonWordLength}
                            >По длине слов
                            </button>
                            <button className={style.btnSort}
                                    onClick={toggleButtonSubstring}
                            >По подстроке
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <h4>Результат:</h4>

                <div className={style.listData}>
                    <ol >
                        {
                            data.map((item) =>
                                <li key={item} className="flow-text">{item}</li>
                            )
                        }
                        {data.length === 0 &&
                        <div>
                            <p className="flow-text">Результат не найден :(</p>
                            <p className="flow-text">Попробуйте еще раз!</p>
                        </div>
                        }
                    </ol>
                </div>
            </div>


        </div>
    )
}