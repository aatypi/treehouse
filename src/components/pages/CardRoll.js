import React from "react";

class Card extends React.Component {
    render(){
        return (
            <div className="card"> Perro</div>
            )
        }
}

export function CardRoll() {
  return (
    <section className="card-roll">
      <Card />
      <Card />
      <Card />
    </section>
  )
}