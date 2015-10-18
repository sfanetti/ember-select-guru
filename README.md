# ember-select-guru
Select component inspired by jQuery Select2, but natively implemented in Emberjs. This is very early release that possibly has some bugs, but we are focsed on improving the stability and covering more use cases.

ember-select-guru main advantage over other Select2 wrappers is it's native implementation. It fully supports Ember 2.0 architecture, using one-way data bindings, dynamic components and closure actions. Thanks to structurized data flow it let's you easily cover nearly any use case, wrapped in Ember Run Loop.

## Installation
ember-select-guru is shipped as ember-cli addon and can be easily installed using:
```
npm install ember-select-guru --save-dev
```
or
```
ember install ember-select-guru
```

## Usage
ember-select-guru currently supports following use cases:
* [Single selection (static and remote - AJAX, ember-data, whatever)](#single)
* [Multiple selection (static and remote)](#multiple)
* [Custom search mechanism](#search)
* [Dynamic components to override by user (option, value, failure state, etc.)](#components)

### <a name="single"></a>Single selection (static)
The simplest use case allows you to create select component with search input. Your template should look like this:
```
{{ember-select-guru
  value=value
  options=options
  onSelect=(action "handleSelect")}}
```
While your controller should at last copy the selected option to `value`:
```
actions: {
  handleSelect(value) {
    this.set('value', value);
  }
}
```

### Single selection (remote)
ember-select-guru is designed to share almost same API for each use case. If you want to fetch your data from remote source on input value change, your template should look like:
```
{{ember-select-guru
  value=value
  options=options
  onSearchInputChange=(action "queryTermChanged")
  onSelect=(action "handleSelect")}}
```
While your controller should copy the selected option to `value` as formerly, but additionally return Promise that is responsible for fetching data from `onSearchInputChange` action:
```
actions: {
  (...)
  queryTermChanged(queryTerm) {
    return this.store.query('user', { q: queryTerm }).then((result) => {
      this.set('options', result.toArray());
    });
  }
}
```
ember-select-guru will chain to returned Promise and enter `isPending` state. Until the promise resolves, it won't display options list but `pendingComponent` template. Thanks to Ember Run Loop, if you set `options` binding with proper data in `then` on the same Promise you return, the component will both switch to normal mode and render all new options in the same moment.

### <a name="multiple"></a>Multiple selection
Multiple selection is working same as single selection, except setting `multiple` binding to true and operate on array of values instead of single value:
```
{{ember-select-guru
  value=value
  options=options
  multiple=true
  onSelect=(action "handleSelect")}}
```
However, in controller you need to make sure that the initial value of your `value` binding is empty array:
```
value: [],
actions: {
  handleSelect(values) {
    this.set('value', values);
  }
}
```
If you would like to have multiple options with remote data fetching, all you need to do is to return a Promise as in single selection mode.

### <a name="search"></a>Custom search
By default, ember-select-guru will perform searching through objects available in `options` binding by default key `searchKey` set to `name`. If your objects should be searched using different key, you can easily set it to other one:
```
{{ember-select-guru
  value=value
  options=options
  searchKey="description"
  onSelect=(action "handleSelect")}}
```

However, it is common to search not only by one key but multiple. It also might be that you want to perform some really unique way of searching, other than default string matching. In such case, all you need to do is return an array of results from `onSearchInputChange` that intersects with an array available through `options` binding:
```
{{ember-select-guru
  value=value
  options=options
  onSearchInputChange=(action "queryTermChanged")
  onSelect=(action "handleSelect")}}
```
And in your controller:
```
actions: {
  queryTermChanged(queryTerm) {
    let options = [];
    // do your unique search case here
    // return array of results that match your search
    return options;
  }
}
```
ember-select-guru will render the results based on the array you retrurned. You don't have to get rid of currently selected element if it matches - ember-select-guru will do that for you.

### <a name="components"></a>Dynamic components
Due to fact that ember-select-guru is natively developed in Emberjs, it is constructed from components. As a user, you can provide your own components to use by ember-select-guru in place of option in list (`optionComponent`), single value (`singleValueComponent`), multiple value (`multipleValueComponent`), pending component while waiting for Promise resolves (`pendingComponent`), failure component for Promise rejection (`failureComponent`) and last, but not least - no options component (`noOptionsComponent`).

Your components that are passed to ember-select-guru must implement some simple API that is used by ember-select-guru. Check out detailed examples for this.

## Contributing and development
Bug reports and pull requests are welcome on GitHub at https://github.com/netguru/ember-select-guru.

### Running
* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests
* `ember test`
* `ember test --server`

## Maintainers
* [Kuba Niechciał](https://github.com/jniechcial)
* [Krzysztof Urban](https://github.com/mamut)

## License
The gem is available as open source under the terms of the [MIT License](https://github.com/netguru/ember-select-guru/blob/master/LICENSE.md).
