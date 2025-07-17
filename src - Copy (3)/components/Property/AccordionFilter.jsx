import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionFilter = ({ title, items, type, selectedFilters, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);

  // Enable search for selected filter types
  const searchableTypes = ["amenities", "bedrooms", "houseTypes"];

  // Filter items based on search input
  const filteredItems = searchableTypes.includes(type)
    ? items.filter((item) =>
        (item.Name || item.Menu || "")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    : items;

  return (
    <div className="rounded-md bg-gray-50 border border-gray-200 mb-4">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center px-3 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={toggleOpen}
      >
        <h2 className="font-semibold text-gray-800 text-sm sm:text-base">{title}</h2>
        <span className="text-gray-600">{isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}</span>
      </div>

      {/* Accordion Body */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "max-h-60 py-3 px-3" : "max-h-0 py-0 px-3"
        }`}
      >
        {/* Search input */}
        {searchableTypes.includes(type) && (
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${title.toLowerCase()}...`}
            className="w-full mb-3 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        )}

        {/* Checkbox List */}
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {filteredItems.map((item, index) => (
            <label key={index} className="flex items-center text-sm cursor-pointer hover:bg-gray-100 p-1 rounded">
              <input
                type="checkbox"
                value={item.Menu || item.Name}
                checked={selectedFilters[type]?.includes(item.Menu || item.Name)}
                onChange={() => onChange(type, item.Menu || item.Name)}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">{item.Menu || item.Name}</span>
            </label>
          ))}
        </div>

        {/* No results found */}
        {filteredItems.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-2">No matching results</p>
        )}
      </div>
    </div>
  );
};

export default AccordionFilter;
