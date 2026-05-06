function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">

      <div className="bg-white p-10 shadow-lg rounded-xl w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-5">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;   