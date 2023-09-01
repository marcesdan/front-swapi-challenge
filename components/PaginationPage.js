import React, { useMemo } from "react";
import { Text } from "@vercel/examples-ui";
import Pagination from "./Pagination";
import { useRouter } from "next/router";
import VehicleCard from "./VehicleCard";
import StarshipCard from "./StarshipCard";
import useExtendedItems from "../hooks/useExtendedIItems";
import {orderBy} from 'lodash-es'

const PaginationPage = ({ currentPage, totalProducts, perPage, products }) => {
  const { asPath } = useRouter();
  const base = asPath.split("/")[1];
  const extendedItems = useExtendedItems(products, base);
  const sortedItems = useMemo(() => orderBy(extendedItems, 'units', 'desc'), [extendedItems])
  const Card = {
    vehicles: VehicleCard,
    starships: StarshipCard,
  }[base];
  return (
    <div>
      <Text variant="h1" className="capitalize text-center">{base}</Text>
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/${base}/${page}`}
      />
      <div className="grid grid-cols-3 gap-8">
        {sortedItems.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PaginationPage;
