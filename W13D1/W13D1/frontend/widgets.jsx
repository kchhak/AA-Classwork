import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const tabDiv = document.getElementById("tab-div");

  const taberet = [{title: 'one', content: 'tab one stuff'}, 
    { title: 'two', content: 'tab two stuff' },
    { title: 'three', content: 'tab 3 stuff' }];

  function Root(){
    return (
      <div>
        <Clock />
        <div class="doodads">
        <Tabs tabs={taberet} />
        </div>
      </div>
    )
  }
  ReactDOM.render(<Root/>, root);
});

