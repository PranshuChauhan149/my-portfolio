const BlogCard = ({ image, title, description }) => {
  return (
    <div className='w-[340px] h-auto rounded-xl overflow-hidden bg-[#1e1e1e] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(238,179,8,0.6)] shadow-md'>
      <img
        src={image}
        alt={title}
        className='w-full h-[180px] object-cover'
      />
      <div className='p-4 flex flex-col gap-2'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-sm text-gray-300 line-clamp-3'>{description}</p>
        <button className='mt-2 self-start px-4 py-1 text-sm bg-yellow-600 rounded-full hover:bg-yellow-500 transition-all'>
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
