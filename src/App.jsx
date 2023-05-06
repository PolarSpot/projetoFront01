import './global.css';
import style from './App.module.css';
import { CardPerson } from './components/CardPerson/CardPerson';
import { Contatos } from './components/Contatos/Contatos';

export function App() {
  const listStack = ["JavaScript", "HTML", "CSS", "TypeScript", "React"];

  return (
    <div className={style.container}>
      <CardPerson
        cover="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=50"
        avatar="https://github.com/PolarSpot.png"
        name="Thomas E Z de Almeida"
        office="Estudante"
        stacks={listStack}
      />

      <Contatos
        avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg"
        name="Marcus Stephens"
        phone="(489) 330-2385"
      />
    </div>

  )
}
