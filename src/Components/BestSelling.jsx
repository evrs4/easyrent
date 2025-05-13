import { useEffect, useState } from "react";
import { supabase } from "../utils/SupaClient";

const BestSelling = () => {
    const [mobil, setMobil] = useState(null)

    useEffect(() => {
        async function fetchCar() {
          const { data, error } = await supabase.from("tablecar").select("*").limit(1).single();
          if (!error) setMobil(data);
        }
        fetchCar();
      }, []);

      if (!mobil) return <p>Loading...</p>;


  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={mobil.image}
          alt={mobil.model}
          className="w-1/3 object-contain rounded-lg bg-yellow-400"
        />
        <div className="p-8 w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800">Top Choices!</h2>
          <p className="text-gray-500 text-sm font-normal mt-2">{mobil.brand.toUpperCase()}</p>
          <h3 className="text-xl font-bold text-gray-900 mt-4">{mobil.model}</h3>
          <p className="font-semibold mt-4">Top Features : </p>
          <p className="text-gray-600 mt-2">{mobil.features}</p>
          <p className="font-semibold mt-4">Seat Capacity : </p>
          <p className="text-gray-600 mt-2">{mobil.capacity}</p>
          <p className="text-cyan-500 text-lg font-semibold mt-4">{mobil.price}</p>
          <button className="mt-4 px-4 py-2 text-white bg-yellow-400 rounded hover:bg-gray-800">
            Rent Now →
          </button>
        </div> 

      </div>
    </div>

  </>
    
  )
}

export default BestSelling



         