import { FaCalendarDay } from "react-icons/fa";

const MiniNews = () => {
  return (
    <div className='mt-10'>
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <img
            src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title mb-6'>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className='flex justify-between items-center'>
            <p>sports</p>
            <FaCalendarDay></FaCalendarDay>
            <p className='ml-4'> Jan 4, 2022</p>
          </div>
        </div>
      </div>
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <img
            src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            alt=''
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title mb-6'>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className='flex justify-between items-center'>
            <p>sports</p>
            <FaCalendarDay></FaCalendarDay>
            <p className='ml-4'> Jan 4, 2022</p>
          </div>
        </div>
      </div>
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <img
            src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title mb-6'>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className='flex justify-between items-center'>
            <p>sports</p>
            <FaCalendarDay></FaCalendarDay>
            <p className='ml-4'> Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniNews;
