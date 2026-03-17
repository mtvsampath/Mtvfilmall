// command.js
var commands = [];

function cmd(info, func) {
    var data = info;
    data.function = func;

    data.pattern = (info.pattern || '').toLowerCase();
    data.alias = info.alias || [];
    data.react = info.react || '';
    data.on = info.on || 'command'; // 'command', 'body', or 'number'

    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if (!info.filename) data.filename = "Not Provided";

    commands.push(data);
    return data;
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands
};
