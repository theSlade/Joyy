"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashCommandSubCommandBuilder = exports.SlashCommandSubCommandGroupBuilder = void 0;
const tslib_1 = require("tslib");
require("discord-api-types/v9");
const ts_mixer_1 = require("ts-mixer");
const Assertions_1 = require("./Assertions");
const CommandOptions_1 = require("./mixins/CommandOptions");
const NameAndDescription_1 = require("./mixins/NameAndDescription");
/**
 * Represents a folder for sub commands
 *
 * For more information, go to https://discord.com/developers/docs/interactions/slash-commands#subcommands-and-subcommand-groups
 */
let SlashCommandSubCommandGroupBuilder = class SlashCommandSubCommandGroupBuilder {
    constructor() {
        /**
         * The name of this sub command group
         */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        /**
         * The description of this sub command group
         */
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        /**
         * The sub commands part of this sub command group
         */
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    /**
     * Adds a new sub command to this group
     * @param input A function that returns a sub command builder, or an already built builder
     */
    addSubCommand(input) {
        const { options } = this;
        // First, assert options conditions - we cannot have more than 25 options
        Assertions_1.validateMaxOptionsLength(options);
        // Get the final result
        const result = typeof input === 'function' ? input(new SlashCommandSubCommandBuilder()) : input;
        Assertions_1.assertReturnOfBuilder(result, SlashCommandSubCommandBuilder);
        // Push it
        options.push(result);
        return this;
    }
    toJSON() {
        Assertions_1.validateRequiredParameters(this.name, this.description, this.options);
        return {
            type: 2 /* SubcommandGroup */,
            name: this.name,
            description: this.description,
            options: this.options.map((option) => option.toJSON()),
        };
    }
};
SlashCommandSubCommandGroupBuilder = tslib_1.__decorate([
    ts_mixer_1.mix(NameAndDescription_1.SharedNameAndDescription)
], SlashCommandSubCommandGroupBuilder);
exports.SlashCommandSubCommandGroupBuilder = SlashCommandSubCommandGroupBuilder;
/**
 * Represents a sub command
 *
 * For more information, go to https://discord.com/developers/docs/interactions/slash-commands#subcommands-and-subcommand-groups
 */
let SlashCommandSubCommandBuilder = class SlashCommandSubCommandBuilder {
    constructor() {
        /**
         * The name of this sub command
         */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        /**
         * The description of this sub command
         */
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        /**
         * The options of this sub command
         */
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    toJSON() {
        Assertions_1.validateRequiredParameters(this.name, this.description, this.options);
        return {
            type: 1 /* Subcommand */,
            name: this.name,
            description: this.description,
            options: this.options.map((option) => option.toJSON()),
        };
    }
};
SlashCommandSubCommandBuilder = tslib_1.__decorate([
    ts_mixer_1.mix(NameAndDescription_1.SharedNameAndDescription, CommandOptions_1.SharedSlashCommandOptions)
], SlashCommandSubCommandBuilder);
exports.SlashCommandSubCommandBuilder = SlashCommandSubCommandBuilder;
//# sourceMappingURL=SlashCommandSubCommands.js.map