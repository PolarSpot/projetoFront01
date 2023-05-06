import React from "react";
import style from './Contatos.module.css';
import { Header } from '../Header/Header'

export function Contatos ({avatar, name, phone}) {
    return(
        <div className={style.container}>
          <Header/>
          <div className={style.card}>
            <div className={style.cadastro}>
              <img  className={style.avatar} src={avatar} alt="Avatar"/>
              <div className={style.info}>
                <p className={style.nome}>{name}</p>
                <p className={style.descricao}>{phone}</p>
              </div>
            </div>
          </div>
        </div>
    )
}
