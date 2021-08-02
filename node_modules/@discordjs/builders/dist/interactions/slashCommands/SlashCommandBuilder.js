"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashCommandBuilder = void 0;
const tslib_1 = require("tslib");
const ts_mixer_1 = require("ts-mixer");
const Assertions_1 = require("./Assertions");
const NameAndDescription_1 = require("./mixins/NameAndDescription");
const CommandOptions_1 = require("./mixins/CommandOptions");
const SlashCommandSubCommands_1 = require("./SlashCommandSubCommands");
let SlashCommandBuilder = class SlashCommandBuilder {
    constructor() {
        /**
         * The name of this slash command
         */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        /**
         * The description of this slash command
         */
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        /**
         * The options of this slash command
         */
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    /**
     * Returns the final data that should be sent to Discord.
     *
     * **Note:** Calling this function will validate required properties based on their conditions.
     */
    toJSON() {
        Assertions_1.validateRequiredParameters(this.name, this.description, this.options);
        return {
            name: this.name,
            description: this.description,
            options: this.options.map((option) => option.toJSON()),
        };
    }
    /**
     * Adds a new sub command group to this command
     * @param input A function that returns a sub command group builder, or an already built builder
     */
    addSubCommandGroup(input) {
        const { options } = this;
        // First, assert options conditions - we cannot have more than 25 options
        Assertions_1.validateMaxOptionsLength(options);
        // Make sure there is no sub command at the root level - if there is, throw
        const hasSubCommands = options.some((item) => item instanceof SlashCommandSubCommands_1.SlashCommandSubCommandBuilder);
        if (hasSubCommands)
            throw new RangeError(`You cannot mix sub commands and sub command groups at the root level.`);
        // Get the final result
        const result = typeof input === 'function' ? input(new SlashCommandSubCommands_1.SlashCommandSubCommandGroupBuilder()) : input;
        Assertions_1.assertReturnOfBuilder(result, SlashCommandSubCommands_1.SlashCommandSubCommandGroupBuilder);
        // Push it
        options.push(result);
        return this;
    }
    /**
     * Adds a new sub command to this command
     * @param input A function that returns a sub command builder, or an already built builder
     */
    addSubCommand(input) {
        const { options } = this;
        // First, assert options conditions - we cannot have more than 25 options
        Assertions_1.validateMaxOptionsLength(options);
        // Make sure there is no sub command at the root level - if there is, throw
        const hasSubCommandGroups = options.some((item) => item instanceof SlashCommandSubCommands_1.SlashCommandSubCommandGroupBuilder);
        if (hasSubCommandGroups)
            throw new RangeError(`You cannot mix sub commands and sub command groups at the root level.`);
        // Get the final result
        const result = typeof input === 'function' ? input(new SlashCommandSubCommands_1.SlashCommandSubCommandBuilder()) : input;
        Assertions_1.assertReturnOfBuilder(result, SlashCommandSubCommands_1.SlashCommandSubCommandBuilder);
        // Push it
        options.push(result);
        return this;
    }
};
SlashCommandBuilder = tslib_1.__decorate([
    ts_mixer_1.mix(CommandOptions_1.SharedSlashCommandOptions, NameAndDescription_1.SharedNameAndDescription)
], SlashCommandBuilder);
exports.SlashCommandBuilder = SlashCommandBuilder;
//# sourceMappingURL=SlashCommandBuilder.js.map