export const FilterData = () => {
    return (
        <div className="container">
            <h1 className="center-align">Тестовое задание</h1>
            <div className="row">
                <div className="col s12">
                    <h4>Ввод данных</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="text-data" type="text" className="validate"
                                // onChange={inputDataValue} value={inputData}
                            />
                            <label className="active" htmlFor="text-data">Введите данные</label>
                        </div>
                        <div className="input-field col s6">
                            <label>
                                <input type="checkbox"
                                    // onChange={toggleCheckbox}
                                />
                                <span>Регистр</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <h4>Сортировка данных</h4>
                    <div className="row">
                        <div className="col">
                            <button className="waves-effect waves-light btn"
                                // onClick={toggleButtonWordLength}
                            >По длине слова</button>
                        </div>
                        <div className="col">
                            <button className="waves-effect waves-light btn"
                                // onClick={toggleButtonSubstring}
                            >По подстроке</button>
                        </div>
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