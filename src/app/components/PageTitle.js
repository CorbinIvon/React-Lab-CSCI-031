export default function pageTitle({ Title, BannerUrl }) {
  return BannerUrl ? (
    <>
      <div
        className="bg-cover bg-center h-64 flex justify-center place-items-center"
        style={{ backgroundImage: `url(${BannerUrl})` }}
      >
        <h1 className="text-5xl bg-gray-800/[0.5] rounded-md px-2 py-1">{Title}</h1>
      </div>
      <hr />
    </>
  ) : (
    <p className="text-3xl">{Title}</p>
  );
}
