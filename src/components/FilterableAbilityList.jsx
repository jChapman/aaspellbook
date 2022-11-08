import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid/index.js";
import AbilityCard from "./AbilityCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function hasTagMatchingQuery(ability, query) {
  return ability.tags.filter((tag) => tag.toLowerCase().includes(query.toLowerCase())).length > 0
}

export default function AbilityList({ abilities, tags }) {
  const [query, setQuery] = useState("");

  const filteredAbilities =
    query === ""
      ? abilities
      : abilities.filter((a) => {
          return a.name.toLowerCase().includes(query.toLowerCase()) || hasTagMatchingQuery(a, query)
        });

  return (
    <div className="flex flex-col my-4 pt-4">
      <div className="mx-auto w-1/2 mb-5 transform divide-y overflow-hidden rounded-xl bg-dank-500 shadow-md transition-all shadow-purple-600">
        <Combobox onChange={(item) => (window.location = item.url)}>
          <div className="relative">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            <Combobox.Input
              className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              onChange={(event) => {
                console.log("Updated query");
                setQuery(event.target.value);
              }}
            />
            <Combobox.Options>
              {filteredAbilities.map((a) => {
                <Combobox.Option key={a.name} value={a.name}>
                  {a}
                </Combobox.Option>;
              })}
            </Combobox.Options>
          </div>
        </Combobox>
      </div>
      <div className="flex flex-row flex-wrap justify-center w-3/4 py-4 mx-auto">
        {tags.map(tag => (
          <div className={classNames("rounded-full bg-dank-300 capitalize py-1 px-2 my-1 mx-1 select-none", query===tag && 'outline outline-offset-2 outline-purple-600')} key={tag} onClick={(e) => query === tag ? setQuery("") : setQuery(tag)}>{tag.split(/(?=[A-Z])/).join(' ')}</div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredAbilities.map((a) => (
          <AbilityCard key={a.name} ability={a} />
        ))}
      </div>
    </div>
  );
}
