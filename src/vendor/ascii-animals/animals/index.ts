/**
 * LOCAL CHANGE (see ../README.md): upstream registers all seven animals here.
 * This copy keeps only the dragonflies, so the butterflies, koi, jellyfish,
 * frogs, cranes and crabs — and their shapes — never reach the bundle the
 * footer ships.
 */
import type { Animal } from "../flock";
import { dragonflies } from "./dragonflies";

/** Every animal, in the order the choices show them. */
export const ANIMALS = {
    dragonflies,
} satisfies Record<string, Animal<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any

export type AnimalKey = keyof typeof ANIMALS;

export const ANIMAL_KEYS = Object.keys(ANIMALS) as AnimalKey[];
