import { component$, useStore } from "@builder.io/qwik";
import { Hero } from "../../types/api/profile";

interface HeroItemProps {
    hero: Hero;
}
const HeroItem = component$<HeroItemProps>(({ hero }) => {
    const state = useStore({ enabled: false });
    console.log(hero);
    const onChange = (e: any) => {
        state.enabled = e.target.checked;
    };
    return (
        <div className="flex p-4 gap-4 w-full rounded-lg ">
            <p className="text-sm"> {hero.level}</p>
            <h2 className="font-semibold text-lg">{hero.name}</h2>
            <p className="text-sm"> {hero.class}</p>
            <p className="text-sm"> {hero.seasonal ? true : false}</p>
            <input
                checked={state.enabled}
                onChange$={onChange}
                type="checkbox"
            />
        </div>
    );
});
export default HeroItem;
