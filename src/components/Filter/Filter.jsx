import { useDispatch, useSelector } from 'react-redux';
import {FormFilter, LabelFilter, InputFilter} from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
    // console.log('filterComponent', filterValue)  
  
    const setFilter = (e) => {
    // const {value} = e.target;
    // console.log('value', value)
    dispatch(changeFilter(e.target.value))
  };

  return (
    <FormFilter>
      <LabelFilter> Find contact:
      </LabelFilter>
      <InputFilter
          type="name"
          value={filterValue}
          onChange={setFilter}
          placeholder="Please enter a name or number to search"
        />
    </FormFilter>
  );
};

export default Filter;