const Clientsection = () => {
  return (  
    <section className="pt-24 py-20 px-[100px] text-center flex flex-col items-center">

      <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-red-200 bg-blue-50 text-blue-500 shadow-sm">
        <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
        <span className="text-xs font-medium">Trust & Results</span>
      </div>

      <h1 className="text-5xl font-bold px-5 py-5">
        Client Success <span className="text-blue-600">Stories</span>
      </h1>  

      <p className="text-xl px-5">
        Don't just take our word for it. Hear from the founders and directors who have <br />
        trusted us with their critical software infrastructure.
      </p>

      

    </section>
  )
}
  export default Clientsection;