

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniNews from "./MiniNews";

const LeftSideNav = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div className="space-y-4">
      <h2 className='text-xl'>All Category</h2>
      <h2 className='text-center border-none rounded-md bg-base-200 p-4 text-black text-lg m-4'>
        National News
      </h2>
      {
                categories?.map(category => <Link 
                    className="block ml-4 text-xl font-semibold mb-12" 
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</Link>)
            }
            <MiniNews></MiniNews>
    </div>
  );
};

export default LeftSideNav;
