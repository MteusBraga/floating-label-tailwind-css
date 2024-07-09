<form className="flex flex-col border-[1px] rounded-xl p-5 gap-3 border-gray-300">
    <h1>Cadastrar Usuário</h1>

    <div className="border border-gray-400 rounded-md h-14 w-96 text-sm relative focus-within:border-orange-600">
        <input className="w-full h-full px-4 pt-3 outline-none bg-transparent text-gray-500 peer" type="text" autoComplete="off" placeholder="" />
        <label className="text-gray-400 absolute left-4 top-4 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="">Nome</label>
    </div>

    <div className="border border-gray-400 rounded-md h-14 w-96 text-sm relative focus-within:border-orange-600">
        <input className="w-full h-full px-4 pt-3 outline-none bg-transparent text-gray-500 peer" type="text" autoComplete="off" placeholder="" />
        <label className="text-gray-400 absolute left-4 top-4 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="">Nome de usuário</label>
    </div>

    <div className="border border-gray-400 rounded-md h-14 w-96 text-sm relative focus-within:border-orange-600" >
        <input className="w-full h-full px-4 pt-3 outline-none bg-transparent text-gray-500 peer" type={type ? 'password' : 'text'} autoComplete="off" placeholder="" />
        <label className="text-gray-400 absolute left-4 top-4 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="">Senha</label>
        <div className="absolute top-[1rem] right-3 hover:cursor-pointer" onClick={() => setType(!type)}>
            {type ? <IoMdEyeOff size={24} color="gray" /> : <IoMdEye color="gray" size={24} />}
        </div>
    </div>

    <button type="submit" className=" bg-orange-400 hover:bg-orange-600-700 text-white font-bold py-3 px-4 rounded-xl">Cadastrar Usuário </button>
</form>