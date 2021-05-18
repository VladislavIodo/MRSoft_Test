import style from "./FilterData.module.css"

export const FilterData = () => {
    return (
        <div className={style.container}>
            <h1>Тестовое задание</h1>
            <div>
                <div className={style.inpChe}>
                    <h4>Ввод данных</h4>
                    <label>
                        <input id="text-data" type="text" className={style.dataField}
                               placeholder="Введите данные"
                            // onChange={inputDataValue} value={inputData}
                        />
                        {/*<label className="active" htmlFor="text-data">Введите данные</label>*/}
                            <input type="checkbox"
                                // onChange={toggleCheckbox}
                            />
                            <span>Регистр</span>
                    </label>
                </div>
                <div className={style.sortData}>
                    <h4>Сортировка данных</h4>
                    <div className="row">
                            <button className={style.btnSort}
                                // onClick={toggleButtonWordLength}
                            >По длине слова
                            </button>
                            <button className={style.btnSort}
                                // onClick={toggleButtonSubstring}
                            >По подстроке
                            </button>
                    </div>
                </div>
                <div className="col s12">
                    <h4>Результат</h4>

                    {/*<div className="card grey lighten-2">*/}
                    {/*    <div className="card-content">*/}
                    {/*        {*/}
                    {/*            data.map((item) =>*/}
                    {/*                <li key={item} className="flow-text">{item}</li>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*        {data.length === 0 &&*/}
                    {/*        <div>*/}
                    {/*            <p className="flow-text">Результат не найден :(</p>*/}
                    {/*            <p className="flow-text">Попробуйте еще раз!</p>*/}
                    {/*        </div>*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}