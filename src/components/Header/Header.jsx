import React from "react";
import style from './Header.module.css';

export function Header () {
    return(
        <div className={style.container}>
            <div>
                <text>Meus Contatos</text>
                <div>
                    <img/>
                    <img/>
                    <img/>
                </div>
            </div>

            <div>
                <img/>
                <input placeholder="Busque por um nome ou por dados de contato..."/>
            </div>
        </div>
    )
}