import './global.css';

import style from './App.module.css';

export function App() {
  return (
    <article className={style.container}>
      <div className={style.card}>
        <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=50" alt="Cover"/>
        <h1>cover</h1>
        <h1>avatar</h1>
        <h1>Descrição/Nome</h1>
        <h1>Stack</h1>
        </div>
    </article>
  )
}
