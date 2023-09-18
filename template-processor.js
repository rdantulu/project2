'use strict';
function TemplateProcessor(templateString)
{
    this.templateString = templateString;
}

TemplateProcessor.prototype.fillIn = function (dictionary)
{
    return this.templateString.replace(/\{\{(\w+)\}\}/g, function (match, property)
    {
        return dictionary[property] || '';
    });
};
