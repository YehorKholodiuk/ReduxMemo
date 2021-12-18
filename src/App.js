import React from 'react'
import './App.css';


function App() {
    return (
        <div className="App">
            <h1> Подключение Redux к приложению ( connect Redux with the App)</h1>
            <hr/>
            1. Подключить пакеты ( connect the following packages): <br/>
            npm i redux <br/>
            npm i redux-devtools-extension <br/>
            npm i react-redux <br/>
            <hr/>
            2. Файл index. js -
            <br/> обернуть App/ в Provider ( wrap an App into Provider),
            <br/> добавить store ( add a store )
            <br/> импортировать Provider из react-reduce ( import Provider from react-reduce).
            <hr/>
            3. создать папку redux ( make a redux-folder)
            <br/> создать в ней файлы store. js и reducer. js ( make store.js and reducer.js in redux folder)
            <hr/>
            4. в файле reducer ( inside reducer.js)
            <br/> создать переменную initialState (массив данных) ( make a variable initialState ( array of data)
            <br/> создать функцию, передать в нее 2 аргумента: "состояние" и "действие" ( make a function, transport
            into that function  argument 'state' and argument 'action')
            <br/> первый аргумент по умолчанию сделать равным initialState ( make the first argument equal initialState by default)
            <br/> экспортировать функцию по умолчанию ( export function by default)
            <hr/>
            5. в файле store ( inside store.js)
            <br/> создать переменную store ( make a variable store)
            <br/> сделать ее равной функции createStore (make that variable equal createStore function , which you have to import redux),
            <br/> аргументы назначить функции: kanban и composeWithDevTools (assign arguments functions)
            <br/> (аргументы проимпортировать из файла reducer и redux-devtools-extension) ( import arguments from reducer.js and redux-devtools-extension)
            <br/> аргументом для последней назначить (вызвать с ()) функцию applyMiddleware () ( assign the applyMiddleware function as an argument for the redux-devtools-extension
            <br/> (проимпортировать из redux)
            <hr/>
            5. Все нюансы смотри в файлах index, store и reducer с расширением js.
            <hr/>
            Успехов!
        </div>
    );
}

export default App;