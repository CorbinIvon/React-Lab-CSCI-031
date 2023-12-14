import InsertData from '../server/InsertData';

export default function BlogForm() {
  return (
    <div className="flex justify-center">
      <form
        action={InsertData}
        className="flex flex-col items-center bg-gradient-to-t from-slate-800 to-slate-950 rounded-3xl w-1/2 border my-6 p-4 border-slate-800"
      >
        <label className="text-2xl font-bold text-center text-gray-500">Title</label>
        <input className="rounded-lg p-1 w-1/2" name="title" id="title"></input>
        <label className="text-2xl font-bold text-center text-gray-500">Short Desc.</label>
        <input className="rounded-lg p-1 w-1/2" name="shortDescription" id="shortDescription"></input>
        <label className="text-2xl font-bold text-center text-gray-500">Long Desc.</label>
        <textarea className="rounded-lg p-1 w-1/2" name="longDescription" id="longDescription"></textarea>
        <label className="text-2xl font-bold text-center text-gray-500">Image URL</label>
        <input className="rounded-lg p-1 w-1/2" name="coverImageUrl" id="coverImageUrl"></input>
        <button className="rounded-lg p-1 w-1/2 mt-5 py-5 bg-slate-900 text-gray-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
