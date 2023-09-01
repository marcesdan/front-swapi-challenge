import { useCallback, useState } from "react";
import { debounce } from "lodash-es";
import setVehiclesUnits from "../lib/setVehiclesUnits";
import getIdFromUrl from "../utils/getIdFromUrl";

const VehicleCard = ({ name, model, manufacturer, units, url }: any) => {
  const [unitsValue, setUnitsValue] = useState('');
  const debouncedFn = (value: string) => {
    setVehiclesUnits(getIdFromUrl(url), +value)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleUnitsChange = useCallback(debounce(debouncedFn, 2000), []);
  return (
    <div className="bg-white shadow-lg rounded-lg flex">
      <div className="p-6 flex flex-col justify-between">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-700 mt-2">
            {model}, {manufacturer}
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="mb-2 flex items-center">
            <span className="mr-2">Units:</span>
            {units !== undefined && <input
              type="number"
              className="w-20 border rounded p-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              value={unitsValue || units}
              onChange={(e) => {
                const newValue = e.target.value;
                setUnitsValue(newValue);
                handleUnitsChange(newValue);
              }}
            />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
