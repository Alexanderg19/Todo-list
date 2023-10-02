import { faCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { Icon } from "./Icon";
import './TodoItem.css'

function TodoItem({text, completed}) {
    return (
      <li className='TodoItem'>
        <Icon className={`Icon Icon-check ${completed && "Icon-check--active"}`} icon={faCheck}/>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
        <Icon className='Icon Icon-delete' icon={faSquareXmark}/>
      </li>
    );
  }
  
  export { TodoItem }