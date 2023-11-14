export default function Card({
  title = 'Placeholder Title',
  content = 'Placeholder Content',
  img = 'https://via.placeholder.com/150',
  url = 'https://placeholder.com',
  timestamp = '2021-07-20T19:20:30.45+01:00',
  tags = ['placeholder', 'tag'],
}) {
  const hoverEffect =
    'px-2 py-2 rounded-lg mx-2 shadow-md hover:shadow-lg m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 max-w-sm max-h-sm';
  const publishTime = timestamp ? (
    <span className="text-sm text-gray-700 bg-gray-100 p-1 px-2 m-1 rounded-sm">{timestamp}</span>
  ) : (
    ''
  );
  const tagsList = tags ? (
    <div className="flex justify-center mt-4 flex-wrap">
      {tags.map((tag) => (
        <span key={tag} className="text-sm text-gray-700 bg-gray-300 p-1 px-2 m-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  ) : (
    ''
  );
  return (
    <>
      <a href={url} className={hoverEffect}>
        <div className="bg-white shadow-md rounded-lg px-10 py-6 text-center">
          <img src={img} alt={img} className="w-full" />
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-m font-bold text-gray-800">{content}</p>
          <div className="flex justify-center mt-4 flex-wrap">
            {publishTime}
            {tagsList}
          </div>
        </div>
      </a>
    </>
  );
}
