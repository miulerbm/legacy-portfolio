import { ServiceData } from "@/types/types.d";

function Service(serviceData: ServiceData) {
  return (
    <div className="flex min-h-full flex-col desktop:w-1/4 m-4 mobile:w-3/4 p-2 rounded-md transition-colors hover:bg-slate-700 border">
      <img
        className="desktop:w-2/3 mobile:w-1/2 h-auto self-center p-14"
        src={serviceData.img}
        alt="transition"
      />
      <p className="text-xl font-bold">{serviceData.hl}</p>
      <p className="mt-3 text-lg">{serviceData.desc}</p>
    </div>
  );
}

export default Service;
