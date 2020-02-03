module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Infinite Widget',
  addFields: [
    {
      name: 'posts',
      label: 'Posts',
      type: 'array',
      titleField: 'name',
      schema: [
        {
          name: 'name',
          type: 'string',
          label: 'Name'
        },
        {
          name: '_image',
          type: 'joinByOne',
          withType: 'apostrophe-image',
          label: 'Image',
          required: true,
          filters: {
            projection: {
              attachment: 1,
              description: 1,
              title: 1
            }
          }
        }
      ]
    }
  ]
};
