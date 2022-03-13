const Item = require('../../../server/database/item.js');

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    if (req.method === 'GET') {
      if (id) {
        const item = await Item.findByPk(req.params.id);
        res.send(item);
      }
    } else if (req.method === 'PUT') {
      const targetItem = await Item.findByPk(id);
      const editedItem = req.body;
      const updatedItem = await targetItem.update(editedItem);
      res.send(updatedItem);
    }
  } catch (error) {
    console.log(error);
  }
}
