export interface ProfileData {
    battleTag: string;
    paragonLevel: number;
    paragonLevelHardcore: number;
    paragonLevelSeason: number;
    paragonLevelSeasonHardcore: number;
    guildName: string;
    heroes: Hero[];
    lastHeroPlayed: number;
    lastUpdated: number;
    kills: Kills2;
    highestHardcoreLevel: number;
    timePlayed: TimePlayed;
    progression: Progression;
    seasonalProfiles: SeasonalProfiles;
    blacksmith: Blacksmith;
    jeweler: Jeweler;
    mystic: Mystic;
    blacksmithSeason: BlacksmithSeason;
    jewelerSeason: JewelerSeason;
    mysticSeason: MysticSeason;
    blacksmithHardcore: BlacksmithHardcore;
    jewelerHardcore: JewelerHardcore;
    mysticHardcore: MysticHardcore;
    blacksmithSeasonHardcore: BlacksmithSeasonHardcore;
    jewelerSeasonHardcore: JewelerSeasonHardcore;
    mysticSeasonHardcore: MysticSeasonHardcore;
}

export interface Hero {
    id: number;
    name: string;
    class: string;
    classSlug: string;
    gender: number;
    level: number;
    kills: Kills;
    paragonLevel: number;
    hardcore: boolean;
    seasonal: boolean;
    dead: boolean;
    "last-updated": number;
}

export interface Kills {
    elites: number;
}

export interface Kills2 {
    monsters: number;
    elites: number;
    hardcoreMonsters: number;
}

export interface TimePlayed {
    "demon-hunter": number;
    barbarian: number;
    "witch-doctor": number;
    necromancer: number;
    wizard: number;
    monk: number;
    crusader: number;
}

export interface Progression {
    act1: boolean;
    act3: boolean;
    act2: boolean;
    act5: boolean;
    act4: boolean;
}

export interface SeasonalProfiles {
    season26: Season26;
    season25: Season25;
    season23: Season23;
    season0: Season0;
}

export interface Season26 {
    seasonId: number;
    paragonLevel: number;
    paragonLevelHardcore: number;
    kills: Kills3;
    timePlayed: TimePlayed2;
    highestHardcoreLevel: number;
}

export interface Kills3 {
    monsters: number;
    elites: number;
    hardcoreMonsters: number;
}

export interface TimePlayed2 {
    "demon-hunter": number;
    barbarian: number;
    "witch-doctor": number;
    necromancer: number;
    wizard: number;
    monk: number;
    crusader: number;
}

export interface Season25 {
    seasonId: number;
    paragonLevel: number;
    paragonLevelHardcore: number;
    kills: Kills4;
    timePlayed: TimePlayed3;
    highestHardcoreLevel: number;
}

export interface Kills4 {
    monsters: number;
    elites: number;
    hardcoreMonsters: number;
}

export interface TimePlayed3 {
    "demon-hunter": number;
    barbarian: number;
    "witch-doctor": number;
    necromancer: number;
    wizard: number;
    monk: number;
    crusader: number;
}

export interface Season23 {
    seasonId: number;
    paragonLevel: number;
    paragonLevelHardcore: number;
    kills: Kills5;
    timePlayed: TimePlayed4;
    highestHardcoreLevel: number;
}

export interface Kills5 {
    monsters: number;
    elites: number;
    hardcoreMonsters: number;
}

export interface TimePlayed4 {
    "demon-hunter": number;
    barbarian: number;
    "witch-doctor": number;
    necromancer: number;
    wizard: number;
    monk: number;
    crusader: number;
}

export interface Season0 {
    seasonId: number;
    paragonLevel: number;
    paragonLevelHardcore: number;
    kills: Kills6;
    timePlayed: TimePlayed5;
    highestHardcoreLevel: number;
}

export interface Kills6 {
    monsters: number;
    elites: number;
    hardcoreMonsters: number;
}

export interface TimePlayed5 {
    "demon-hunter": number;
    barbarian: number;
    "witch-doctor": number;
    necromancer: number;
    wizard: number;
    monk: number;
    crusader: number;
}

export interface Blacksmith {
    slug: string;
    level: number;
}

export interface Jeweler {
    slug: string;
    level: number;
}

export interface Mystic {
    slug: string;
    level: number;
}

export interface BlacksmithSeason {
    slug: string;
    level: number;
}

export interface JewelerSeason {
    slug: string;
    level: number;
}

export interface MysticSeason {
    slug: string;
    level: number;
}

export interface BlacksmithHardcore {
    slug: string;
    level: number;
}

export interface JewelerHardcore {
    slug: string;
    level: number;
}

export interface MysticHardcore {
    slug: string;
    level: number;
}

export interface BlacksmithSeasonHardcore {
    slug: string;
    level: number;
}

export interface JewelerSeasonHardcore {
    slug: string;
    level: number;
}

export interface MysticSeasonHardcore {
    slug: string;
    level: number;
}
