module.exports = {
  extend: 'apostrophe-pieces-pages',
  name: 'galleries-pages',
  label: 'Gallery',
  perPage: 2,
  arrangeFields: [
    { name: 'options', label: 'Options', fields: [ 'withTags', '_ordering', 'buttonOn', 'links' ] }
  ]
};
