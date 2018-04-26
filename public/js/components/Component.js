/**
 * Every component extends from here. It allow us to set an id to every one of them.
 */
export default class Component {
    constructor(props) {
      if (props) this._id = props; 
      else this._id = ++document.nextId;
    }
}