import { ClockIcon } from "@heroicons/react/24/outline";
export default function AbilityCard(props) {
  const {ability} = props;
  const values = Array.from(new Set(ability.values));
  return (
    <div className="m-2 rounded-xl bg-dank-600 shadow-lg shadow-dank-900 max-w-lg flex flex-col">
      <header
        className="p-4 rounded-t-xl bg-dank-500 
    text-slate-200 text-2xl font-bold uppercase"
      >
        {ability.name}
      </header>
      <div className="flex flex-row border-b-2 border-slate-500 py-2">
        <div id="types" className="m-2 text-slate-400">
          {ability.categories.map((catStr) => (
            <div key={catStr}>{catStr}</div>
          ))}
        </div>
        <img
          className="ml-auto mr-4 shadow-sm"
          src={`https://abilityarena.com/images/ability_icons/${ability.icon}.png`}
        ></img>
      </div>
      <div id="desc" className="p-2 text-purple-200">
        {ability.description}
      </div>
      <div id="values" className="p-2">
        {values.map((val) => (
          <div key={val}>
            <span className="text-purple-400 uppercase">
              {val.split(":")[0]}:
            </span>
            <span>{val.split(":")[1]}</span>
          </div>
        ))}
        <div className="flex flex-wrap items-center space-x-6">
          {ability.cooldowns.length > 0 && (
            <div className="flex items-center py-2 space-x-1">
            <ClockIcon className="w-5 h-5"/>
              <span>
                {ability.cooldowns
                  .slice(0, Math.min(ability.cooldowns.length, 3))
                  .join(" / ")}
              </span>
            </div>
          )}
          {ability.manaCost.length > 0 && (
            <>
              <div className="flex items-center py-2 space-x-1">
                <div className="h-4 w-4 bg-blue-500 rounded-sm"></div>
                <span>
                  {ability.manaCost
                    .slice(0, Math.min(ability.manaCost.length, 3))
                    .join(" / ")}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <div id="super" className="p-2 mt-auto mb-0 bg-dank-100">
        <span className="text-blue-500">Super:</span>
        <span className="text-purple-200">
          {ability.superUpgrade.split("Super: ")[1]}
        </span>
      </div>
      <div id="gaben" className="p-2 mb-4 bg-dank-300 ">
        <span className="text-orange-400">Gaben:</span>
        <span>{ability.gabenUpgrade.split("Gaben: ")[1]}</span>
      </div>
    </div>
  );
}
