module.exports = {
  extend: 'apostrophe-pieces',
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  addFields: [
    {
      name: 'title',
      label: 'Full Name',
      type: 'string',
      required: true,
      contextual: true
    },
    {
      name: 'firstName',
      label: 'First Name',
      type: 'string',
      help: 'Choose First Name(s)',
      required: true
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'string',
      help: 'Choose Last Name(s)',
      required: true
    },
    {
      name: '_thumbnail',
      type: 'joinByOne',
      withType: 'apostrophe-image',
      label: 'Profile Picture',
      help: 'Choose profile picture',
      filters: {
        projection: {
          attachment: true,
          description: true,
          title: true
        }
      }
    },
    {
      name: 'body',
      label: 'Biography',
      type: 'area',
      help: 'Choose Biography',
      options: {
        limit: 1,
        widgets: {
          'apostrophe-rich-text': {
            toolbar: [
              'Styles',
              'Bold',
              'Italic',
              'Blockquote',
              'BulletedList',
              'Link'
            ],
            styles: [
              {
                name: 'Meta',
                element: 'h5',
                attributes: {
                  class: 'accent-color'
                }
              },
              {
                name: 'Flow Text',
                element: 'p',
                attributes: {
                  class: 'flow-text'
                }
              },
              {
                name: 'Flow Text Centered',
                element: 'p',
                attributes: {
                  class: 'flow-text'
                },
                styles: {
                  'text-align': 'center'
                }
              },
              {
                name: 'Centered',
                element: 'p',
                styles: {
                  'text-align': 'center'
                }
              }
            ],
            controls: {
              movable: true,
              cloneable: false,
              removable: true,
              position: 'top-right'
            }
          }
        }
      }
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      help: 'Choose Email Address'
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string',
      help: 'Choose Phone Number'
    },
    {
      name: 'topImage',
      label: 'Top Image',
      type: 'area',
      options: {
        limit: 1,
        widgets: {
          'card': {
            aspectRatio: [ 3, 1 ],
            focalPoint: true,
            noHeight: true,
            limit: 1,
            controls: {
              cloneable: false,
              removable: true,
              position: 'top-right'
            }
          }
        }
      }
    }
  ],
  arrangeFields: [
    {
      name: 'basics',
      label: 'Basics',
      fields: ['firstName', 'lastName', '_thumbnail']
    },
    {
      name: 'about',
      label: 'About',
      fields: ['body', 'email', 'phone', 'topImage']
    },
    {
      name: 'info',
      label: 'Info',
      fields: ['slug', 'tags', 'published']
    }
  ],
  construct: function(self, options) {
    self.beforeSave = function(req, piece, options, callback) {
      piece.title = piece.firstName + ' ' + piece.lastName;
      // NEED TO INSERT AUTO SLUG GENERATION!!!!!!!
      return callback();
    };
  }
};
