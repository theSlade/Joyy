import { SlashCommandBooleanOption } from '../options/boolean';
import { SlashCommandChannelOption } from '../options/channel';
import { SlashCommandIntegerOption } from '../options/integer';
import { SlashCommandMentionableOption } from '../options/mentionable';
import { SlashCommandRoleOption } from '../options/role';
import { SlashCommandStringOption } from '../options/string';
import { SlashCommandUserOption } from '../options/user';
import type { ToAPIApplicationCommandOptions } from '../SlashCommandBuilder';
export declare class SharedSlashCommandOptions<ShouldOmitSubCommandFunctions = true> {
    readonly options: ToAPIApplicationCommandOptions[];
    /**
     * Adds a boolean option
     * @param input A function that returns an option builder, or an already built builder
     */
    addBooleanOption(input: SlashCommandBooleanOption | ((builder: SlashCommandBooleanOption) => SlashCommandBooleanOption)): ShouldOmitSubCommandFunctions extends true ? Omit<this, "addSubCommand" | "addSubCommandGroup"> : this;
    /**
     * Adds a user option
     * @param input A function that returns an option builder, or an already built builder
     */
    addUserOption(input: SlashCommandUserOption | ((builder: SlashCommandUserOption) => SlashCommandUserOption)): ShouldOmitSubCommandFunctions extends true ? Omit<this, "addSubCommand" | "addSubCommandGroup"> : this;
    /**
     * Adds a channel option
     * @param input A function that returns an option builder, or an already built builder
     */
    addChannelOption(input: SlashCommandChannelOption | ((builder: SlashCommandChannelOption) => SlashCommandChannelOption)): ShouldOmitSubCommandFunctions extends true ? Omit<this, "addSubCommand" | "addSubCommandGroup"> : this;
    /**
     * Adds a role option
     * @param input A function that returns an option builder, or an already built builder
     */
    addRoleOption(input: SlashCommandRoleOption | ((builder: SlashCommandRoleOption) => SlashCommandRoleOption)): ShouldOmitSubCommandFunctions extends true ? Omit<this, "addSubCommand" | "addSubCommandGroup"> : this;
    /**
     * Adds a mentionable option
     * @param input A function that returns an option builder, or an already built builder
     */
    addMentionableOption(input: SlashCommandMentionableOption | ((builder: SlashCommandMentionableOption) => SlashCommandMentionableOption)): ShouldOmitSubCommandFunctions extends true ? Omit<this, "addSubCommand" | "addSubCommandGroup"> : this;
    /**
     * Adds a string option
     * @param input A function that returns an option builder, or an already built builder
     */
    addStringOption(input: SlashCommandStringOption | ((builder: SlashCommandStringOption) => SlashCommandStringOption)): ShouldOmitSubCommandFunctions extends true ? Omit<this, "addSubCommand" | "addSubCommandGroup"> : this;
    /**
     * Adds an integer option
     * @param input A function that returns an option builder, or an already built builder
     */
    addIntegerOption(input: SlashCommandIntegerOption | ((builder: SlashCommandIntegerOption) => SlashCommandIntegerOption)): ShouldOmitSubCommandFunctions extends true ? Omit<this, "addSubCommand" | "addSubCommandGroup"> : this;
    private _sharedAddOptionMethod;
}
//# sourceMappingURL=CommandOptions.d.ts.map