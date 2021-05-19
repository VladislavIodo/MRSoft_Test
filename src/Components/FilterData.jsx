import style from "./FilterData.module.css"
import {useEffect, useState} from "react";

export const FilterData = () => {

    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState('');
    const [checkboxValue, setCheckboxValue] = useState('i');

    const url = 'http://www.mrsoft.by/data.json';

    const inputDataValue = (event) => {
        const inputValue = event.target.value;

        setInputData(inputValue);
        checkboxValue === 'i' ? setInputData(inputValue.toLowerCase()) : setInputData(inputValue.toUpperCase());
    };

    const toggleButtonWordLength = () => {
        if (inputData.length >= 1 && !isNaN(inputData)) {
            const result = data.filter(word => word.length > inputData);

            if (checkboxValue === '') {
                const regExpUpperCase = new RegExp(/([A-Z])\w+/);
                const resultUpperCase = result.filter(item => regExpUpperCase.test(item));

                setData(resultUpperCase);
            } else if ((checkboxValue === 'i')) {
                setData(result);
            }

            alert('Данные приняты');
        } else {
            if (!inputData.length || isNaN(inputData)) {
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
        fetch(`https://cors-anywhere.herokuapp.com/${url}`)
            .then(response => response.json())
            .then(data => {
                return setData(data.data);
            })
        // .catch(er => {
        //     er.message;
        //     return [];
        // });
    }, [inputData, checkboxValue]);

    return (
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
                        {/*<label className="active" htmlFor="text-data">Введите данные</label>*/}
                        <input type="checkbox"
                               onChange={toggleCheckbox}
                        />
                        <span>чувствительность регистра</span>
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
            <div className={style.containerData}>
                <h4>Результат:</h4>

                <div className="card grey lighten-2">
                    <div className="card-content">
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
                    </div>
                </div>
            </div>

        </div>
    )
}