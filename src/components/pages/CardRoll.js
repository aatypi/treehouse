import React from "react";

class Card extends React.Component {
    render(){
        return (
            <div> Perro</div>
            )
        }
}

export function CardRoll() {
  return (
    <section className="max-width">
      <Card />
      <Card />
      <Card />
    </section>
  )
}