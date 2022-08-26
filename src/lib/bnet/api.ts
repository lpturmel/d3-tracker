export const getProfileData = async (
    accountId: string,
    accessToken: string
) => {
    const encodedId = encodeURIComponent(accountId);
    const PROFILE_URL = `https://us.api.blizzard.com/d3/profile/${encodedId}/?locale=en_US`;
    console.log("Bnet profile url: ", PROFILE_URL);
    const profileResponse = await fetch(PROFILE_URL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (profileResponse.status === 200) {
        const profile = await profileResponse.json();
        return profile;
    } else {
        console.log("Profile request response code: ", profileResponse.status);
        console.log(await profileResponse.text());
    }
    return null;
};
