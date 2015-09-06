/*
<%= header %>
*/
import React from 'react';
import Template from './template.jsx';<% if (addStore !== 'none') { %>
import <%= _.camelCase(name) %>Channel from './store.js';
<% } %>
// only load style when using webpack
/* istanbul ignore if  */
if (__WEBPACK__) {
    require('./style.<%= style %>');
}

const <%= _.capitalize(_.camelCase(name)) %>Component = React.createClass({
    render: Template,
});

export default <%= _.capitalize(_.camelCase(name)) %>Component;
