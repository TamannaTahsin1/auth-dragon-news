

import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import Navbar from "../../Shared/Navbar/Navbar";

const News = () => {
    const news = useLoaderData();
    console.log(news)
    const { title, image_url, details } = news;
//   const {id} = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='col-span-3'>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img
                src={image_url}
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{title}</h2>
              <p>{details}</p>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
