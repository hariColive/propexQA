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
    <div className="rounded-md bg-white custom-scrollbar">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center px-1 py-1 cursor-pointer hover:bg-gray-100"
        onClick={toggleOpen}
      >
        <h2 className="font-semibold">{title}</h2>
        <span className="text-black">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>

      {/* Accordion Body */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-y-auto px-1 ${
          isOpen ? "max-h-60 py-2" : "max-h-0 py-0"
        }`}
      >
        {/* Search input */}
        {searchableTypes.includes(type) && (
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${title.toLowerCase()}...`}
            className="w-full mb-2 px-2 py-1 text-sm border rounded"
          />
        )}

        {/* Checkbox List */}
        {filteredItems.map((item, index) => (
          <label key={index} className="block text-sm mb-1">
            <input
              type="checkbox"
              value={item.Menu || item.Name}
              checked={selectedFilters[type]?.includes(item.Menu || item.Name)}
              onChange={() => onChange(type, item.Menu || item.Name)}
              className="mr-2"
            />
            {item.Menu || item.Name}
          </label>
        ))}

        {/* No results found */}
        {filteredItems.length === 0 && (
          <p className="text-sm text-gray-400">No matching results</p>
        )}
      </div>
    </div>
  );
};

export default AccordionFilter;
