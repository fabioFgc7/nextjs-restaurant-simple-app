import { SearchIcon } from "@/icons/Icon";
import React from "react";
interface Props {
  searchValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const FormSearch = ({ onChange, searchValue }: Props) => {
  return (
    <div className=' flex justify-center '>
      <form>
        <div className='relative'>
          <SearchIcon className='absolute top-[50%] left-2 -translate-y-1/2' />
          <input
            type='text'
            onChange={onChange}
            placeholder='Search your food...'
            value={searchValue}
            className='bg-slate-950 px-10 py-2 rounded-lg outline-none '
          />
        </div>
      </form>
    </div>
  );
};

export default FormSearch;
