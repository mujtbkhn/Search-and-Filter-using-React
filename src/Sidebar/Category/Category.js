import Input from '../../Components/Input';
import './Category.css'; 

function Category({handleChange}) {
  return (
    <div>

    <h2 className='sidebar-title'>Category</h2>
    <div>
    <label className='sidebar-label-container' >
      <input onChange={handleChange} type='radio' name= "test1" value=""/>
      <span className='checkmark'></span>
    </label>

    <Input handleChange={handleChange}
    value = "sneakers"
    title = "Sneakers"
    name = "test1"
    />
    <Input handleChange={handleChange}
    value = "flats"
    title = "Flats"
    name = "test1"
    />
    <Input handleChange={handleChange}
    value = "sandals"
    title = "Sandals"
    name = "test1"
    />
    <Input handleChange={handleChange}
    value = "heels"
    title = "Heels"
    name = "test1"
    />
    </div>
    </div>
  )
}

export default Category;