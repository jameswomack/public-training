////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - render DATA.title in an <h1>
// - render a <ul> with each of DATA.items as an <li>
// - now only render an <li> for mexican food (hint: use DATA.items.filter(...))
// - sort the items in alphabetical order by name (hint: use sort-by https://github.com/staygrimm/sort-by#example)
// - try this again without JSX
//
// Got extra time?
// - add a select dropdown to make filtering on `type` dynamic
// - add a button to toggle the sort order
// - Hint: you'll need an `updateThePage` function that calls `React.render`,
//   and then you'll need to call it in the event handlers of the form controls
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var sortBy = require('sort-by');

var DATA = {
  title: '¡Tu Mero Mole Menu!',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var mexicanFoodElements = DATA.items
.filter(function(item){
  return item.type === 'mexican';
})
.map(function(mexicanItem){
  mexicanItem.name = 'A ' + mexicanItem.name + ' would be awesome.';
  return mexicanItem;
})
.sort(sortBy('name'))
.map(function(mexicanItemSortedAndEnhanced){
  return <li>{mexicanItemSortedAndEnhanced.name}</li>;
});

function render() {
  return (
    <section>
      <h1>{DATA.title}</h1>
      <ul>{mexicanFoodElements}</ul>
    </section>
  );
}

React.render(render(), document.getElementById('app'), () => {
  require('./tests').run();
});
