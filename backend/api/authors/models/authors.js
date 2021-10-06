const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.username) {
        data.slug = slugify(data.username);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.username) {
        data.slug = slugify(data.username);
      }
    },
  },
};
