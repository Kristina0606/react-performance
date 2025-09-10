import { useEffect, useState, type FC } from 'react';
import type { CountryDataTableProps } from '../types/interfaces';
import { useGetCountryByCodeQuery } from '../api/co2Api';

const CountryDataTable: FC<CountryDataTableProps> = ({ paramCountry }) => {
  const [indexArr, setindexArr] = useState<string[]>([]);
  const { data, isError } = useGetCountryByCodeQuery(paramCountry);
  const currentCountry = data;

  useEffect(() => {
    if (currentCountry) {
      setindexArr(Object.keys(currentCountry.data));
    }
  }, [currentCountry, data, paramCountry]);

  return (
    <>
      {isError ? (
        <div>Country data is not aviable now</div>
      ) : (
        <table className="border-collapse table-auto border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100 hover:bg-blue-200 duration-300">
              <th
                scope="col"
                className="text-left text-xs font-medium text-gray-500 uppercase px-20 py-3"
              >
                Year
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium text-gray-500 uppercase px-20 py-3"
              >
                Population
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium text-gray-500 uppercase px-20 py-3"
              >
                CO2
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium text-gray-500 uppercase px-20 py-3"
              >
                CO2 per capita
              </th>
            </tr>
          </thead>
          <tbody>
            {indexArr.map((i) => {
              return (
                <tr key={currentCountry?.data[Number(i)].year}>
                  <th scope="row">{currentCountry?.data[Number(i)].year}</th>
                  <td className="text-center">
                    {currentCountry?.data[Number(i)].population ? (
                      currentCountry?.data[Number(i)].population
                    ) : (
                      <p>n/a</p>
                    )}
                  </td>
                  <td className="text-center">
                    {currentCountry?.data[Number(i)].cement_co2 ? (
                      currentCountry?.data[Number(i)].cement_co2
                    ) : (
                      <p>n/a</p>
                    )}
                  </td>
                  <td className="text-center">
                    {currentCountry?.data[Number(i)].cement_co2_per_capita ? (
                      currentCountry?.data[Number(i)].cement_co2_per_capita
                    ) : (
                      <p>n/a</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CountryDataTable;
