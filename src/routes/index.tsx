import { component$, Resource } from "@builder.io/qwik";
import {
    DocumentHead,
    RequestHandler,
    useEndpoint,
} from "@builder.io/qwik-city";
import { getBnetToken } from "../lib/bnet/auth";
import { ProfileData } from "../types/api/profile";
import { getProfileData } from "../lib/bnet/api";
import HeroItem from "../components/profile/CharacterItem";

type PageData = ProfileData | null;
export const onGet: RequestHandler<PageData> = async () => {
    const token = await getBnetToken();
    const profile = await getProfileData(
        "GhostJester#1468",
        token?.access_token!
    );
    console.log("profile: ", profile);
    return profile;
};
export default component$(() => {
    const profileData = useEndpoint<typeof onGet>();
    return (
        <div>
            <h1>Welcome to D3 Tracker</h1>

            <p>The Diablo III character tracker</p>
            <Resource
                value={profileData}
                onPending={() => <p>Loading player profile... </p>}
                onRejected={() => <p> Error loading player profile </p>}
                onResolved={(profile) => (
                    <>
                        <p>{profile?.battleTag}</p>
                        {profile?.heroes.map((hero) => (
                            <HeroItem hero={hero} />
                        ))}
                    </>
                )}
            />
        </div>
    );
});

export const head: DocumentHead = {
    title: "D3 Tracker",
};
