import { ApplicationCommandOptionType } from 'discord-api-types/v9';
import { SharedSlashCommandOptions } from './mixins/CommandOptions';
import { SharedNameAndDescription } from './mixins/NameAndDescription';
import type { ToAPIApplicationCommandOptions } from './SlashCommandBuilder';
/**
 * Represents a folder for sub commands
 *
 * For more information, go to https://discord.com/developers/docs/interactions/slash-commands#subcommands-and-subcommand-groups
 */
export declare class SlashCommandSubCommandGroupBuilder implements ToAPIApplicationCommandOptions {
    /**
     * The name of this sub command group
     */
    readonly name: string;
    /**
     * The description of this sub command group
     */
    readonly description: string;
    /**
     * The sub commands part of this sub command group
     */
    readonly options: ToAPIApplicationCommandOptions[];
    /**
     * Adds a new sub command to this group
     * @param input A function that returns a sub command builder, or an already built builder
     */
    addSubCommand(input: SlashCommandSubCommandBuilder | ((subCommandGroup: SlashCommandSubCommandBuilder) => SlashCommandSubCommandBuilder)): this;
    toJSON(): {
        type: ApplicationCommandOptionType;
        name: string;
        description: string;
        options: import("discord-api-types/v9").APIApplicationCommandOption[];
    };
}
export interface SlashCommandSubCommandGroupBuilder extends SharedNameAndDescription {
}
/**
 * Represents a sub command
 *
 * For more information, go to https://discord.com/developers/docs/interactions/slash-commands#subcommands-and-subcommand-groups
 */
export declare class SlashCommandSubCommandBuilder implements ToAPIApplicationCommandOptions {
    /**
     * The name of this sub command
     */
    readonly name: string;
    /**
     * The description of this sub command
     */
    readonly description: string;
    /**
     * The options of this sub command
     */
    readonly options: ToAPIApplicationCommandOptions[];
    toJSON(): {
        type: ApplicationCommandOptionType;
        name: string;
        description: string;
        options: import("discord-api-types/v9").APIApplicationCommandOption[];
    };
}
export interface SlashCommandSubCommandBuilder extends SharedNameAndDescription, SharedSlashCommandOptions<false> {
}
//# sourceMappingURL=SlashCommandSubCommands.d.ts.map