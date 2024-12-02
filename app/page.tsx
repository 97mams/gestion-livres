export default function Home() {
  return (
    <div className="flex gap-2 w-full items-center justify-between p-8">
      <div className=" text-zinc-800">
        <h1 className="text-blue-700 font-semibold uppercase text-4xl">Library</h1>
        <form action="" className="flex flex-col gap-2">
          <div>
            <label htmlFor="username">Pseudo</label>
            <input type="text" className="border border-zinc-900 rounded-md px-4 py-2" id="username" />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" className="border border-zinc-900 rounded-md px-4 py-2" id="password" />
          </div>
          <button className="border bg-blue-700 text-white rounded-md w-full px-4 py-2">
            Connecter
          </button>
        </form>
      </div>
      <div >
        <img src="/bg.jpg" className="w-full" alt="logo" />
      </div>
    </div>
  );
}
