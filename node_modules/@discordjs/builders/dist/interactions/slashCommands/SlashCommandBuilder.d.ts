import type { APIApplicationCommandOption } from 'discord-api-types/v9';
import { SharedNameAndDescription } from './mixins/NameAndDescription';
import { SharedSlashCommandOptions } from './mixins/CommandOptions';
import { SlashCommandSubCommandBuilder, SlashCommandSubCommandGroupBuilder } from './SlashCommandSubCommands';
export declare class SlashCommandBuilder {
    /**
     * The name of this slash command
     */
    readonly name: string;
    /**
     * The description of this slash command
     */
    readonly description: string;
    /**
     * The options of this slash command
     */
    readonly options: ToAPIApplicationCommandOptions[];
    /**
     * Returns the final data that should be sent to Discord.
     *
     * **Note:** Calling this function will validate required properties based on their conditions.
     */
    toJSON(): {
        name: string;
        description: string;
        options: APIApplicationCommandOption[];
    };
    /**
     * Adds a new sub command group to this command
     * @param input A function that returns a sub command group builder, or an already built builder
     */
    addSubCommandGroup(input: SlashCommandSubCommandGroupBuilder | ((subCommandGroup: SlashCommandSubCommandGroupBuilder) => SlashCommandSubCommandGroupBuilder)): SlashCommandSubCommandGroupsOnlyBuilder;
    /**
     * Adds a new sub command to this command
     * @param input A function that returns a sub command builder, or an already built builder
     */
    addSubCommand(input: SlashCommandSubCommandBuilder | ((subCommandGroup: SlashCommandSubCommandBuilder) => SlashCommandSubCommandBuilder)): SlashCommandSubCommandsOnlyBuilder;
}
export interface SlashCommandBuilder extends SharedNameAndDescription, SharedSlashCommandOptions {
}
export interface SlashCommandSubCommandsOnlyBuilder extends SharedNameAndDescription, Pick<SlashCommandBuilder, 'toJSON' | 'addSubCommand'> {
}
export interface SlashCommandSubCommandGroupsOnlyBuilder extends SharedNameAndDescription, Pick<SlashCommandBuilder, 'toJSON' | 'addSubCommandGroup'> {
}
export interface SlashCommandOptionsOnlyBuilder extends SharedNameAndDescription, SharedSlashCommandOptions, Pick<SlashCommandBuilder, 'toJSON'> {
}
export interface ToAPIApplicationCommandOptions {
    toJSON(): APIApplicationCommandOption;
}
//# sourceMappingURL=SlashCommandBuilder.d.ts.map