"use strict";
function TemplateProcessor(template){
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary)
{
    var regex = /\{\{([^{}]+?)\}\}/g;
    var finalTemplate =this.template.replace(regex,function(match,property)
    {
        if(dictionary[property]!== null && typeof (dictionary[property])!== "undefined")
        {
            return dictionary[property];
        }
        else
        {
            return '';
        }
    });

    return finalTemplate;
};
