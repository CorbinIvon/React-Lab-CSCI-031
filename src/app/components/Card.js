export default function Card({
  key = -1,
  title = 'Placeholder Title',
  contentShort = 'Placeholder Content',
  contentLong = 'Placeholder Content',
  coverImageUrl = '',
  timestamp = '2021-07-20T19:20:30.45+01:00',
  tags = ['placeholder', 'tag'],
}) {
  const hoverEffect =
    'px-2 py-2 rounded-lg mx-2 shadow-md hover:shadow-lg m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 max-w-sm max-h-sm cursor-pointer';
  const publishTime = timestamp ? (
    <span className="text-sm text-gray-700 bg-gray-100 p-1 px-2 m-1 rounded-sm">{timestamp}</span>
  ) : (
    ''
  );
  const tagsList = tags ? <div className="flex justify-center mt-4 flex-wrap"></div> : '';
  const cardKey = key ? 'CardKey' + key : 'CardKey';
  return (
    <>
      <div className={'CardComponent ' + hoverEffect} id={cardKey}>
        <div className="bg-white shadow-md rounded-lg px-10 py-6 text-center">
          <img src={coverImageUrl} alt={coverImageUrl} height={150} width={150} className="w-full" />
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-m font-bold text-gray-800">{contentShort}</p>
          <div className="flex justify-center mt-4 flex-wrap">
            {publishTime}
            {tagsList}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-90 hidden" id={cardKey}>
        <div className="absolute inset-0 lg:m-12 sm:m-12 p-4 bg-slate-700 rounded-2xl" id={cardKey}>
          <div className="relative inset-0 flex flex-col lg:flex-row sm:flex-row rounded-2xl">
            <div className="flex flex-col w-full lg:w-1/2 sm:w-1/2">
              <div className="flex flex-col justify-center items-center lg:items-start sm:items-start">
                <h1 className="text-5xl font-bold text-white mb-8">{title}</h1>
                <p className="text-xl font-semibold text-white mb-8">{contentShort}</p>
                <div className="flex flex-row justify-center lg:justify-start sm:justify-start">
                  <div className="flex flex-row items-center">
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-sm font-semibold text-white">{contentLong}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 sm:w-1/2">
              <img src={coverImageUrl} alt={coverImageUrl} className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
