const ProjectCard = ({ image,name }) => {
  return (
    <div className='w-[300px] h-[280px] rounded-xl overflow-hidden bg-[#1e1e1e] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(238,179,8,0.6)] shadow-md'>
      <img
        src={image}
        alt={name}
        className='w-full h-[200px] object-cover'
      />
      <div className='p-3 flex items-center justify-center'>
        <p className='text-lg font-semibold text-center'>{name}</p>
      </div>
    </div>
  );
};

export default ProjectCard;



