export default function pageTitle({ Title, BannerUrl, slug }) {
  return BannerUrl ? (
    <>
      <div
        className="bg-cover bg-center h-64 flex justify-center place-items-center flex-col"
        style={{ backgroundImage: `url(${BannerUrl})` }}
      >
        <h1 className="text-5xl bg-gray-800/[0.5] rounded-md px-4 py-2">{Title}</h1>
        {slug && (
          <>
            <p className="text-lg rounded-md px-2 py-1">{slug}</p>
          </>
        )}
      </div>
      <hr />
    </>
  ) : (
    <p className="text-3xl">{Title}</p>
  );
}
