/*jshint esversion: 6 */

class ShoppingListItem {
  constructor(name, description, is_done ){
    this.name = name;
    this.description = description;
    this.is_done = is_done;
  }
  check(){
    this.is_done = true;
  }
  uncheck(){
    this.is_done = false;
  }

  render(i){
    // console.log("render");
    // var list = document.createElement('li');
    // list.className = "completed_${ this.is_done }";

    // var listItem = document.createElement('span');
    // listItem.innerHTML = this.name;
    // list.appendChild(listItem);

    // var listDescrip = document.createElement('span');
    // listDescrip.innerHTML = this.description;
    // list.appendChild(listDescrip);

    // console.log(list);
    // return list;
    // var checkbox = document.createElement("INPUT");
    // checkbox.setAttribute("type", "checkbox");

    // how to reference function in app.js?? for on click...
    return `<li id ="${i}" class = "completed_${this.is_done}"><input type = "checkbox" class = "checkbox" ${this.is_done ? 'checked' : ''} > <span>${this.name} : </span>
      <span>${this.description}</span>
    </li>`;


  }

}

console.log( 'ShoppingListItem connected' );




