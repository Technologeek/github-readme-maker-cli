import { Theme } from "../utils/themes";

export abstract class BaseSection {
    constructor(
        protected username: string,
        protected theme: Theme
    ) { }

    abstract generate(): string;
}
