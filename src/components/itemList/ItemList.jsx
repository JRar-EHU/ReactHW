import { Component } from "react";

export default class ItemList extends Component {
  render() {
    const { itemsType, items } = this.props.items;
    return (
      <>
        <h1>{itemsType ? itemsType : <span>undefined</span>}</h1>
        <div>
          {items.map((item, index) => (
            <span className={"cell"} key={index}>
              {item}
            </span>
          ))}
        </div>
      </>
    );
  }
}
