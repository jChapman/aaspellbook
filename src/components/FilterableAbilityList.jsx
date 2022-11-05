/*
  This example requires Tailwind CSS v3.0+
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid/index.js";
import AbilityCard from "./AbilityCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AbilityList({ abilities }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredAbilities =
    query === ""
      ? abilities
      : abilities.filter((a) => {
          return a.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex flex-col my-4">
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
      <div className="flex flex-wrap justify-center">
        {filteredAbilities.map((a) => (
          <AbilityCard key={a.name} ability={a} />
        ))}
      </div>
    </div>
  );
}
