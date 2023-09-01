import wretch from "wretch";

export default async function setVehicleUnits(id: string, units: number) {
  wretch(`${process.env.NEXT_PUBLIC_EXTENDED_SWAPI_BASE_URL}/vehicle/${id}`).put({ units });
}
