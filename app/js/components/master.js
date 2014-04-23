/** @jsx React.DOM */

React.renderComponent(<Title name="JS xTreme" />, document.getElementById('title1'));
React.renderComponent(<Title name="Facebook" />, document.getElementById('title2'));

React.renderComponent(<Clock face="Atomic" />, document.getElementById('clock1'));
React.renderComponent(<Clock face="GPS" />, document.getElementById('clock2'));
React.renderComponent(<Clock face="Iridium" />, document.getElementById('clock3'));

React.renderComponent(<Weather zip="37206" />, document.getElementById('weather1'));
React.renderComponent(<Weather zip="10111" />, document.getElementById('weather2'));
React.renderComponent(<Weather zip="77450" />, document.getElementById('weather3'));
